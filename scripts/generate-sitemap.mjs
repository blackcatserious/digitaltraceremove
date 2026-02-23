import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const siteUrl = process.env.SITE_URL || 'https://traceremove.com'
const today = new Date().toISOString().split('T')[0]

const languages = ['en', 'fr', 'es']

const routeConfig = [
  { key: 'home', path: '', changefreq: 'weekly', priority: '1.0' },
  { key: 'services', path: 'services', changefreq: 'weekly', priority: '0.9' },
  { key: 'caseStudies', path: 'case-studies', changefreq: 'weekly', priority: '0.8' },
  { key: 'resources', path: 'resources', changefreq: 'weekly', priority: '0.8' },
  { key: 'contact', path: 'contact', changefreq: 'monthly', priority: '0.8' },
  { key: 'blog', path: 'blog', changefreq: 'weekly', priority: '0.8' },
  { key: 'faq', path: 'faq', changefreq: 'monthly', priority: '0.7' },
  { key: 'media', path: 'media', changefreq: 'weekly', priority: '0.7' },
  { key: 'trust', path: 'trust', changefreq: 'monthly', priority: '0.7' },
  { key: 'commandCenter', path: 'command-center', changefreq: 'monthly', priority: '0.7' },
  { key: 'team', path: 'team', changefreq: 'monthly', priority: '0.7' },
  { key: 'partners', path: 'partners', changefreq: 'monthly', priority: '0.6' },
  { key: 'join', path: 'join', changefreq: 'monthly', priority: '0.6' },
  { key: 'academy', path: 'academy', changefreq: 'monthly', priority: '0.7' },
  { key: 'freeAudit', path: 'free-audit', changefreq: 'weekly', priority: '0.9' },
  { key: 'instagram', path: 'instagram', changefreq: 'monthly', priority: '0.7' },
  { key: 'reputationScore', path: 'reputation-score', changefreq: 'monthly', priority: '0.8' },
  { key: 'breachCheck', path: 'breach-check', changefreq: 'monthly', priority: '0.8' },
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

const langPrefix = (language) => (language === 'en' ? '' : `/${language}`)
const fullUrl = (language, path) => {
  const prefix = langPrefix(language)
  const normal = path ? `${prefix}/${path}` : `${prefix}/`
  return `${siteUrl}${normal === '/' ? '/' : normal}`
}

const getBlogSlugs = () => {
  const folder = resolve('src', 'content', 'blog')
  try {
    return readdirSync(folder)
      .filter((name) => name.endsWith('.md'))
      .map((name) => {
        const source = readFileSync(resolve(folder, name), 'utf8')
        const slugMatch = source.match(/^slug:\s*"?([\w-]+)"?$/m)
        return slugMatch?.[1] || name.replace(/\.md$/, '')
      })
  } catch {
    return []
  }
}

const blogSlugs = getBlogSlugs()

const makeAlternates = (path) =>
  languages
    .map((language) => `    <xhtml:link rel="alternate" hreflang="${language}" href="${fullUrl(language, path)}"/>`)
    .join('\n')

const makeUrlEntry = ({ language, path, changefreq, priority }) => `  <url>
    <loc>${fullUrl(language, path)}</loc>
    <lastmod>${today}</lastmod>
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
        changefreq: route.changefreq,
        priority: route.priority,
      })
    )
  }

  for (const slug of serviceSlugs) {
    entries.push(
      makeUrlEntry({
        language,
        path: `services/${slug}`,
        changefreq: 'monthly',
        priority: '0.9',
      })
    )
  }

  for (const slug of blogSlugs) {
    entries.push(
      makeUrlEntry({
        language,
        path: `blog/${slug}`,
        changefreq: 'monthly',
        priority: '0.7',
      })
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
  <sitemap>
    <loc>${siteUrl}/sitemap-en.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/sitemap-fr.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${siteUrl}/sitemap-es.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`

writeFileSync(resolve('public', 'sitemap.xml'), sitemapIndex)
writeFileSync(
  resolve('public', 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin/\nDisallow: /process.php\n\nSitemap: ${siteUrl}/sitemap.xml\nSitemap: ${siteUrl}/sitemap-fr.xml\nSitemap: ${siteUrl}/sitemap-es.xml\n`
)
