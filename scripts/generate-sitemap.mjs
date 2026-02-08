import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const siteUrl = process.env.SITE_URL || 'https://traceremove.com'
const languages = ['en', 'fr', 'es', 'ru']
const baseRoutes = [
  '',
  'services',
  'case-studies',
  'resources',
  'contact',
  'blog',
  'faq',
  'media',
  'trust',
  'command-center',
  'team',
  'partners',
  'join',
]

const coreServices = ['emergency-orm', 'removal-packages', 'security-takedown', 'design-ops']

const urls = []
for (const lang of languages) {
  const prefix = lang === 'en' ? '' : `/${lang}`
  for (const route of baseRoutes) {
    const path = route ? `${prefix}/${route}` : `${prefix}/`
    urls.push(`${siteUrl}${path.replace(/\/$/, '') || '/'}`)
  }
  for (const slug of coreServices) {
    urls.push(`${siteUrl}${prefix}/services/${slug}`)
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((url) => `  <url><loc>${url}</loc></url>`)
  .join('\n')}\n</urlset>\n`

writeFileSync(resolve('public', 'sitemap.xml'), xml)
writeFileSync(
  resolve('public', 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`
)
