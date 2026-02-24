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
  'resources/90-day-plan' ,
  'resources/gdpr-template' ,
  'resources/review-templates' ,
  'resources/chatgpt-prompts' ,
  'resources/privacy-guide' ,
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
  'free-audit',
  'free-audit/thank-you',
  'instagram',
  'breach-check',
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
  const slugs = new Set()

  try {
    readdirSync(resolve('src/content/blog'))
      .filter((name) => name.endsWith('.md'))
      .forEach((name) => {
        const content = readFileSync(resolve('src/content/blog', name), 'utf8')
        const slugMatch = content.match(/^slug:\s*"?([\w-]+)"?$/m)
        slugs.add(slugMatch?.[1] || name.replace(/\.md$/, ''))
      })
  } catch {
    // ignore markdown lookup errors
  }

  try {
    const dataSource = readFileSync(resolve('src/data/blog.ts'), 'utf8')
    const matches = dataSource.matchAll(/slug:\s*'([\w-]+)'/g)
    for (const match of matches) {
      slugs.add(match[1])
    }
  } catch {
    // ignore data source lookup errors
  }

  return Array.from(slugs)
}

const blogSlugs = getBlogSlugs()
const allRoutes = new Set(['/'])

allRoutes.add('/fr/audit-gratuit')
allRoutes.add('/es/auditoria-gratis')

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
  if (basePath === '/free-audit') {
    if (lang === 'fr') return '/fr/audit-gratuit'
    if (lang === 'es') return '/es/auditoria-gratis'
    return '/free-audit'
  }
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
  '/instagram': {
    title: 'TraceRemove Instagram Links | Free Audit, Blog, Contact',
    description: 'Official TraceRemove link-in-bio: start your free reputation audit, book a consultation, and access resources.',
  },
  '/breach-check': {
    title: 'Data Breach Checker | TraceRemove',
    description: 'Check if your email appears in known breaches using Have I Been Pwned.',
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

const organizationId = `${siteUrl}/#organization`

const makeBreadcrumbSchema = (basePath, routePath) => {
  const segments = basePath === '/' ? [] : basePath.split('/').filter(Boolean)
  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
    ...segments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: segment
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' '),
      item:
        index === segments.length - 1
          ? `${siteUrl}${routePath === '/' ? '/' : routePath}`
          : `${siteUrl}/${segments.slice(0, index + 1).join('/')}`,
    })),
  ]

  return {
    '@type': 'BreadcrumbList',
    itemListElement,
  }
}

const makeHomepageGraph = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'TraceRemove',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
      description: 'Multilingual digital reputation management agency',
      telephone: '+16063022958',
      email: 'artur@traceremove.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5840 E 2nd St, Ste 7000',
        addressLocality: 'Casper',
        addressRegion: 'WY',
        postalCode: '82609',
        addressCountry: 'US',
      },
      founder: {
        '@type': 'Person',
        name: 'Artur Ziganshin',
        url: 'https://traceremove.dev/about',
      },
      sameAs: [
        'https://instagram.com/traceremove',
        'https://linkedin.com/in/arthur-ziganshin',
        'https://twitter.com/traceremove',
        'https://github.com/blackcatserious',
        'https://traceremove.dev',
      ],
      knowsLanguage: ['en', 'fr', 'es'],
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'Spain' },
        { '@type': 'Country', name: 'United Kingdom' },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'TraceRemove',
      publisher: { '@id': organizationId },
      inLanguage: ['en', 'fr', 'es'],
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'LocalBusiness',
      name: 'TraceRemove',
      image: `${siteUrl}/logo.png`,
      telephone: '+16063022958',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5840 E 2nd St, Ste 7000',
        addressLocality: 'Casper',
        addressRegion: 'WY',
        postalCode: '82609',
        addressCountry: 'US',
      },
      priceRange: '$$',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
  ],
})

