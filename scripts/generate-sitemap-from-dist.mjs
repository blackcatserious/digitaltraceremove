import { readdirSync, statSync, writeFileSync, existsSync } from 'node:fs'
import { resolve, relative, sep } from 'node:path'

const siteUrl = 'https://traceremove.com'
const distDir = resolve('dist', 'client')
const publicSitemap = resolve('public', 'sitemap.xml')
const distSitemap = resolve('dist', 'client', 'sitemap.xml')

if (!existsSync(distDir)) {
  throw new Error(`SSG output not found at ${distDir}. Run build first.`)
}

const walk = (dir) => {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = resolve(dir, entry)
    const st = statSync(full)
    if (st.isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

const htmlFiles = walk(distDir).filter((file) => file.endsWith('.html'))

const toPath = (file) => {
  const rel = relative(distDir, file).split(sep).join('/')
  if (rel === 'index.html') return '/'
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'/index.html'.length)}`
  return `/${rel.replace(/\.html$/, '')}`
}

const allRoutes = Array.from(new Set(htmlFiles.map(toPath))).filter((p) => !p.startsWith('/404'))

const getLang = (path) => {
  if (path === '/fr' || path.startsWith('/fr/')) return 'fr'
  if (path === '/es' || path.startsWith('/es/')) return 'es'
  return 'en'
}

const baseKey = (path) => path.replace(/^\/(fr|es)(?=\/|$)/, '') || '/'

const groups = new Map()
for (const route of allRoutes) {
  const key = baseKey(route)
  if (!groups.has(key)) groups.set(key, {})
  groups.get(key)[getLang(route)] = route
}

const isoDate = new Date().toISOString().split('T')[0]

const urlEntry = (route) => {
  const lang = getLang(route)
  const key = baseKey(route)
  const variants = groups.get(key) || {}
  const hrefs = {
    en: variants.en ? `${siteUrl}${variants.en}` : null,
    fr: variants.fr ? `${siteUrl}${variants.fr}` : null,
    es: variants.es ? `${siteUrl}${variants.es}` : null,
  }

  const alternates = Object.entries(hrefs)
    .filter(([, href]) => Boolean(href))
    .map(([hreflang, href]) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`)
    .join('\n')

  const canonical = `${siteUrl}${route}`
  return `  <url>\n    <loc>${canonical}</loc>\n    <lastmod>${isoDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n${alternates}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${hrefs.en ?? canonical}"/>\n  </url>`
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${allRoutes
  .sort((a, b) => a.localeCompare(b))
  .map(urlEntry)
  .join('\n')}\n</urlset>\n`

writeFileSync(publicSitemap, xml)
writeFileSync(distSitemap, xml)

console.log(`Generated sitemap with ${allRoutes.length} URLs from dist/client HTML.`)
