import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const siteUrl = process.env.SITE_URL || 'https://traceremove.com'
const languages = ['en', 'fr', 'es']

const routeConfig = [
  { path: '', changefreq: 'weekly', priority: '1.0', source: 'src/App.tsx' },
  { path: 'services', changefreq: 'monthly', priority: '0.9', source: 'src/App.tsx' },
  { path: 'about', changefreq: 'monthly', priority: '0.8', source: 'src/App.tsx' },
  { path: 'team', changefreq: 'monthly', priority: '0.8', source: 'src/App.tsx' },
  { path: 'case-studies', changefreq: 'monthly', priority: '0.8', source: 'src/App.tsx' },
  { path: 'blog', changefreq: 'weekly', priority: '0.7', source: 'src/App.tsx' },
  { path: 'faq', changefreq: 'monthly', priority: '0.7', source: 'src/App.tsx' },
  { path: 'contact', changefreq: 'monthly', priority: '0.8', source: 'src/App.tsx' },
  { path: 'academy', changefreq: 'monthly', priority: '0.7', source: 'src/App.tsx' },
  { path: 'trust', changefreq: 'monthly', priority: '0.7', source: 'src/App.tsx' },
  { path: 'command-center', changefreq: 'monthly', priority: '0.7', source: 'src/App.tsx' },
  { path: 'partners', changefreq: 'monthly', priority: '0.7', source: 'src/App.tsx' },
  { path: 'media', changefreq: 'monthly', priority: '0.7', source: 'src/App.tsx' },
  { path: 'breach-check', changefreq: 'weekly', priority: '0.8', source: 'src/App.tsx' },
]

const serviceSlugs = [
  'emergency-orm',
  'removal-packages',
  'security-takedown',
  'design-ops',
  'trace-removal',
  'content-suppression',
  'review-management',
  'personal-branding',
  'crisis-management',
  'reputation-monitoring',
  'data-broker-removal',
]

const resolveDate = (sourcePath) => {
  try {
    return statSync(resolve(sourcePath)).mtime.toISOString().split('T')[0]
  } catch {
    return new Date().toISOString().split('T')[0]
  }
}

const getBlogEntries = () => {
  const folder = resolve('src', 'content', 'blog')
  try {
    return readdirSync(folder)
      .filter((name) => name.endsWith('.md'))
      .map((name) => {
        const fullPath = resolve(folder, name)
        const source = readFileSync(fullPath, 'utf8')
        const slugMatch = source.match(/^slug:\s*"?([\w-]+)"?$/m)
        return {
          slug: slugMatch?.[1] || name.replace(/\.md$/, ''),
          lastmod: resolveDate(fullPath),
        }
      })
  } catch {
    return []
  }
}

const blogEntries = getBlogEntries()

const langPrefix = (language) => (language === 'en' ? '' : `/${language}`)

const fullUrl = (language, path) => {
  const prefix = langPrefix(language)
  const normalized = path ? `${prefix}/${path}` : `${prefix}/`
  return `${siteUrl}${normalized === '/' ? '/' : normalized}`
}

const makeAlternates = (path) =>
  languages
    .map((language) => `    <xhtml:link rel="alternate" hreflang="${language}" href="${fullUrl(language, path)}"/>`)
    .join('\n')

const makeUrlEntry = ({ language, path, lastmod, changefreq, priority }) => `  <url>
    <loc>${fullUrl(language, path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${makeAlternates(path)}
    <xhtml:link rel="alternate" hreflang="x-default" href="${fullUrl('en', path)}"/>
  </url>`

const languageXml = (language) => {
  const entries = []

  for (const route of routeConfig) {
    entries.push(
      makeUrlEntry({
        language,
        path: route.path,
        lastmod: resolveDate(route.source),
        changefreq: route.changefreq,
        priority: route.priority,
      }),
    )
  }

  for (const slug of serviceSlugs) {
    entries.push(
      makeUrlEntry({
        language,
        path: `services/${slug}`,
        lastmod: resolveDate('src/data/coreServices.ts'),
        changefreq: 'monthly',
        priority: '0.9',
      }),
    )
  }

  for (const post of blogEntries) {
    entries.push(
      makeUrlEntry({
        language,
        path: `blog/${post.slug}`,
        lastmod: post.lastmod,
        changefreq: 'weekly',
        priority: '0.7',
      }),
    )
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`
}

for (const language of languages) {
  writeFileSync(resolve('public', `sitemap-${language}.xml`), languageXml(language))
}

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${siteUrl}/sitemap-en.xml</loc></sitemap>
  <sitemap><loc>${siteUrl}/sitemap-fr.xml</loc></sitemap>
  <sitemap><loc>${siteUrl}/sitemap-es.xml</loc></sitemap>
</sitemapindex>
`

writeFileSync(resolve('public', 'sitemap.xml'), sitemapIndex)
writeFileSync(
  resolve('public', 'robots.txt'),
  `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /process.php

Sitemap: ${siteUrl}/sitemap.xml
`,
)