const makePageJsonLd = (basePath, routePath, lang, title, description, blogMeta) => {
  const breadcrumb = makeBreadcrumbSchema(basePath, routePath)

  if (basePath === '/') {
    const graph = makeHomepageGraph()
    graph['@graph'].push(breadcrumb)
    return graph
  }

  if (basePath.startsWith('/services/')) {
    const serviceName = title.replace(' | TraceRemove', '')
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: serviceName,
          serviceType: serviceName,
          description,
          provider: { '@id': organizationId },
          areaServed: { '@type': 'Country', name: 'United States' },
          availableLanguage: ['English', 'French', 'Spanish'],
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            description: 'Free initial consultation and reputation audit',
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: `How quickly can ${serviceName} start?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'We typically begin with an intake call and action plan within one business day.',
              },
            },
          ],
        },
        breadcrumb,
      ],
    }
  }

  if (basePath.startsWith('/blog/')) {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          headline: title,
          description,
          datePublished: blogMeta?.publishedAt || '2026-02-23',
          dateModified: blogMeta?.publishedAt || '2026-02-23',
          author: {
            '@type': 'Person',
            name: 'Artur Ziganshin',
            url: 'https://traceremove.dev/about',
          },
          publisher: { '@id': organizationId },
          image: `${siteUrl}/images/og-default.jpg`,
          inLanguage: lang,
          mainEntityOfPage: `${siteUrl}${routePath}`,
        },
        breadcrumb,
      ],
    }
  }

  if (basePath === '/team') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Person',
          name: 'Artur Ziganshin',
          jobTitle: 'Founder & CEO',
          worksFor: { '@id': organizationId },
          image: `${siteUrl}/images/team-artur.jpg`,
          sameAs: ['https://linkedin.com/in/arthur-ziganshin'],
        },
        {
          '@type': 'Person',
          name: 'Maya Lavoie',
          jobTitle: 'Design Systems Director',
          worksFor: { '@id': organizationId },
          image: `${siteUrl}/images/team-maya.jpg`,
          sameAs: ['https://linkedin.com/company/traceremove'],
        },
        {
          '@type': 'Person',
          name: 'Luis Mendoza',
          jobTitle: 'Growth Engineering Lead',
          worksFor: { '@id': organizationId },
          image: `${siteUrl}/images/team-luis.jpg`,
          sameAs: ['https://linkedin.com/company/traceremove'],
        },
        {
          '@type': 'Person',
          name: 'Sofia Martínez',
          jobTitle: 'Client Strategy Partner',
          worksFor: { '@id': organizationId },
          image: `${siteUrl}/images/team-sofia.jpg`,
          sameAs: ['https://linkedin.com/company/traceremove'],
        },
        breadcrumb,
      ],
    }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [breadcrumb],
  }
}


const parseBlogFrontmatterBySlug = () => {
  const bySlug = new Map()
  try {
    readdirSync(resolve('src/content/blog'))
      .filter((name) => name.endsWith('.md'))
      .forEach((name) => {
        const content = readFileSync(resolve('src/content/blog', name), 'utf8')
        const slug = (content.match(/^slug:\s*"?([\w-]+)"?$/m)?.[1] || name.replace(/\.md$/, ''))
        const seoTitle = content.match(/^seoTitle:\s*(.+)$/m)?.[1]?.trim().replace(/^"|"$/g, '')
        const seoDescription = content.match(/^seoDescription:\s*(.+)$/m)?.[1]?.trim().replace(/^"|"$/g, '')
        const title = content.match(/^title:\s*(.+)$/m)?.[1]?.trim().replace(/^"|"$/g, '')
        const summary = content.match(/^summary:\s*(.+)$/m)?.[1]?.trim().replace(/^"|"$/g, '')
        const publishedAt = content.match(/^publishedAt:\s*(.+)$/m)?.[1]?.trim().replace(/^"|"$/g, '')
        bySlug.set(slug, { seoTitle, seoDescription, title, summary, publishedAt })
      })
  } catch {
    // ignore markdown read errors
  }
  return bySlug
}

const blogFrontmatterBySlug = parseBlogFrontmatterBySlug()

const slugToTitle = (slug) =>
  slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const getMeta = (route) => {
  const basePath = stripLang(route)
  const lang = getLang(route)

  const home = homeByLang[lang] ?? homeByLang.en
  const shared = sharedByPath[basePath]

  const blogSlug = basePath.startsWith('/blog/') ? basePath.split('/')[2] : ''
  const blogMeta = blogFrontmatterBySlug.get(blogSlug)

  const title =
    basePath === '/'
      ? home.title
      : basePath.startsWith('/blog/')
        ? blogMeta?.seoTitle || `${slugToTitle(blogSlug)} | TraceRemove Blog`
        : shared?.title || `TraceRemove | ${basePath.replace('/', '').replace(/-/g, ' ')}`

  const description =
    basePath === '/'
      ? home.description
      : basePath.startsWith('/blog/')
        ? blogMeta?.seoDescription ||
          `${blogMeta?.summary || `Read ${slugToTitle(blogSlug)} with practical steps for reputation management.`} Contact TraceRemove for a free consultation.`
        : shared?.description ||
          'Multilingual reputation management in English, French & Spanish. Remove negative content and protect your digital image. Free consultation.'

  const ogImage = basePath === '/' ? `${siteUrl}/images/og-home.jpg` : defaultImage

  const hreflang = seoLanguages
    .map((language) => `<link rel="alternate" hreflang="${language}" href="${siteUrl}${buildPathForLang(basePath, language)}" />`)
    .join('\n')

  const absoluteUrl = `${siteUrl}${route === '/' ? '/' : route}`
  const jsonLd = makePageJsonLd(basePath, route, lang, title, description, blogMeta)

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
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
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
