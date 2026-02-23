import { execSync } from 'node:child_process'
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const siteUrl = process.env.SITE_URL || 'https://traceremove.com'

execSync('vite build --outDir dist/client', { stdio: 'inherit' })
execSync('vite build --ssr src/entry-server.tsx --outDir dist/server', { stdio: 'inherit' })

const { render } = await import(pathToFileURL(resolve('dist/server/entry-server.js')).href)
const template = readFileSync(resolve('dist/client/index.html'), 'utf8')

const languages = ['en', 'fr', 'es', 'ru']
const baseRoutes = ['', 'about', 'services', 'case-studies', 'resources', 'contact', 'blog', 'faq', 'media', 'command-center', 'trust', 'team', 'partners', 'join', 'academy', 'reputation-score']
const coreServices = ['emergency-orm', 'removal-packages', 'security-takedown', 'design-ops', 'trace-removal', 'content-suppression', 'review-management', 'personal-branding', 'crisis-management', 'reputation-monitoring', 'data-broker-removal']

const getBlogSlugs = () => {
  try {
    return readdirSync(resolve('src/content/blog'))
      .filter((name) => name.endsWith('.md'))
      .map((name) => {
        const content = readFileSync(resolve('src/content/blog', name), 'utf8')
        const slugMatch = content.match(/^slug:\s*"?([\w-]+)"?$/m)
        return slugMatch?.[1] || name.replace(/\.md$/, '')
      })
  } catch {
    return []
  }
}

const blogSlugs = getBlogSlugs()
const allRoutes = new Set(['/'])

for (const language of languages) {
  const prefix = language === 'en' ? '' : `/${language}`
  for (const route of baseRoutes) {
    allRoutes.add(route ? `${prefix}/${route}` : `${prefix || '/'}`)
  }
  for (const slug of coreServices) {
    allRoutes.add(`${prefix}/services/${slug}`)
  }
  for (const slug of blogSlugs) {
    allRoutes.add(`${prefix}/blog/${slug}`)
  }
}

const stripLang = (route) => {
  const parts = route.split('/').filter(Boolean)
  if (parts.length && languages.includes(parts[0])) {
    parts.shift()
  }
  return '/' + parts.join('/')
}

const getLang = (route) => {
  const first = route.split('/').filter(Boolean)[0]
  return languages.includes(first) ? first : 'en'
}

const buildPathForLang = (basePath, lang) => {
  const prefix = lang === 'en' ? '' : `/${lang}`
  const normalized = basePath === '/' ? '/' : basePath
  return normalized === '/' ? `${prefix || '/'}` : `${prefix}${normalized}`
}

const getMeta = (route) => {
  const basePath = stripLang(route)
  const lang = getLang(route)
  const titleMap = {
    '/': 'Traceremove · Emergency Online Reputation Management',
    '/services': 'Services · Traceremove',
    '/about': 'About · Traceremove',
    '/case-studies': 'Case Studies · Traceremove',
    '/blog': 'Blog · Traceremove',
    '/faq': 'FAQ · Traceremove',
    '/contact': 'Contact · Traceremove',
  }
  const descriptionMap = {
    '/': 'Emergency Online Reputation Management: remove negative content in 24–48 hours.',
    '/services': 'Explore emergency ORM, removal packages, security takedown, and design ops services.',
    '/about': 'Meet the multilingual reputation response team at Traceremove.',
    '/case-studies': 'Evidence-led reputation recovery case studies across industries.',
    '/blog': 'Actionable guidance on reputation management, removals, and trust recovery.',
    '/faq': 'Answers to common questions on timelines, pricing, and delivery model.',
    '/contact': 'Contact Traceremove for urgent reputation response and strategic recovery plans.',
  }
  const title = titleMap[basePath] || `Traceremove · ${basePath.replace('/', '').replace(/-/g, ' ')}`
  const description = descriptionMap[basePath] || 'Multilingual digital reputation management programs with clear timelines and pricing.'

  const hreflang = ['en', 'fr', 'es']
    .map((l) => `<link rel="alternate" hreflang="${l}" href="${siteUrl}${buildPathForLang(basePath, l)}" />`)
    .join('\n')

  return `
<title>${title}</title>
<meta name="description" content="${description}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${siteUrl}${route}" />
<link rel="canonical" href="${siteUrl}${route}" />
${hreflang}
<link rel="alternate" hreflang="x-default" href="${siteUrl}${buildPathForLang(basePath, 'en')}" />
<meta name="language" content="${lang}" />
`
}

for (const route of allRoutes) {
  const normalizedRoute = route === '' ? '/' : route
  const { appHtml } = render(normalizedRoute)
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, '<title>Traceremove</title>')
    .replace('</head>', `${getMeta(normalizedRoute)}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const target = normalizedRoute === '/' ? resolve('dist/client/index.html') : resolve('dist/client', normalizedRoute.slice(1), 'index.html')
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, html)
}
