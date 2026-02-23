import { execSync } from 'node:child_process'
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const siteUrl = process.env.SITE_URL || 'https://traceremove.com'

execSync('vite build --outDir dist/client', { stdio: 'inherit' })
execSync('vite build --ssr src/entry-server.tsx --outDir dist/server', { stdio: 'inherit' })

const { render } = await import(pathToFileURL(resolve('dist/server/entry-server.js')).href)
const template = readFileSync(resolve('dist/client/index.html'), 'utf8')

const languages = ['en', 'fr', 'es', 'ru']
const seoLanguages = ['en', 'fr', 'es']
const baseRoutes = [
  '',
  'about',
  'services',
  'case-studies',
  'resources',
  'contact',
  'blog',
  'faq',
  'media',
  'command-center',
  'trust',
  'team',
  'partners',
  'join',
  'academy',
  'reputation-score',
]
const coreServices = [
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

const localeMap = {
  en: 'en_US',
  fr: 'fr_FR',
  es: 'es_ES',
  ru: 'ru_RU',
}

const defaultImage = `${siteUrl}/images/og-default.jpg`

const sharedByPath = {
  '/services': {
    title: 'Reputation Management Services & Pricing | TraceRemove',
    description:
      'Transparent pricing for trace removal, content suppression, review management, personal branding. Starting from $500/mo. Free consultation.',
  },
  '/about': {
    title: 'About TraceRemove | Multilingual Reputation Experts',
    description:
      'Meet the team behind TraceRemove. Led by Artur Ziganshin. Serving clients in English, French, and Spanish worldwide.',
  },
  '/case-studies': {
    title: 'Client Success Stories | Reputation Management Results',
    description:
      'Real before/after results. See how we transformed online reputations across industries. 3 negative articles → 0 in 90 days.',
  },
  '/blog': {
    title: 'Reputation Management Blog | Digital Privacy Tips | TraceRemove',
    description:
      'Expert insights on online reputation, data privacy, GDPR, reviews. Guides in English, French, Spanish. Updated weekly.',
  },
  '/faq': {
    title: 'FAQ | Online Reputation Management Questions | TraceRemove',
    description:
      'Answers about reputation management timelines, pricing, processes, GDPR rights, content removal. Available in 3 languages.',
  },
  '/contact': {
    title: 'Contact Us | Free Consultation | +1 606 302 2958 | TraceRemove',
    description:
      'Book a free reputation consultation. Call +1 606 302 2958 or fill out the form. We speak English, French, Spanish.',
  },
  '/academy': {
    title: 'Reputation Academy | Free Courses & Guides | TraceRemove',
    description:
      'Learn reputation management for free. Courses on Google reviews, data privacy, GDPR, personal branding. EN/FR/ES.',
  },
  '/trust': {
    title: 'Trust Center | Privacy & Security | TraceRemove',
    description:
      'How we protect your data. GDPR compliant. Confidential processes. Security certifications. Client privacy guaranteed.',
  },
  '/command-center': {
    title: 'Command Center | Reputation Monitoring Dashboard | TraceRemove',
    description:
      'Real-time reputation monitoring. Track Google results, reviews, mentions, data breaches. Client dashboard included.',
  },
  '/team': {
    title: 'Our Team | Reputation Management Experts | TraceRemove',
    description:
      "Meet TraceRemove's multilingual team. Specialists in SEO, content removal, crisis management, GDPR compliance.",
  },
  '/partners': {
    title: 'Partner With TraceRemove | Agency & Referral Program',
    description:
      'White-label reputation management for agencies. Referral commissions. Multi-language support for your clients.',
  },
  '/media': {
    title: 'Media & Press | TraceRemove in the News',
    description: 'Press releases, media appearances, and news about TraceRemove. Download press kit and brand assets.',
  },
}

const homeByLang = {
  en: {
    title: 'Online Reputation Management Agency | TraceRemove',
    description:
      'Multilingual reputation management in English, French & Spanish. Remove negative content, manage reviews, protect your digital image. Free audit.',
  },
  fr: {
    title: 'Agence de Gestion de Réputation en Ligne | TraceRemove',
    description:
      'Gestion de réputation multilingue EN/FR/ES. Supprimez le contenu négatif, gérez vos avis, protégez votre image. Audit gratuit.',
  },
  es: {
    title: 'Agencia de Gestión de Reputación Online | TraceRemove',
    description:
      'Gestión de reputación multilingüe EN/FR/ES. Elimina contenido negativo, gestiona reseñas, protege tu imagen. Auditoría gratis.',
  },
  ru: {
    title: 'Online Reputation Management Agency | TraceRemove',
    description:
      'Multilingual reputation management in English, French & Spanish. Remove negative content, manage reviews, protect your digital image. Free audit.',
  },
}

const getMeta = (route) => {
  const basePath = stripLang(route)
  const lang = getLang(route)

  const home = homeByLang[lang] ?? homeByLang.en
  const shared = sharedByPath[basePath]

  const title =
    basePath === '/'
      ? home.title
      : shared?.title || `TraceRemove | ${basePath.replace('/', '').replace(/-/g, ' ')}`

  const description =
    basePath === '/'
      ? home.description
      : shared?.description ||
        'Multilingual reputation management in English, French & Spanish. Remove negative content and protect your digital image. Free consultation.'

  const ogImage = basePath === '/' ? `${siteUrl}/images/og-home.jpg` : defaultImage

  const hreflang = seoLanguages
    .map((language) => `<link rel="alternate" hreflang="${language}" href="${siteUrl}${buildPathForLang(basePath, language)}" />`)
    .join('\n')

  const absoluteUrl = `${siteUrl}${route === '/' ? '/' : route}`

  return `
<title>${title}</title>
<meta name="description" content="${description}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="${absoluteUrl}" />
${hreflang}
<link rel="alternate" hreflang="x-default" href="${siteUrl}${buildPathForLang(basePath, 'en')}" />
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="${ogImage}" />
<meta property="og:url" content="${absoluteUrl}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="${localeMap[lang] || localeMap.en}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${ogImage}" />
`
}

for (const route of allRoutes) {
  const normalizedRoute = route === '' ? '/' : route
  const { appHtml } = render(normalizedRoute)
  const html = template
    .replace(/<title>[\s\S]*?<\/title>/, '<title>TraceRemove</title>')
    .replace('</head>', `${getMeta(normalizedRoute)}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const target =
    normalizedRoute === '/'
      ? resolve('dist/client/index.html')
      : resolve('dist/client', normalizedRoute.slice(1), 'index.html')
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, html)
}
