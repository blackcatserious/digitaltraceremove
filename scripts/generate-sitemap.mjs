import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'

const languages = ['en', 'fr', 'es', 'ru']
const routes = [
  '',
  '/services',
  '/services/emergency-orm',
  '/services/removal-packages',
  '/services/security-takedown',
  '/services/design-ops',
  '/blog',
  '/blog/rapid-response-playbook',
  '/blog/incident-evidence-logs',
  '/case-studies',
  '/resources',
  '/contact',
]

const baseUrl = 'https://digitaltraceremove.com'

const urls = languages.flatMap((lang) =>
  routes.map((route) => `${baseUrl}/${lang}${route}`),
)

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const distDir = path.resolve('dist')
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true })
}

writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
writeFileSync(
  path.join(distDir, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`,
)
