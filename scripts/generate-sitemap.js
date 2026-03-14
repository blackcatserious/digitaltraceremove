import { promises as fs } from 'node:fs'
import path from 'node:path'

const DIST_DIR = path.resolve('dist')
const OUTPUT_FILE = path.join(DIST_DIR, 'sitemap.xml')
const BASE_URL = 'https://traceremove.com'
const DEFAULT_CHANGEFREQ = 'weekly'
const DEFAULT_PRIORITY = '0.7'
const LANGUAGE_CODES = ['en', 'fr', 'es']

const escapeXml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const normalizeRoute = (filePath) => {
  const relativePath = path.relative(DIST_DIR, filePath).replace(/\\/g, '/')

  if (relativePath === 'index.html') {
    return '/'
  }

  if (relativePath.endsWith('/index.html')) {
    return `/${relativePath.slice(0, -'index.html'.length)}`
  }

  return `/${relativePath.replace(/\.html$/, '')}`
}

const toAbsoluteUrl = (route) => `${BASE_URL}${route === '/' ? '/' : route}`

const getAlternates = (route) => {
  const languageMatch = route.match(/^\/(en|fr|es)(\/.*)?$/)
  if (!languageMatch) {
    return []
  }

  const suffix = languageMatch[2] ?? '/'

  return LANGUAGE_CODES.map((languageCode) => ({
    hreflang: languageCode,
    href: toAbsoluteUrl(`/${languageCode}${suffix}`.replace(/\/+/g, '/')),
  }))
}

const collectHtmlFiles = async (directory) => {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const resolvedPath = path.join(directory, entry.name)
      if (entry.isDirectory()) {
        return collectHtmlFiles(resolvedPath)
      }
      return entry.isFile() && entry.name.endsWith('.html') ? [resolvedPath] : []
    }),
  )

  return files.flat()
}

const getPriority = (route) => {
  if (route === '/') {
    return '1.0'
  }
  if (/^\/(en|fr|es)\/?$/.test(route)) {
    return '0.9'
  }
  return DEFAULT_PRIORITY
}

const generateSitemap = async () => {
  const htmlFiles = await collectHtmlFiles(DIST_DIR)
  const now = new Date().toISOString()

  const entries = htmlFiles
    .map((filePath) => normalizeRoute(filePath))
    .sort((a, b) => a.localeCompare(b))
    .map((route) => {
      const alternates = getAlternates(route)
      const alternateTags = alternates
        .map(
          ({ hreflang, href }) =>
            `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${escapeXml(href)}" />`,
        )
        .join('\n')

      return [
        '  <url>',
        `    <loc>${escapeXml(toAbsoluteUrl(route))}</loc>`,
        `    <lastmod>${now}</lastmod>`,
        `    <changefreq>${DEFAULT_CHANGEFREQ}</changefreq>`,
        `    <priority>${getPriority(route)}</priority>`,
        alternateTags,
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n')
    })

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n')

  await fs.writeFile(OUTPUT_FILE, sitemap, 'utf8')
  console.log(`Sitemap generated at ${OUTPUT_FILE}`)
}

generateSitemap().catch((error) => {
  console.error('Failed to generate sitemap:', error)
  process.exit(1)
})
