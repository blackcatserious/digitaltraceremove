import {
  Fragment,
  type CSSProperties,
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import {
  interfaceCopy,
  insightDashboards,
  languageLabels,
  languages,
  servicePages,
  type Language,
  type ServicePageContent,
} from './data/pages'
import { servicesPricingCopy } from './data/servicesPricing'
import { commandCenterCopy } from './data/commandCenter'
import {
  blogArticles,
  blogTopicLabels,
  blogTopics,
  getBlogArticlePath,
  getBlogBasePath,
  type BlogArticleTranslation,
  type BlogTopic,
} from './data/blog'
import { authorProfiles, type AuthorId } from './data/authors'
import { mediaCenterCopy } from './data/media'
import { resourceLibraryCopy } from './data/resources'
import { faqCopy, type FaqGuideTarget } from './data/faqs'
import { trustCenterCopy } from './data/trust'
import { academyCopy, type AcademyHeroSecondaryTarget } from './data/academy'
import PricingSection from './components/PricingSection'
import PlatformsSection from './components/PlatformsSection'
import AgenciesSection from './components/AgenciesSection'
import ProcessSection from './components/ProcessSection'
import ROICalculator from './components/ROICalculator'
import ScanSection from './components/ScanSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import FAQSection from './components/FAQSection'
import FinalCTA from './components/FinalCTA'
import HeroCanvas from './components/HeroCanvas'
import ClientsStrip from './components/ClientsStrip'
import TermsPage from './pages/Terms'
import PrivacyPage from './pages/Privacy'
import RefundPage from './pages/Refund'
import PricingPage from './pages/Pricing'
import PartnersLandingPage from './pages/Partners'
import AboutPage from './pages/About'
import './App.css'

const useCurrentLanguage = (): Language => {
  const location = useLocation()
  const { pathname } = location
  const match = languages.find(
    (lang) => pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)
  )
  return match ?? 'en'
}

const buildNavigation = () => {
  const structure = new Map<
    Language,
    Map<
      string,
      {
        serviceKey: string
        serviceName: string
        pages: ServicePageContent[]
      }
    >
  >()

  servicePages.forEach((page) => {
    if (!structure.has(page.language)) {
      structure.set(page.language, new Map())
    }
    const serviceGroup = structure.get(page.language)!
    if (!serviceGroup.has(page.serviceKey)) {
      serviceGroup.set(page.serviceKey, {
        serviceName: page.serviceName,
        pages: [],
      })
    }
    serviceGroup.get(page.serviceKey)!.pages.push(page)
  })

  const navigation: Record<Language, { serviceKey: string; serviceName: string; pages: ServicePageContent[] }[]> = {
    en: [],
    fr: [],
    es: [],
  }

  languages.forEach((language) => {
    const groups = structure.get(language)
    if (!groups) {
      return
    }

    navigation[language] = Array.from(groups.values())
      .map((group) => ({
        serviceKey: group.pages[0]?.serviceKey ?? '',
        serviceName: group.serviceName,
        pages: group.pages.sort((a, b) => a.industryName.localeCompare(b.industryName)),
      }))
      .sort((a, b) => a.serviceName.localeCompare(b.serviceName))
  })

  return navigation
}

const navigation = buildNavigation()

type NavLinkRenderArgs = { isActive: boolean }


const baseSeo = {
  title: 'TraceRemove — Monitor and Manage Online Data Exposure',
  description:
    'Structured tools and managed workflows to identify, monitor, and resolve online data exposure for businesses, executives, and agency partners. New York, NY.',
}

const routeSeo: Record<string, { title: string; description: string; ogUrl?: string }> = {
  '/en': { ...baseSeo, ogUrl: 'https://traceremove.com/en' },
  '/en/': { ...baseSeo, ogUrl: 'https://traceremove.com/en' },
  '/fr': { ...baseSeo, ogUrl: 'https://traceremove.com/en' },
  '/fr/': { ...baseSeo, ogUrl: 'https://traceremove.com/en' },
  '/es': { ...baseSeo, ogUrl: 'https://traceremove.com/en' },
  '/es/': { ...baseSeo, ogUrl: 'https://traceremove.com/en' },
  '/en/pricing': {
    title: 'Pricing — TraceRemove Data Exposure Management',
    description:
      'Self-serve monitoring from $49/month. Managed programmes from $4,900/month. Transparent pricing for businesses and agency partners.',
  },
  '/en/partners': {
    title: 'Partner Programme — TraceRemove',
    description:
      'White-label data exposure management for law firms, PR agencies, and HR consultancies. Silver, Gold, and Platinum capacity tiers.',
  },
  '/en/terms': {
    title: 'Terms — TraceRemove LLC',
    description: 'TRACEREMOVE LLC, 750 Manhattan Ave, Brooklyn, NY 11222, USA.',
  },
  '/en/privacy': {
    title: 'Privacy — TraceRemove LLC',
    description: 'TRACEREMOVE LLC, 750 Manhattan Ave, Brooklyn, NY 11222, USA.',
  },
  '/en/refund': {
    title: 'Refund — TraceRemove LLC',
    description: 'TRACEREMOVE LLC, 750 Manhattan Ave, Brooklyn, NY 11222, USA.',
  },
}

type MediumPost = {
  title: string
  link: string
  pubDate: string
  description: string
}

const getHomePath = (language: Language) => (language === 'en' ? '/' : `/${language}`)

const getTeamPath = (language: Language) => (language === 'en' ? '/team' : `/${language}/team`)

const getAboutPath = (language: Language) => (language === 'en' ? '/about' : `/${language}/about`)

const getCaseStudiesPath = (language: Language) =>
  language === 'en' ? '/case-studies' : `/${language}/case-studies`

const getServicesPricingPath = (language: Language) =>
  language === 'en' ? '/services' : `/${language}/services`

const getResourcesPath = (language: Language) =>
  language === 'en' ? '/resources' : `/${language}/resources`

const getMediaPath = (language: Language) =>
  language === 'en' ? '/media' : `/${language}/media`

const getCommandCenterPath = (language: Language) =>
  language === 'en' ? '/command-center' : `/${language}/command-center`

const getAcademyPath = (language: Language) =>
  language === 'en' ? '/academy' : `/${language}/academy`

const getFaqPath = (language: Language) => (language === 'en' ? '/faq' : `/${language}/faq`)

const getTrustPath = (language: Language) => (language === 'en' ? '/trust' : `/${language}/trust`)

const getPartnersPath = (language: Language) => (language === 'en' ? '/partners' : `/${language}/partners`)

const getJoinPath = (language: Language) => (language === 'en' ? '/join' : `/${language}/join`)

const getContactPath = (language: Language) => (language === 'en' ? '/contact' : `/${language}/contact`)

const getPrivacyPath = (language: Language) => (language === 'en' ? '/privacy' : `/${language}/privacy`)

const getTermsPath = (language: Language) => (language === 'en' ? '/terms' : `/${language}/terms`)

const localeMap: Record<Language, string> = {
  en: 'en-US',
  fr: 'fr-FR',
  es: 'es-ES',
}

const formatLocaleDate = (language: Language, value: string) =>
  new Date(value).toLocaleDateString(localeMap[language], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const currencyConfig: Record<Language, { locale: string; currency: string }> = {
  en: { locale: 'en-US', currency: 'USD' },
  fr: { locale: 'fr-FR', currency: 'EUR' },
  es: { locale: 'es-ES', currency: 'EUR' },
}

const formatCurrency = (language: Language, value: number) =>
  new Intl.NumberFormat(currencyConfig[language].locale, {
    style: 'currency',
    currency: currencyConfig[language].currency,
    maximumFractionDigits: value >= 1000 ? 0 : 2,
  }).format(value)

const formatNumber = (language: Language, value: number) =>
  new Intl.NumberFormat(localeMap[language], {
    maximumFractionDigits: 0,
  }).format(value)

const escapeRegExp = (value: string) => value.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')

const highlightSearchTerm = (value: string, query: string): ReactNode => {
  const normalizedQuery = query.trim()
  if (!normalizedQuery) {
    return value
  }

  const pattern = escapeRegExp(normalizedQuery)
  const regex = new RegExp(`(${pattern})`, 'gi')
  const lowerQuery = normalizedQuery.toLowerCase()
  const segments = value.split(regex)

  if (segments.length === 1) {
    return value
  }

  return segments.map((segment, index) => {
    if (segment.toLowerCase() === lowerQuery) {
      return (
        <mark key={index} className="blog-highlight">
          {segment}
        </mark>
      )
    }

    return <Fragment key={index}>{segment}</Fragment>
  })
}

const slugifyHeading = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/[\u0300-\u036f]+/g, '')
    .toLowerCase()
    .replace(/(^-|-$)+/g, '')

type GrowthSparkProps = {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  ariaLabel?: string
}

const growthBarSets: Record<NonNullable<GrowthSparkProps['size']>, number[]> = {
  sm: [38, 52, 46, 68, 60],
  md: [32, 48, 60, 74, 88, 96],
  lg: [28, 44, 58, 76, 88, 98, 92],
}

const GrowthSpark = ({ variant = 'dark', size = 'md', className = '', ariaLabel }: GrowthSparkProps) => {
  const bars = growthBarSets[size]
  const step = bars.length > 1 ? 100 / (bars.length - 1) : 100
  const points = bars
    .map((height, index) => {
      const x = Math.min(100, Math.max(0, index * step))
      const y = Math.min(100, Math.max(0, 100 - height))
      return `${x.toFixed(2)},${y.toFixed(2)}`
    })
    .join(' ')

  const classes = ['growth-spark', `growth-spark--${variant}`, `growth-spark--${size}`]
  if (className) {
    classes.push(className)
  }

  return (
    <div
      className={classes.join(' ')}
      {...(ariaLabel ? { role: 'img', 'aria-label': ariaLabel } : { 'aria-hidden': true })}
    >
      <div className="growth-spark__bars">
        {bars.map((height, index) => (
          <span
            key={`${index}-${height}`}
            className="growth-spark__bar"
            style={
              {
                '--bar-height': `${height}%`,
                '--bar-delay': `${index * 0.12}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <svg className="growth-spark__line" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <polyline points={points} />
      </svg>
    </div>
  )
}

const momentumTickerCopy: Record<
  Language,
  {
    eyebrow: string
    highlights: string[]
    cta: string
  }
> = {
  en: {
    eyebrow: 'Momentum signals',
    highlights: [
      'Deindexed 1,200+ malicious pages across 14 jurisdictions',
      'Recovered $18.4M in pipeline by reversing fake-review attacks',
      '60-day brand vault protecting 80+ executive identities',
      'Live sentiment command center in English, French, and Spanish',
      '24/7 escalation team orchestrated by Founder & CEO TraceRemove Advisor',
    ],
    cta: 'Activate a protection sprint',
  },
  fr: {
    eyebrow: 'Signaux de momentum',
    highlights: [
      'Plus de 1 200 pages malveillantes déréférencées dans 14 juridictions',
      '18,4 M $ de pipeline récupérés après des attaques de faux avis',
      'Coffre-fort de marque sur 60 jours couvrant plus de 80 dirigeants',
      'Centre de commande du sentiment en français, anglais et espagnol',
      'Équipe d’escalade 24/7 pilotée par TraceRemove Advisor, Founder & CEO',
    ],
    cta: 'Activer un sprint de protection',
  },
  es: {
    eyebrow: 'Señales de momentum',
    highlights: [
      'Más de 1 200 páginas maliciosas dadas de baja en 14 jurisdicciones',
      'Recuperamos 18,4 M USD de pipeline tras ataques de reseñas falsas',
      'Bóveda de marca de 60 días cubriendo a más de 80 ejecutivos',
      'Centro de comando de sentimiento en inglés, francés y español',
      'Equipo de escalación 24/7 liderado por el Founder & CEO TraceRemove Advisor',
    ],
    cta: 'Activar un sprint de protección',
  },
}

const MomentumTicker = ({ variant = 'dark' }: { variant?: 'dark' | 'light' }) => {
  const language = useCurrentLanguage()
  const copy = momentumTickerCopy[language]
  const [isPaused, setIsPaused] = useState(false)

  const duplicatedHighlights = useMemo(() => {
    const base = copy.highlights
    if (base.length <= 1) {
      return base
    }
    return [...base, ...base]
  }, [copy.highlights])

  if (!copy.highlights.length) {
    return null
  }

  return (
    <section className={`momentum-ticker momentum-ticker--${variant}`} aria-label={copy.eyebrow}>
      <div className="momentum-ticker__label">{copy.eyebrow}</div>
      <div
        className={`momentum-ticker__track${isPaused ? ' is-paused' : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <ul className="momentum-ticker__items">
          {duplicatedHighlights.map((highlight, index) => (
            <li key={`${highlight}-${index}`} className="momentum-ticker__item">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      <Link className="momentum-ticker__cta button ghost" to={getContactPath(language)}>
        {copy.cta}
      </Link>
    </section>
  )
}

const navCopy: Record<
  Language,
  {
    services: string
    about: string
    caseStudies: string
    servicesPricing: string
    team: string
    resources: string
    academy: string
    media: string
    commandCenter: string
    trust: string
    faq: string
    blog: string
    partners: string
    contact: string
    callToAction: string
    tagline: string
    joinUs: string
    openMenu: string
    closeMenu: string
    home: string
    navigationTitle: string
    languages: string
    languageSwitcherLabel: string
  }
> = {
  en: {
    services: 'Services',
    about: 'About us',
    caseStudies: 'Case studies',
    servicesPricing: 'Services & pricing',
    team: 'Team',
    resources: 'Resources',
    academy: 'Academy',
    media: 'Media',
    commandCenter: 'Command center',
    trust: 'Trust center',
    faq: 'FAQ',
    blog: 'Blog',
    partners: 'Partners',
    contact: 'Contact',
    callToAction: 'Book a strategy call',
    tagline: 'Growth marketing, revenue design, and product storytelling for teams shipping fast.',
    joinUs: 'Join us',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    home: 'Home',
    navigationTitle: 'Navigate',
    languages: 'Languages',
    languageSwitcherLabel: 'Switch language',
  },
  fr: {
    services: 'Services',
    about: 'À propos',
    caseStudies: 'Études de cas',
    servicesPricing: 'Services & tarifs',
    team: 'Équipe',
    resources: 'Ressources',
    academy: 'Académie',
    media: 'Presse',
    commandCenter: 'Centre de commandement',
    trust: 'Centre de confiance',
    faq: 'FAQ',
    blog: 'Blog',
    partners: 'Partenaires',
    contact: 'Contact',
    callToAction: 'Planifier un échange',
    tagline: 'Marketing growth, modèles de revenus et narration produit pour les équipes ambitieuses.',
    joinUs: 'Rejoignez-nous',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    home: 'Accueil',
    navigationTitle: 'Navigation',
    languages: 'Langues',
    languageSwitcherLabel: 'Changer de langue',
  },
  es: {
    services: 'Servicios',
    about: 'Sobre nosotros',
    caseStudies: 'Casos de éxito',
    servicesPricing: 'Servicios y precios',
    team: 'Equipo',
    resources: 'Recursos',
    academy: 'Academia',
    media: 'Prensa',
    commandCenter: 'Centro de comando',
    trust: 'Centro de confianza',
    faq: 'FAQ',
    blog: 'Blog',
    partners: 'Partners',
    contact: 'Contacto',
    callToAction: 'Reserva una sesión estratégica',
    tagline: 'Marketing de crecimiento, diseño de ingresos y storytelling de producto para equipos ágiles.',
    joinUs: 'Únete',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    home: 'Inicio',
    navigationTitle: 'Navegación',
    languages: 'Idiomas',
    languageSwitcherLabel: 'Cambiar idioma',
  },
}

const InsightShowcase = ({ variant = 'default' }: { variant?: 'default' | 'case' }) => {
  const language = useCurrentLanguage()
  const copy = insightDashboards[language]
  const [activeId, setActiveId] = useState(() => copy.panels[0]?.id ?? '')

  useEffect(() => {
    setActiveId(copy.panels[0]?.id ?? '')
  }, [copy])

  if (!copy.panels.length) {
    return null
  }

  const activePanel = copy.panels.find((panel) => panel.id === activeId) ?? copy.panels[0]

  const linePoints = useMemo(() => {
    if (activePanel.trend.length <= 1) {
      const value = activePanel.trend[0] ?? 0
      const clamped = Math.max(0, Math.min(100, value))
      return `0,${100 - clamped}`
    }

    return activePanel.trend
      .map((value, index) => {
        const clamped = Math.max(0, Math.min(100, value))
        const x = (index / (activePanel.trend.length - 1)) * 100
        const y = 100 - clamped
        return `${x},${y}`
      })
      .join(' ')
  }, [activePanel])

  return (
    <section className={`insight-showcase${variant === 'case' ? ' insight-showcase--case' : ''}`}>
      <div className="insight-showcase__intro">
        <div>
          <p className="insight-showcase__eyebrow">{copy.eyebrow}</p>
          <h2>{copy.heading}</h2>
          <p>{copy.subheading}</p>
        </div>
        <div className="insight-showcase__actions">
          <Link className="button primary" to={getContactPath(language)}>
            {copy.ctaPrimary}
          </Link>
          <Link className="button tertiary" to={getCaseStudiesPath(language)}>
            {copy.ctaSecondary}
          </Link>
        </div>
      </div>
      <div className="insight-showcase__tabs" role="tablist" aria-label={copy.heading}>
        {copy.panels.map((panel) => (
          <button
            key={panel.id}
            type="button"
            role="tab"
            className="insight-showcase__tab"
            id={`insight-tab-${panel.id}`}
            aria-selected={panel.id === activePanel.id}
            aria-controls={`insight-panel-${panel.id}`}
            onClick={() => setActiveId(panel.id)}
          >
            <span>{panel.title}</span>
            <span className="insight-showcase__tab-delta">{panel.metricDelta}</span>
          </button>
        ))}
      </div>
      <div
        className="insight-showcase__panel"
        role="tabpanel"
        id={`insight-panel-${activePanel.id}`}
        aria-labelledby={`insight-tab-${activePanel.id}`}
      >
        <div className="insight-showcase__metric">
          <span className="insight-showcase__metric-label">{activePanel.metricLabel}</span>
          <strong className="insight-showcase__metric-value">{activePanel.metricValue}</strong>
          <p>{activePanel.description}</p>
          <p className="insight-showcase__spotlight">{activePanel.spotlight}</p>
        </div>
        <div className="insight-showcase__visual">
          <div className="insight-showcase__chart" role="img" aria-label={activePanel.visualizationLabel}>
            <div className="insight-showcase__chart-bars">
              {activePanel.trend.map((value, index) => (
                <span
                  key={`${activePanel.id}-${index}`}
                  style={
                    {
                      '--insight-bar-height': `${Math.max(10, Math.min(100, value))}%`,
                      '--insight-bar-delay': `${index * 0.06}s`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
              <polyline points={linePoints} />
            </svg>
          </div>
          <span className="insight-showcase__visual-label">{activePanel.visualizationLabel}</span>
        </div>
      </div>
    </section>
  )
}

const teamCopy: Record<
  Language,
  {
    title: string
    subtitle: string
    intro: string
    cultureHeading: string
    culturePoints: string[]
    contactPrompt: string
  }
> = {
  en: {
    title: 'Meet the Traceremove team',
    subtitle: 'A multilingual collective led by Founder & CEO TraceRemove Advisor',
    intro:
      'We are designers, strategists, technologists, and analysts who build compounding growth systems across North America and Europe. Our studio thrives on experimentation, data fluency, and cross-cultural empathy.',
    cultureHeading: 'How we collaborate',
    culturePoints: [
      'Fewer, deeper engagements so every playbook is customised for your market.',
      'Design sprints with Figma, Webflow, and AI tooling to accelerate creative approvals.',
      'Signal-rich analytics dashboards with Looker Studio, Mixpanel, and custom pipelines.',
    ],
    contactPrompt: 'Ready to collaborate? Reach out and we will respond within one business day.',
  },
  fr: {
    title: "Rencontrez l'équipe Traceremove",
    subtitle: 'Un collectif multilingue dirigé par le fondateur et CEO TraceRemove Advisor',
    intro:
      'Nous sommes designers, stratèges, technologues et analystes. Nous bâtissons des systèmes de croissance cumulée pour l’Amérique du Nord et l’Europe, en misant sur l’expérimentation, la donnée et l’empathie interculturelle.',
    cultureHeading: 'Notre manière de travailler',
    culturePoints: [
      'Peu de mandats en parallèle afin de personnaliser chaque dispositif au marché visé.',
      'Design sprints avec Figma, Webflow et outils IA pour accélérer les validations créatives.',
      'Tableaux de bord à forte valeur ajoutée via Looker Studio, Mixpanel et pipelines sur mesure.',
    ],
    contactPrompt: "Envie de construire ensemble ? Écrivez-nous et nous vous répondons sous un jour ouvré.",
  },
  es: {
    title: 'Conoce al equipo de Traceremove',
    subtitle: 'Un colectivo multilingüe liderado por el fundador y CEO TraceRemove Advisor',
    intro:
      'Somos diseñadores, estrategas, tecnólogos y analistas que construyen sistemas de crecimiento compuesto en Norteamérica y Europa. Nuestro estudio prospera gracias a la experimentación, los datos y la empatía intercultural.',
    cultureHeading: 'Cómo colaboramos',
    culturePoints: [
      'Pocos proyectos en paralelo para personalizar cada estrategia a tu mercado.',
      'Design sprints con Figma, Webflow y herramientas de IA para acelerar la creatividad.',
      'Paneles analíticos con insight profundo usando Looker Studio, Mixpanel y pipelines a medida.',
    ],
    contactPrompt: '¿Listo para colaborar? Escríbenos y respondemos en un día hábil.',
  },
}

const aboutCopy: Record<
  Language,
  {
    hero: {
      title: string
      subtitle: string
      body: string
      primaryCta: string
      secondaryCta: string
      highlight: string
    }
    story: { heading: string; paragraphs: string[] }
    timeline: {
      heading: string
      summary: string
      milestones: { year: string; title: string; description: string }[]
    }
    reasons: { heading: string; summary: string; items: { title: string; description: string }[] }
    presence: {
      heading: string
      summary: string
      regions: { name: string; focus: string; description: string }[]
      signals: { value: string; label: string }[]
    }
    metrics: { heading: string; items: { value: string; label: string; description: string }[] }
    method: { heading: string; summary: string; steps: { title: string; description: string }[] }
    culture: {
      heading: string
      summary: string
      principles: { title: string; description: string }[]
    }
    testimonials: {
      heading: string
      summary: string
      stories: { quote: string; name: string; role: string }[]
    }
    closing: { heading: string; body: string; cta: string }
  }
> = {
  en: {
    hero: {
      title: 'About Traceremove',
      subtitle: 'Brand protection and growth acceleration without borders',
      body:
        'We help manage and resolve online data exposure',
      primaryCta: 'Talk with our team',
      secondaryCta: 'Explore our insights',
      highlight: 'English · French · Spanish markets',
    },
    story: {
      heading: 'Who we are',
      paragraphs: [
        'Traceremove is a multilingual studio of strategists, analysts, designers, and technologists focused on brand safety and demand generation for venture-backed founders and enterprise leaders.',
        'We have shipped crisis playbooks, growth programs, and revenue architecture across North America and Europe, partnering with teams that need discreet velocity and crystal-clear reporting.',
        'Working in embedded pods, we co-create campaigns, automation, and measurement rituals that your internal teams can own after the engagement.',
      ],
    },
    timeline: {
      heading: 'Our journey',
      summary: 'We have grown from a rapid-response collective into a full-spectrum brand resilience partner.',
      milestones: [
        {
          year: '2018',
          title: 'Listening lab launches',
          description: 'Built our first multilingual monitoring pod for founders battling coordinated smear campaigns.',
        },
        {
          year: '2020',
          title: 'Global partner network',
          description: 'Scaled trusted legal, PR, and product advisors so responses cover every channel and jurisdiction.',
        },
        {
          year: '2022',
          title: 'Growth experimentation guild',
          description: 'Formalised experimentation squads that transform protection insights into compounding demand.',
        },
        {
          year: '2024',
          title: 'Always-on intelligence fabric',
          description: 'Deployed automation, AI summaries, and analyst rotations to deliver 24/7 coverage for global teams.',
        },
      ],
    },
    reasons: {
      heading: 'Why teams choose us',
      summary: 'We help manage and resolve online data exposure',
      items: [
        {
          title: 'We help manage and resolve online data exposure',
          description:
            'We monitor search, review, and social landscapes in real time to detect risk and defend your brand narrative before issues escalate.',
        },
        {
          title: 'Growth operators',
          description:
            'Our operators activate SEO, lifecycle, and performance plays that convert attention into pipeline while reinforcing trust.',
        },
        {
          title: 'Insider intelligence',
          description:
            'You receive insider-grade research, scripts, and stakeholder messaging tuned for executive reviews in English, French, and Spanish.',
        },
      ],
    },
    presence: {
      heading: 'Where we operate',
      summary:
        'Distributed pods across the Americas and Europe keep intelligence, creative, and activation always on.',
      regions: [
        {
          name: 'North America',
          focus: 'Growth sprints & crisis command',
          description:
            'Louisville, Montréal, and Mexico City squads cover executive workshops, escalation rooms, and revenue program launches.',
        },
        {
          name: 'Europe',
          focus: 'We help manage and resolve online data exposure',
          description:
            'Paris and Barcelona strategists blend regulatory awareness with multilingual content, PR narratives, and partner enablement.',
        },
        {
          name: 'Digital follow-the-sun',
          focus: 'Monitoring & automation',
          description:
            'Remote analysts span Lisbon to Buenos Aires, tuning AI monitors, dashboards, and playbooks so updates land before your morning standup.',
        },
      ],
      signals: [
        { value: '6', label: 'active time zones' },
        { value: '<30m', label: 'incident triage SLA' },
        { value: '18', label: 'senior specialists on rotation' },
      ],
    },
    metrics: {
      heading: 'Impact snapshots',
      items: [
        {
          value: '40%',
          label: 'faster crisis response',
          description: 'Average reduction in mitigation time after deploying our listening and escalation frameworks.',
        },
        {
          value: '3x',
          label: 'review authenticity lift',
          description: 'Multi-language moderation and verification programs that triple positive verified feedback.',
        },
        {
          value: '120+',
          label: 'playbooks deployed',
          description: 'Reusable launches, automation maps, and creative systems released across client teams.',
        },
      ],
    },
    method: {
      heading: 'How we partner',
      summary: 'Every engagement follows a fast but rigorous rhythm so marketing, product, and leadership stay aligned.',
      steps: [
        {
          title: 'Map your threat surface',
          description: 'We audit search, earned media, dark social, and owned channels to baseline sentiment and exposure.',
        },
        {
          title: 'Design the growth flywheel',
          description: 'Together we architect positioning, offers, and measurement that turn protection work into demand capture.',
        },
        {
          title: 'Activate multilingual squads',
          description: 'Our senior pod delivers campaigns, automation, and creative systems localised for your priority markets.',
        },
        {
          title: 'Measure and reinforce',
          description: 'Dashboards, war rooms, and executive readouts keep stakeholders informed while we iterate weekly.',
        },
      ],
    },
    culture: {
      heading: 'How we operate',
      summary: 'Principles that keep our team sharp, inclusive, and obsessively helpful to yours.',
      principles: [
        {
          title: 'Transparency in action',
          description: 'We narrate every test, insight, and risk so stakeholders feel informed—not surprised.',
        },
        {
          title: 'Calm under pressure',
          description: 'War-room rituals, rotation schedules, and scenario playbooks keep the team composed during crises.',
        },
        {
          title: 'Bias for enablement',
          description: 'Artifacts ship with documentation, office hours, and training loops to empower your operators.',
        },
        {
          title: 'Craft with heart',
          description: 'Design, writing, and engineering standards favour humanity and clarity—especially across languages.',
        },
      ],
    },
    testimonials: {
      heading: 'Leaders we support',
      summary:
        'Marketing, communications, and legal operators share how Traceremove keeps their brands resilient and growing.',
      stories: [
        {
          quote:
            'Traceremove orchestrated a multilingual review integrity sprint that neutralised fake feedback within weeks while keeping our funnel humming.',
          name: 'Elena Park',
          role: 'VP Growth, Series C SaaS',
        },
        {
          quote:
            'Their war-room cadence and executive-ready reporting gave our board calm confidence during a coordinated smear attempt.',
          name: 'Marc-André Lefèvre',
          role: 'Chief Communications Officer, Global Hospitality Group',
        },
        {
          quote:
            'The team connected domain protection, legal scripts, and SEO experiments so we emerged stronger than before the incident.',
          name: 'Lucia Romero',
          role: 'General Counsel, Fintech Scaleup',
        },
      ],
    },
    closing: {
      heading: 'Ready to protect and accelerate your brand?',
      body: 'We help manage and resolve online data exposure',
      cta: 'Book a strategy call',
    },
  },
  fr: {
    hero: {
      title: 'À propos de Traceremove',
      subtitle: 'Protection de marque et accélération de croissance sans frontières',
      body:
        'TraceRemove Advisor, fondateur et CEO, pilote chaque mission avec une équipe senior opérant en anglais, français et espagnol. Nous combinons veille réputationnelle et expérimentations revenue pour faire grandir votre marque en toute sécurité.',
      primaryCta: 'Échanger avec notre équipe',
      secondaryCta: 'Explorer nos insights',
      highlight: 'Marchés EN · FR · ES',
    },
    story: {
      heading: 'Qui nous sommes',
      paragraphs: [
        'Traceremove est un studio multilingue de stratèges, analystes, designers et technologues dédié à la sûreté de marque et à la génération de demande pour fondateurs et dirigeants.',
        'Nous avons livré playbooks de gestion de crise, programmes de croissance et architectures de revenus en Amérique du Nord et en Europe pour des équipes recherchant vitesse et reporting limpide.',
        'En mode pods intégrés, nous co-construisons campagnes, automatisations et rituels de mesure que vos équipes internes s’approprient ensuite.',
      ],
    },
    timeline: {
      heading: 'Notre parcours',
      summary: 'Nous sommes passés d’un collectif de réponse rapide à un partenaire complet de résilience de marque.',
      milestones: [
        {
          year: '2018',
          title: 'Création du listening lab',
          description: 'Mise en place d’un premier pod de veille multilingue pour des fondateurs confrontés à des campagnes de dénigrement.',
        },
        {
          year: '2020',
          title: 'Réseau de partenaires internationaux',
          description: 'Extension d’un cercle d’avocats, RP et experts produit pour couvrir chaque canal et juridiction.',
        },
        {
          year: '2022',
          title: 'Guild d’expérimentation growth',
          description: 'Structuration de squads dédiés qui transforment les enseignements de protection en demande durable.',
        },
        {
          year: '2024',
          title: 'Tissu d’intelligence continu',
          description: 'Déploiement d’automations, de résumés IA et de rotations analystes pour une couverture 24/7.',
        },
      ],
    },
    reasons: {
      heading: 'Pourquoi les équipes nous choisissent',
      summary: 'Nous allions défense proactive de la réputation et expérimentations growth à effet composé.',
      items: [
        {
          title: 'Gardiennes de réputation',
          description:
            'Nous surveillons search, avis et réseaux sociaux en temps réel pour détecter les risques et défendre votre narration avant qu’ils n’explosent.',
        },
        {
          title: 'Opérateurs growth',
          description:
            'Nous activons SEO, lifecycle et performance pour convertir l’attention en pipeline tout en renforçant la confiance.',
        },
        {
          title: 'Intelligence terrain',
          description:
            'Vous recevez analyses, scripts et messages exécutifs adaptés en anglais, français et espagnol.',
        },
      ],
    },
    presence: {
      heading: 'Notre présence',
      summary:
        'Des squads distribués entre Amériques et Europe assurent une veille continue, de la création et des activations sans rupture.',
      regions: [
        {
          name: 'Amérique du Nord',
          focus: 'Sprints growth & cellule de crise',
          description:
            'Louisville, Montréal et Mexico accompagnent ateliers dirigeants, salles de crise et lancements de programmes revenue.',
        },
        {
          name: 'Europe',
          focus: 'Architecture réputationnelle',
          description:
            'Paris et Barcelone conjuguent veille réglementaire, contenus multilingues, narratifs RP et enablement partenaires.',
        },
        {
          name: 'Suivi continu',
          focus: 'Monitoring & automatisation',
          description:
            'Des analystes de Lisbonne à Buenos Aires orchestrent IA, dashboards et playbooks pour livrer les insights avant vos standups.',
        },
      ],
      signals: [
        { value: '6', label: 'fuseaux horaires actifs' },
        { value: '<30 min', label: 'SLA de triage incident' },
        { value: '18', label: 'experts seniors en rotation' },
      ],
    },
    metrics: {
      heading: 'Indicateurs d’impact',
      items: [
        {
          value: '40%',
          label: 'de délais de crise en moins',
          description: 'Réduction moyenne du temps de mitigation grâce à nos frameworks d’écoute et d’escalade.',
        },
        {
          value: '3x',
          label: 'hausse d’avis authentiques',
          description: 'Programmes de modération multilingues qui triplent les retours vérifiés positifs.',
        },
        {
          value: '120+',
          label: 'playbooks déployés',
          description: 'Lancements, automations et systèmes créatifs réutilisables livrés aux équipes clientes.',
        },
      ],
    },
    method: {
      heading: 'Notre manière de collaborer',
      summary: 'Chaque mission suit un rythme rapide mais rigoureux pour aligner marketing, produit et leadership.',
      steps: [
        {
          title: 'Cartographier votre surface de risque',
          description: 'Audit du search, earned media, dark social et canaux owned pour établir sentiment et exposition.',
        },
        {
          title: 'Designer le flywheel de croissance',
          description: 'Nous co-architecturons positionnement, offres et mesure pour transformer la protection en capture de demande.',
        },
        {
          title: 'Activer des squads multilingues',
          description: 'Notre pod senior livre campagnes, automatisations et systèmes créatifs localisés.',
        },
        {
          title: 'Mesurer et renforcer',
          description: 'Dashboards, war rooms et synthèses exécutives maintiennent l’alignement pendant que nous itérons chaque semaine.',
        },
      ],
    },
    culture: {
      heading: 'Notre culture',
      summary: 'Des principes qui nous rendent exigeants, accessibles et focalisés sur la réussite de vos équipes.',
      principles: [
        {
          title: 'Transparence opérationnelle',
          description: 'Nous racontons chaque test, insight et risque pour éviter les surprises côté comité de direction.',
        },
        {
          title: 'Sérénité en crise',
          description: 'Rituels de war room, rotations et scénarios préparés assurent un pilotage calme et méthodique.',
        },
        {
          title: 'Culture de l’appropriation',
          description: 'Chaque livrable est accompagné de documentation, formation et office hours pour vos équipes.',
        },
        {
          title: 'Sens du détail humain',
          description: 'Nos standards de design, rédaction et ingénierie privilégient la clarté et l’empathie, toutes langues confondues.',
        },
      ],
    },
    testimonials: {
      heading: 'Ce que disent nos partenaires',
      summary:
        'Marketing, communication et juridique témoignent de la manière dont Traceremove protège et accélère leurs marques.',
      stories: [
        {
          quote:
            'Traceremove a mené un sprint multilingue sur l’authenticité des avis qui a neutralisé les faux commentaires en quelques semaines tout en soutenant la croissance.',
          name: 'Élena Park',
          role: 'VP Growth, SaaS série C',
        },
        {
          quote:
            'Leur rituel de war room et leurs rapports prêts pour le board ont apporté un calme précieux lors d’une campagne de dénigrement coordonnée.',
          name: 'Marc-André Lefèvre',
          role: 'Directeur Communication, groupe hôtelier global',
        },
        {
          quote:
            'L’équipe a relié protection de domaine, argumentaires juridiques et expérimentations SEO pour ressortir renforcés après l’incident.',
          name: 'Lucia Romero',
          role: 'Directrice juridique, fintech en hypercroissance',
        },
      ],
    },
    closing: {
      heading: 'Prêts à protéger et accélérer votre marque ?',
      body: 'Concevons une feuille de route qui sécurise votre réputation et fait croître vos marchés simultanément.',
      cta: 'Planifier un call stratégique',
    },
  },
  es: {
    hero: {
      title: 'Sobre Traceremove',
      subtitle: 'Protección de marca y aceleración del crecimiento sin fronteras',
      body:
        'TraceRemove Advisor, fundador y CEO, lidera cada proyecto con un equipo senior que opera en inglés, francés y español. Unimos guardianes de reputación y experimentos de revenue para que tu marca escale con seguridad.',
      primaryCta: 'Habla con nuestro equipo',
      secondaryCta: 'Explora nuestras ideas',
      highlight: 'Mercados EN · FR · ES',
    },
    story: {
      heading: 'Quiénes somos',
      paragraphs: [
        'Traceremove es un estudio multilingüe de estrategas, analistas, diseñadores y tecnólogos enfocados en la seguridad de marca y la generación de demanda para fundadores e industrias globales.',
        'Hemos lanzado playbooks de crisis, programas de crecimiento y arquitecturas de ingresos en Norteamérica y Europa para equipos que necesitan velocidad discreta y reportes claros.',
        'Trabajando como pods integrados, co-creamos campañas, automatizaciones y rituales de medición que tus equipos pueden operar después.',
      ],
    },
    timeline: {
      heading: 'Nuestra evolución',
      summary: 'De un colectivo de respuesta veloz a un aliado integral de resiliencia de marca.',
      milestones: [
        {
          year: '2018',
          title: 'Laboratorio de escucha',
          description: 'Lanzamos nuestro primer pod multilingüe para fundadores enfrentando campañas coordinadas de difamación.',
        },
        {
          year: '2020',
          title: 'Red global de aliados',
          description: 'Ampliamos abogados, RRPP y asesores de producto confiables para cubrir cada canal y jurisdicción.',
        },
        {
          year: '2022',
          title: 'Gremio de experimentación',
          description: 'Estructuramos squads de growth que convierten aprendizajes de protección en demanda compuesta.',
        },
        {
          year: '2024',
          title: 'Inteligencia siempre activa',
          description: 'Automatizaciones, resúmenes con IA y rotaciones de analistas sostienen cobertura 24/7 para equipos globales.',
        },
      ],
    },
    reasons: {
      heading: 'Por qué nos eligen las marcas',
      summary: 'Combinamos defensa proactiva de reputación con experimentos de growth compuestos.',
      items: [
        {
          title: 'Guardianes de reputación',
          description:
            'Monitorizamos search, reseñas y redes en tiempo real para detectar riesgos y proteger tu narrativa antes de que escalen.',
        },
        {
          title: 'Operadores de crecimiento',
          description:
            'Activamos SEO, lifecycle y medios de rendimiento para convertir la atención en pipeline mientras reforzamos la confianza.',
        },
        {
          title: 'Inteligencia interna',
          description:
            'Recibes investigación, guiones y mensajes ejecutivos adaptados al inglés, francés y español.',
        },
      ],
    },
    presence: {
      heading: 'Dónde estamos',
      summary:
        'Pods distribuidos en América y Europa mantienen la inteligencia, la creatividad y la activación encendidas 24/7.',
      regions: [
        {
          name: 'Norteamérica',
          focus: 'Sprints de crecimiento y salas de crisis',
          description:
            'Louisville, Montreal y Ciudad de México cubren workshops ejecutivos, war rooms y lanzamientos de programas de revenue.',
        },
        {
          name: 'Europa',
          focus: 'Arquitectura de reputación',
          description:
            'París y Barcelona combinan contexto regulatorio con contenidos multilingües, narrativas de PR y habilitación de partners.',
        },
        {
          name: 'Cobertura continua',
          focus: 'Monitoreo y automatización',
          description:
            'Analistas desde Lisboa hasta Buenos Aires ajustan monitores IA, dashboards y playbooks para anticiparse a cada jornada.',
        },
      ],
      signals: [
        { value: '6', label: 'zonas horarias activas' },
        { value: '<30 min', label: 'SLA de respuesta a incidentes' },
        { value: '18', label: 'especialistas senior en rotación' },
      ],
    },
    metrics: {
      heading: 'Instantáneas de impacto',
      items: [
        {
          value: '40%',
          label: 'respuesta a crisis más veloz',
          description: 'Reducción promedio del tiempo de mitigación tras implementar nuestros frameworks de escucha y escalado.',
        },
        {
          value: '3x',
          label: 'más reseñas auténticas',
          description: 'Programas de moderación multilingüe que triplican el feedback verificado positivo.',
        },
        {
          value: '120+',
          label: 'playbooks implementados',
          description: 'Lanzamientos, mapas de automatización y sistemas creativos reutilizables entregados a clientes.',
        },
      ],
    },
    method: {
      heading: 'Cómo colaboramos',
      summary: 'Cada colaboración sigue un ritmo ágil y riguroso para alinear marketing, producto y liderazgo.',
      steps: [
        {
          title: 'Mapear tu superficie de riesgo',
          description: 'Auditamos search, medios ganados, dark social y canales propios para medir sentimiento y exposición.',
        },
        {
          title: 'Diseñar el flywheel de crecimiento',
          description: 'Co-creamos posicionamiento, ofertas y medición que convierten la protección en captura de demanda.',
        },
        {
          title: 'Activar squads multilingües',
          description: 'Nuestro pod senior ejecuta campañas, automatizaciones y sistemas creativos localizados para tus mercados.',
        },
        {
          title: 'Medir y reforzar',
          description: 'Dashboards, war rooms y reportes ejecutivos mantienen alineados a los stakeholders mientras iteramos cada semana.',
        },
      ],
    },
    culture: {
      heading: 'Nuestra cultura',
      summary: 'Principios que nos mantienen ágiles, humanos y obsesionados con el éxito de tus equipos.',
      principles: [
        {
          title: 'Transparencia radical',
          description: 'Narramos cada experimento, aprendizaje y riesgo para que liderazgo siempre tenga contexto.',
        },
        {
          title: 'Calma operativa',
          description: 'Rituales de war room, guardias rotativas y escenarios ensayados nos permiten liderar crisis con claridad.',
        },
        {
          title: 'Empoderamiento continuo',
          description: 'Documentación, workshops y office hours acompañan cada entrega para habilitar a tus equipos.',
        },
        {
          title: 'Cuidado por el detalle humano',
          description: 'Estándares de diseño, narrativa y ingeniería que respetan matices culturales y lingüísticos.',
        },
      ],
    },
    testimonials: {
      heading: 'Líderes que confían en nosotros',
      summary:
        'Marketing, comunicación y legal comparten cómo Traceremove mantiene sus marcas protegidas mientras siguen creciendo.',
      stories: [
        {
          quote:
            'Traceremove coordinó un sprint multilingüe de reseñas auténticas que frenó los comentarios falsos en semanas sin frenar el pipeline.',
          name: 'Elena Park',
          role: 'VP de Crecimiento, SaaS Serie C',
        },
        {
          quote:
            'Su cadencia de war room y reportes listos para el board nos dieron calma durante un ataque de difamación coordinado.',
          name: 'Marc-André Lefèvre',
          role: 'Director de Comunicación, grupo hotelero global',
        },
        {
          quote:
            'El equipo conectó protección de dominios, guiones legales y experimentos SEO para salir más fuertes que antes del incidente.',
          name: 'Lucia Romero',
          role: 'Directora Jurídica, scaleup fintech',
        },
      ],
    },
    closing: {
      heading: '¿Listo para proteger y acelerar tu marca?',
      body: 'Diseñemos una hoja de ruta que blinde tu reputación y haga crecer cada mercado que atiendes.',
      cta: 'Agenda una sesión estratégica',
    },
  },
}

const caseStudiesCopy: Record<
  Language,
  {
    hero: {
      kicker: string
      title: string
      subtitle: string
      body: string
      primaryCta: string
      secondaryCta: string
    }
    statsHeading: string
    stats: { value: string; label: string; description: string }[]
    storiesHeading: string
    storiesSubtitle: string
    storyLabels: {
      challenge: string
      approach: string
      impact: string
      metrics: string
      testimonial: string
    }
    stories: {
      title: string
      industry: string
      summary: string
      challenge: string
      approach: string
      impact: string
      metrics: { label: string; value: string }[]
      testimonial: { quote: string; attribution: string }
      visual: string
    }[]
    methodology: {
      heading: string
      summary: string
      steps: { title: string; description: string }[]
    }
    cta: { heading: string; body: string; primary: string; secondary: string }
  }
> = {
  en: {
    hero: {
      kicker: 'Proof of impact',
      title: 'Case studies',
      subtitle: 'Brand protection, search authority, and trust acceleration in motion.',
      body:
        'See how Traceremove blends crisis defense, growth marketing, and multilingual storytelling to recover revenue and confidence.',
      primaryCta: 'Book a strategy call',
      secondaryCta: 'Explore our latest insights',
    },
    statsHeading: 'Outcomes delivered',
    stats: [
      {
        value: '89%',
        label: 'faster takedown cycles',
        description:
          'Average reduction in time-to-removal across marketplaces, search, and social surfaces after onboarding Traceremove.',
      },
      {
        value: '4.6★',
        label: 'review health restored',
        description:
          'Composite rating recovered after neutralising fake reviews and mobilising authentic advocacy programmes.',
      },
      {
        value: '7.5×',
        label: 'trusted traffic growth',
        description:
          'Organic visits flowing to owned experiences compared to baseline before remediation and growth activation.',
      },
    ],
    storiesHeading: 'Wins from the field',
    storiesSubtitle:
      'Every engagement pairs brand defense with growth acceleration so momentum compounds long after launch.',
    storyLabels: {
      challenge: 'Challenge',
      approach: 'Approach',
      impact: 'Impact',
      metrics: 'Key metrics',
      testimonial: 'What they said',
    },
    stories: [
      {
        title: 'We help manage and resolve online data exposure',
        industry: 'Consumer electronics marketplace',
        summary:
          'Removed 1,200 counterfeit listings and replaced top-of-funnel results with owned, high-converting experiences.',
        challenge:
          'Counterfeit sellers outranked brand listings across Amazon, Mercado Libre, and Cdiscount during peak demand.',
        approach:
          'Spun up AI-powered listing sweeps, compiled registrar escalation dossiers, and launched geo-specific SEO landing hubs.',
        impact:
          'Brand regained buy-box share, NPS lifted 12 points, and legal teams now work from a unified escalation centre.',
        metrics: [
          { label: 'Counterfeits removed', value: '1,200+' },
          { label: 'Buy-box recovery', value: '+37%' },
          { label: 'NPS lift', value: '+12' },
        ],
        testimonial: {
          quote:
            'Traceremove united legal, marketing, and marketplace operations so every takedown fed sustained demand.',
          attribution: 'COO, global marketplace collective',
        },
        visual: 'Animated marketplace map pulsing with removals',
      },
      {
        title: 'Hospitality group defends trust in peak season',
        industry: 'Luxury hospitality & resorts',
        summary:
          'Neutralised fake one-star reviews and filled the gap with authentic guest stories across English, French, and Spanish.',
        challenge:
          'A coordinated smear campaign triggered more than 400 fabricated reviews in ten days across Google, TripAdvisor, and Booking.',
        approach:
          'Deployed a review triage squad, activated multilingual loyalty outreach, and delivered board-ready narratives within 24 hours.',
        impact:
          'Average rating returned to 4.7★, direct bookings climbed 18%, and legal exposure stayed contained.',
        metrics: [
          { label: 'Fake reviews removed', value: '430' },
          { label: 'Direct bookings', value: '+18%' },
          { label: 'Response SLA', value: '<4h' },
        ],
        testimonial: {
          quote: 'They turned a frightening spike in fake reviews into a storytelling moment our guests still mention.',
          attribution: 'Chief Marketing Officer, global resort brand',
        },
        visual: 'Flow of review cards shifting from alert red to brand gradients',
      },
      {
        title: 'Fintech stops fraudulent debt-collection domain',
        industry: 'Fintech & lending',
        summary:
          'Shut down spoofed domains and launched an always-on trust hub to reassure anxious borrowers.',
        challenge:
          'Attackers cloned product flows and emailed borrowers from a lookalike domain demanding crypto settlements.',
        approach:
          'Coordinated registrar takedowns, released verification lookup tools, and activated lifecycle comms with personalised guardrails.',
        impact:
          'Fraudulent traffic dropped 96%, churn stabilised, and regulators received proactive disclosure packs.',
        metrics: [
          { label: 'Spoofed domains closed', value: '7' },
          { label: 'At-risk churn prevented', value: '92%' },
          { label: 'Support tickets deflected', value: '1.8k' },
        ],
        testimonial: {
          quote:
            'Traceremove made compliance, engineering, and CX feel like one squad focused on safeguarding our borrowers.',
          attribution: 'Chief Risk Officer, Series D fintech',
        },
        visual: 'Animated shield protecting secure login flows',
      },
      {
        title: 'Luxury retailer outranks knock-offs with SEO labs',
        industry: 'Luxury retail & fashion',
        summary:
          'Launched multilingual editorial programmes that reclaimed high-intent keywords from counterfeiters.',
        challenge:
          'Replica blogs and marketplaces dominated search results for the brand’s hero products across priority geographies.',
        approach:
          'Combined forensic SERP analysis, in-language editorial pods, and digital PR bursts targeting authority publications.',
        impact:
          'Organic revenue rose 54% in priority regions and positive sentiment jumped 28 points in eight weeks.',
        metrics: [
          { label: 'Priority keywords reclaimed', value: '32' },
          { label: 'Organic revenue lift', value: '+54%' },
          { label: 'Positive sentiment', value: '+28pts' },
        ],
        testimonial: {
          quote: 'The blend of protection and growth finally aligned our legal and ecommerce objectives.',
          attribution: 'VP Ecommerce, global luxury house',
        },
        visual: 'Rising line graph orbiting hero product imagery',
      },
      {
        title: 'B2B SaaS unlocks multilingual thought leadership engine',
        industry: 'B2B SaaS & cybersecurity',
        summary:
          'Scaled insider commentary and social proof that wins enterprise trust while deterring misinformation.',
        challenge:
          'Competing vendors seeded fake outage rumours across Reddit, Discord, and niche forums, stalling pipeline velocity.',
        approach:
          'We help manage and resolve online data exposure',
        impact:
          'Enterprise win rate improved 21%, sales cycle shortened by 11 days, and share of voice doubled.',
        metrics: [
          { label: 'Thought leadership pieces shipped', value: '48' },
          { label: 'Enterprise win rate', value: '+21%' },
          { label: 'Share of voice', value: '2.1×' },
        ],
        testimonial: {
          quote: 'Their newsroom model keeps our narrative ahead of speculation and fuels every commercial motion.',
          attribution: 'Chief Revenue Officer, cybersecurity SaaS',
        },
        visual: 'Orbit of animated content cards with motion trails',
      },
    ],
    methodology: {
      heading: 'How we orchestrate transformations',
      summary: 'Four phased loops keep leadership aligned while our pods ship results every week.',
      steps: [
        {
          title: 'Intelligence ignition',
          description: 'Instrument listening, audit surfaces, and quantify brand damage across languages and regions.',
        },
        {
          title: 'Narrative control',
          description: 'Co-create positioning, talking points, and owned experiences that reclaim the SERP and feeds.',
        },
        {
          title: 'Activation & escalation',
          description: 'Launch takedown sprints, SEO labs, CRM journeys, and paid amplification tuned for each market.',
        },
        {
          title: 'Proof & enablement',
          description: 'Report progress, train teams, and hand off automation-ready playbooks so momentum persists.',
        },
      ],
    },
    cta: {
      heading: 'Ready to author your next success story?',
      body: 'Let’s map the risks, quantify the upside, and mobilise the senior pod that will protect and grow your brand.',
      primary: 'Start a custom roadmap',
      secondary: 'Explore our partners program',
    },
  },
  fr: {
    hero: {
      kicker: 'Preuves d’impact',
      title: 'Études de cas',
      subtitle: 'Protection de marque, autorité SEO et accélération de la confiance en mouvement.',
      body:
        'Découvrez comment Traceremove allie défense de crise, marketing de croissance et storytelling multilingue pour restaurer revenus et confiance.',
      primaryCta: 'Réserver un call stratégique',
      secondaryCta: 'Explorer nos insights récents',
    },
    statsHeading: 'Résultats livrés',
    stats: [
      {
        value: '89%',
        label: 'cycles de retrait plus rapides',
        description:
          'Réduction moyenne du temps de suppression sur marketplaces, recherche et social après l’arrivée de Traceremove.',
      },
      {
        value: '4,6★',
        label: 'santé des avis restaurée',
        description:
          'Notation composite retrouvée après neutralisation des faux avis et mobilisation d’ambassadeurs authentiques.',
      },
      {
        value: '7,5×',
        label: 'croissance du trafic de confiance',
        description:
          'Visites organiques vers les expériences maîtrisées comparées à la ligne de base avant remédiation et activation growth.',
      },
    ],
    storiesHeading: 'Victoires sur le terrain',
    storiesSubtitle:
      'Chaque mission associe défense de marque et accélération growth pour créer un élan durable.',
    storyLabels: {
      challenge: 'Défi',
      approach: 'Approche',
      impact: 'Impact',
      metrics: 'Indicateurs clés',
      testimonial: 'Témoignage',
    },
    stories: [
      {
        title: 'Marketplace réhabilitée en 14 jours',
        industry: 'Marketplace électronique grand public',
        summary:
          'Suppression de 1 200 annonces contrefaites et reprise des résultats haut de funnel avec des expériences propriétaires.',
        challenge:
          'Des vendeurs frauduleux dépassaient la marque sur Amazon, Mercado Libre et Cdiscount en pleine période de demande.',
        approach:
          'Balayages IA, dossiers d’escalade pour registraires et hubs SEO géociblés déployés simultanément.',
        impact:
          'Récupération de la buy-box, NPS +12 points et cellule juridique centralisée autour d’un centre d’escalade unique.',
        metrics: [
          { label: 'Annonces retirées', value: '1 200+' },
          { label: 'Part buy-box retrouvée', value: '+37%' },
          { label: 'Gain de NPS', value: '+12' },
        ],
        testimonial: {
          quote:
            'Traceremove a aligné juridique, marketing et opérations marketplace pour transformer chaque retrait en croissance durable.',
          attribution: 'COO, collectif marketplace global',
        },
        visual: 'Carte marketplace animée avec pulsations de retraits',
      },
      {
        title: 'Groupe hôtelier protège sa note en haute saison',
        industry: 'Hôtellerie de luxe et resorts',
        summary:
          'Neutralisation des faux avis une étoile et amplification de témoignages authentiques en anglais, français et espagnol.',
        challenge:
          'Une campagne coordonnée a généré plus de 400 faux avis en dix jours sur Google, TripAdvisor et Booking.',
        approach:
          'Cellule de tri des avis, relance fidélité multilingue et narratifs prêts pour le board livrés en moins de 24 h.',
        impact:
          'Note moyenne revenue à 4,7★, réservations directes +18 % et risque juridique contenu.',
        metrics: [
          { label: 'Faux avis supprimés', value: '430' },
          { label: 'Réservations directes', value: '+18%' },
          { label: 'SLA de réponse', value: '<4h' },
        ],
        testimonial: {
          quote:
            'Ils ont transformé une vague inquiétante de faux avis en récit mémorable que nos invités citent encore.',
          attribution: 'CMO, marque de resorts internationale',
        },
        visual: 'Flux de cartes d’avis passant du rouge alerte aux dégradés de marque',
      },
      {
        title: 'Fintech stoppe un faux domaine de recouvrement',
        industry: 'Fintech et crédit',
        summary:
          'Fermeture des domaines usurpés et lancement d’un hub de confiance permanent pour rassurer les emprunteurs.',
        challenge:
          'Des acteurs malveillants copiaient les parcours produit et réclamaient des paiements crypto via un domaine jumeau.',
        approach:
          'Takedowns coordonnés auprès des registraires, outil de vérification en libre-service et communications lifecycle personnalisées.',
        impact:
          'Trafic frauduleux -96 %, churn stabilisé et dossiers proactifs transmis aux régulateurs.',
        metrics: [
          { label: 'Domaines usurpés fermés', value: '7' },
          { label: 'Churn à risque évité', value: '92%' },
          { label: 'Tickets support évités', value: '1,8k' },
        ],
        testimonial: {
          quote:
            'Traceremove a fusionné conformité, engineering et CX en une squad dédiée à la protection de nos emprunteurs.',
          attribution: 'Chief Risk Officer, fintech série D',
        },
        visual: 'Bouclier animé protégeant les parcours de connexion sécurisés',
      },
      {
        title: 'Retailer luxe domine les copies grâce aux labs SEO',
        industry: 'Retail luxe & mode',
        summary:
          'Programme éditorial multilingue qui reprend les mots-clés stratégiques confisqués par les contrefacteurs.',
        challenge:
          'Blogs de répliques et marketplaces trustaient la SERP sur les produits phares de la marque.',
        approach:
          'Analyse médico-légale de la SERP, pods éditoriaux natifs et vagues de RP digitales vers des médias d’autorité.',
        impact:
          'Revenus organiques +54 % sur les régions clés et sentiment positif +28 points en huit semaines.',
        metrics: [
          { label: 'Mots-clés prioritaires repris', value: '32' },
          { label: 'Croissance du revenu organique', value: '+54%' },
          { label: 'Sentiment positif', value: '+28 pts' },
        ],
        testimonial: {
          quote:
            'L’alliance protection + contenu growth a enfin aligné nos objectifs juridiques et e-commerce.',
          attribution: 'VP Ecommerce, maison de luxe globale',
        },
        visual: 'Graphique ascendant entourant les visuels produits héros',
      },
      {
        title: 'SaaS B2B active un moteur de leadership d’opinion',
        industry: 'SaaS B2B & cybersécurité',
        summary:
          'Commentaire expert et preuves sociales multilingues pour gagner la confiance tout en coupant la désinformation.',
        challenge:
          'Des concurrents diffusaient de faux bruits de pannes sur Reddit, Discord et des forums niches, ralentissant le pipeline.',
        approach:
          'Coaching porte-parole, guides insiders diffusés via Substack et LinkedIn, et écoute réputationnelle automatisée.',
        impact:
          'Taux de closing entreprise +21 %, cycle de vente raccourci de 11 jours et part de voix doublée.',
        metrics: [
          { label: 'Contenus thought leadership produits', value: '48' },
          { label: 'Taux de victoire entreprise', value: '+21%' },
          { label: 'Part de voix', value: '×2,1' },
        ],
        testimonial: {
          quote:
            'Leur modèle newsroom garde notre récit devant la spéculation et alimente chaque mouvement commercial.',
          attribution: 'Chief Revenue Officer, SaaS cybersécurité',
        },
        visual: 'Orbite de cartes de contenu animées avec traînées lumineuses',
      },
    ],
    methodology: {
      heading: 'Notre orchestration des transformations',
      summary: 'Quatre boucles séquencées maintiennent le leadership aligné pendant que nos pods livrent chaque semaine.',
      steps: [
        {
          title: 'Allumage intelligence',
          description: 'Instrumentation d’écoute, audit des surfaces et mesure des dommages par langue et région.',
        },
        {
          title: 'Contrôle du récit',
          description: 'Co-création de positionnements, messages et expériences propriétaires qui reprennent SERP et feeds.',
        },
        {
          title: 'Activation & escalade',
          description: 'Sprints de retrait, labs SEO, parcours CRM et amplification media calibrés par marché.',
        },
        {
          title: 'Preuve & empowerment',
          description: 'Reporting, formation et playbooks automatisables pour prolonger l’élan.',
        },
      ],
    },
    cta: {
      heading: 'Prêts à écrire votre prochaine success story ?',
      body: 'Cartographions les risques, l’opportunité et mobilisons le pod senior qui protègera et fera croître votre marque.',
      primary: 'Lancer une feuille de route sur mesure',
      secondary: 'Découvrir notre programme partenaires',
    },
  },
  es: {
    hero: {
      kicker: 'Pruebas de impacto',
      title: 'Casos de éxito',
      subtitle: 'Protección de marca, autoridad en buscadores y confianza acelerada en acción.',
      body:
        'Descubre cómo Traceremove combina defensa de crisis, marketing de crecimiento y narrativa multilingüe para recuperar ingresos y credibilidad.',
      primaryCta: 'Agenda una sesión estratégica',
      secondaryCta: 'Explora nuestros últimos insights',
    },
    statsHeading: 'Resultados entregados',
    stats: [
      {
        value: '89%',
        label: 'retiros más rápidos',
        description:
          'Reducción promedio del tiempo de baja en marketplaces, buscadores y redes tras activar a Traceremove.',
      },
      {
        value: '4,6★',
        label: 'salud de reseñas restablecida',
        description:
          'Calificación compuesta recuperada después de neutralizar reseñas falsas y activar programas de advocacy auténtico.',
      },
      {
        value: '7,5×',
        label: 'crecimiento de tráfico confiable',
        description:
          'Visitas orgánicas a experiencias propias comparadas con la línea base previa a la remediación y activación growth.',
      },
    ],
    storiesHeading: 'Victorias en el terreno',
    storiesSubtitle:
      'Cada proyecto une defensa de marca y aceleración de crecimiento para sostener el impulso.',
    storyLabels: {
      challenge: 'Desafío',
      approach: 'Enfoque',
      impact: 'Impacto',
      metrics: 'Indicadores clave',
      testimonial: 'Testimonio',
    },
    stories: [
      {
        title: 'Marketplace reinicia su reputación en 14 días',
        industry: 'Marketplace de electrónica de consumo',
        summary:
          'Eliminamos 1 200 listados falsos y recuperamos la parte alta del embudo con experiencias propias de alta conversión.',
        challenge:
          'Vendedores falsos superaban a la marca en Amazon, Mercado Libre y Cdiscount durante el pico de demanda.',
        approach:
          'Barridos con IA, expedientes de escalamiento para registradores y hubs SEO geolocalizados lanzados en paralelo.',
        impact:
          'La marca recuperó la buy-box, el NPS subió 12 puntos y legal opera desde un único centro de escalamiento.',
        metrics: [
          { label: 'Listados falsos eliminados', value: '1 200+' },
          { label: 'Recuperación de buy-box', value: '+37%' },
          { label: 'Aumento de NPS', value: '+12' },
        ],
        testimonial: {
          quote:
            'Traceremove alineó legal, marketing y operaciones marketplace para que cada retiro alimentara la demanda.',
          attribution: 'COO, colectivo marketplace global',
        },
        visual: 'Mapa de marketplace animado con pulsos de retiradas',
      },
      {
        title: 'Cadena hotelera protege la confianza en temporada alta',
        industry: 'Hospitalidad y resorts de lujo',
        summary:
          'Neutralizamos reseñas falsas de una estrella y las reemplazamos con historias reales de huéspedes en tres idiomas.',
        challenge:
          'Una campaña coordinada generó más de 400 reseñas fabricadas en diez días en Google, TripAdvisor y Booking.',
        approach:
          'Escuadrón de triage de reseñas, outreach de fidelidad multilingüe y narrativas listas para el board en menos de 24 horas.',
        impact:
          'La calificación volvió a 4,7★, las reservas directas crecieron 18 % y el riesgo legal quedó contenido.',
        metrics: [
          { label: 'Reseñas falsas removidas', value: '430' },
          { label: 'Reservas directas', value: '+18%' },
          { label: 'SLA de respuesta', value: '<4h' },
        ],
        testimonial: {
          quote:
            'Transformaron un pico alarmante de reseñas falsas en un relato que los huéspedes aún recuerdan.',
          attribution: 'CMO, marca global de resorts',
        },
        visual: 'Flujo de tarjetas de reseñas pasando de rojo alerta a gradientes de marca',
      },
      {
        title: 'Fintech desactiva dominio falso de cobranza',
        industry: 'Fintech y préstamos',
        summary:
          'Cerramos dominios suplantadores y lanzamos un hub de confianza permanente para tranquilizar a los prestatarios.',
        challenge:
          'Atacantes clonaron los flujos de producto y enviaban correos desde un dominio gemelo solicitando pagos en cripto.',
        approach:
          'Takedowns coordinados con registradores, herramienta de verificación y comunicaciones lifecycle con guardas personalizadas.',
        impact:
          'El tráfico fraudulento cayó 96 %, el churn se estabilizó y los reguladores recibieron informes proactivos.',
        metrics: [
          { label: 'Dominios falsos cerrados', value: '7' },
          { label: 'Churn en riesgo evitado', value: '92%' },
          { label: 'Tickets evitados', value: '1,8k' },
        ],
        testimonial: {
          quote:
            'Traceremove hizo que compliance, ingeniería y CX trabajaran como una sola squad para proteger a nuestros clientes.',
          attribution: 'Chief Risk Officer, fintech Serie D',
        },
        visual: 'Escudo animado que protege los flujos de inicio de sesión seguros',
      },
      {
        title: 'Retailer de lujo domina a los imitadores con labs SEO',
        industry: 'Retail de lujo y moda',
        summary:
          'Programa editorial multilingüe que recuperó keywords de alta intención capturadas por los falsificadores.',
        challenge:
          'Blogs de réplicas y marketplaces ocupaban la SERP para los productos héroe en regiones clave.',
        approach:
          'Análisis forense de la SERP, pods editoriales nativos y oleadas de PR digital hacia medios de autoridad.',
        impact:
          'Ingresos orgánicos +54 % en regiones prioritarias y sentimiento positivo +28 puntos en ocho semanas.',
        metrics: [
          { label: 'Keywords prioritarias recuperadas', value: '32' },
          { label: 'Crecimiento de revenue orgánico', value: '+54%' },
          { label: 'Sentimiento positivo', value: '+28 pts' },
        ],
        testimonial: {
          quote:
            'La mezcla de protección y contenido growth alineó por fin a legal y e-commerce.',
          attribution: 'VP Ecommerce, casa de lujo global',
        },
        visual: 'Gráfico ascendente orbitando fotografía de productos',
      },
      {
        title: 'SaaS B2B activa motor multilingüe de liderazgo de opinión',
        industry: 'SaaS B2B y ciberseguridad',
        summary:
          'Escalamos comentarios internos y prueba social que ganan confianza enterprise y frenan la desinformación.',
        challenge:
          'Competidores difundían rumores falsos de caídas en Reddit, Discord y foros nicho, frenando el pipeline.',
        approach:
          'Preparamos voceros ejecutivos con contenido de respuesta rápida, distribuimos guías insiders vía Substack y LinkedIn y automatizamos la escucha reputacional.',
        impact:
          'Win rate enterprise +21 %, ciclo de ventas 11 días más corto y share of voice duplicado.',
        metrics: [
          { label: 'Piezas de liderazgo publicadas', value: '48' },
          { label: 'Win rate enterprise', value: '+21%' },
          { label: 'Share of voice', value: '2,1×' },
        ],
        testimonial: {
          quote:
            'Su modelo de newsroom mantiene nuestra narrativa por delante de la especulación y nutre cada jugada comercial.',
          attribution: 'Chief Revenue Officer, SaaS de ciberseguridad',
        },
        visual: 'Órbita de tarjetas de contenido animadas con estelas de luz',
      },
    ],
    methodology: {
      heading: 'Cómo orquestamos la transformación',
      summary: 'Cuatro bucles mantienen al liderazgo alineado mientras nuestros pods entregan resultados cada semana.',
      steps: [
        {
          title: 'Ignición de inteligencia',
          description: 'Instrumentamos escucha, auditamos superficies y cuantificamos el daño por idioma y región.',
        },
        {
          title: 'Control del relato',
          description: 'Co-creamos posicionamiento, mensajes y experiencias propias que recuperan la SERP y los feeds.',
        },
        {
          title: 'Activación y escalamiento',
          description: 'Lanzamos sprints de retirada, labs SEO, journeys CRM y paid media ajustados por mercado.',
        },
        {
          title: 'Prueba y habilitación',
          description: 'Reportes, formación y playbooks automatizables para que el impulso continúe.',
        },
      ],
    },
    cta: {
      heading: '¿Listo para escribir tu próximo caso de éxito?',
      body: 'Mapeemos riesgos y oportunidad para movilizar al pod senior que protegerá y hará crecer tu marca.',
      primary: 'Inicia una hoja de ruta a medida',
      secondary: 'Explora nuestro programa de partners',
    },
  },
}

const partnersCopy: Record<
  Language,
  {
    title: string
    subtitle: string
    description: string
    segmentsHeading: string
    segments: { title: string; description: string }[]
    benefitsHeading: string
    benefits: string[]
    programsHeading: string
    programs: { title: string; description: string }[]
    ctaHeading: string
    ctaBody: string
  }
> = {
  en: {
    title: 'Partner with Traceremove',
    subtitle: 'Co-create go-to-market velocity across brand, demand, and product growth.',
    description:
      'We collaborate with agencies, venture studios, accelerators, and SaaS platforms that want a trusted growth operator to plug in quickly. Our team delivers multilingual positioning, revenue design, and experimentation so your portfolio can move faster.',
    segmentsHeading: 'Who we partner with',
    segments: [
      {
        title: 'Venture and accelerator programs',
        description: 'Fractional marketing leadership, narrative design, and reporting frameworks for founders raising or scaling in new markets.',
      },
      {
        title: 'Digital agencies and studios',
        description: 'White-label growth strategy, CRO, and lifecycle execution that complements your creative or engineering core.',
      },
      {
        title: 'SaaS and platform ecosystems',
        description: 'Enablement assets, joint campaigns, and product education tailored to English, French, and Spanish-speaking customers.',
      },
    ],
    benefitsHeading: 'Partner benefits',
    benefits: [
      'Multilingual delivery across English, French, and Spanish markets.',
      'Executive-level strategy that ships with hands-on execution.',
      'Flexible revenue models: retainers, rev-share, or co-marketing swaps.',
      'Shared analytics to keep stakeholders aligned on impact.',
    ],
    programsHeading: 'Engagement programs',
    programs: [
      {
        title: 'Revenue lab sprints',
        description: '90-day engagements to stand up segmentation, offer architecture, and automated nurture flows with shared reporting.',
      },
      {
        title: 'Co-marketing alliances',
        description: 'Joint workshops, webinars, and playbooks to spotlight complementary expertise and capture qualified demand.',
      },
      {
        title: 'Partner enablement',
        description: 'Localized sales decks, onboarding journeys, and success collateral so teams can activate new offerings with confidence.',
      },
    ],
    ctaHeading: 'Ready to explore a partnership?',
    ctaBody: 'Introduce your team and goals at support@traceremove.com — we will schedule an alignment session within two business days.',
  },
  fr: {
    title: 'Collaborez avec Traceremove',
    subtitle: 'Co-construisons votre go-to-market entre brand, demand generation et croissance produit.',
    description:
      "Nous accompagnons agences, fonds, accélérateurs et plateformes SaaS qui recherchent un partenaire growth fiable. L'équipe orchestre positionnement multilingue, modèles de revenus et expérimentation pour accélérer vos portefeuilles.",
    segmentsHeading: 'Nos partenaires',
    segments: [
      {
        title: 'Fonds et accélérateurs',
        description: 'Leadership marketing fractionné, narration stratégique et frameworks de reporting pour des fondateurs en levée ou en hypercroissance.',
      },
      {
        title: 'Agences et studios digitaux',
        description: 'Stratégie growth, CRO et lifecycle en marque blanche qui complète vos pôles créatif ou technique.',
      },
      {
        title: 'Écosystèmes SaaS et plateformes',
        description: 'Assets d’activation, campagnes conjointes et éducation produit adaptés aux audiences francophones, anglophones et hispanophones.',
      },
    ],
    benefitsHeading: 'Avantages partenaires',
    benefits: [
      'Exécution multilingue anglais, français et espagnol.',
      'Stratégie senior qui s’accompagne d’une mise en œuvre opérationnelle.',
      'Modèles de collaboration flexibles : retainer, partage de revenus ou co-marketing.',
      'Tableaux de bord partagés pour piloter l’impact ensemble.',
    ],
    programsHeading: 'Programmes',
    programs: [
      {
        title: 'Sprints revenue lab',
        description: '90 jours pour structurer segmentation, offres et automatisation nurturing avec reporting partagé.',
      },
      {
        title: 'Alliances co-marketing',
        description: 'Workshops, webinaires et playbooks co-brandés pour capter une demande qualifiée.',
      },
      {
        title: 'Enablement partenaires',
        description: 'Decks commerciaux, parcours onboarding et contenus de succès localisés pour activer de nouvelles offres.',
      },
    ],
    ctaHeading: 'Discutons de votre partenariat',
    ctaBody: 'Présentez-nous votre structure et vos objectifs via support@traceremove.com — réponse garantie sous deux jours ouvrés.',
  },
  es: {
    title: 'Haz equipo con Traceremove',
    subtitle: 'Impulsemos tu go-to-market combinando marca, demanda y crecimiento de producto.',
    description:
      'Trabajamos con agencias, fondos, aceleradoras y plataformas SaaS que necesitan un operador de growth confiable. Diseñamos posicionamiento multilingüe, modelos de ingresos y experimentos para que tu portafolio acelere.',
    segmentsHeading: 'Socios ideales',
    segments: [
      {
        title: 'Fondos y aceleradoras',
        description: 'Liderazgo de marketing fraccional, narrativa estratégica y reporting para fundadores en ronda o expansión.',
      },
      {
        title: 'Agencias y estudios digitales',
        description: 'Estrategia de growth, CRO y lifecycle bajo tu marca para complementar capacidades creativas o técnicas.',
      },
      {
        title: 'Ecosistemas SaaS y plataformas',
        description: 'Activos de enablement, campañas conjuntas y educación de producto para audiencias en inglés, francés y español.',
      },
    ],
    benefitsHeading: 'Ventajas',
    benefits: [
      'Entrega multilingüe en inglés, francés y español.',
      'Estrategia ejecutiva con implementación práctica.',
      'Modelos flexibles: retainer, revenue share o co-marketing.',
      'Analítica compartida para alinear a todos los equipos.',
    ],
    programsHeading: 'Modalidades',
    programs: [
      {
        title: 'Sprints de revenue lab',
        description: '90 días para activar segmentación, arquitectura de ofertas y automatizaciones con reporting compartido.',
      },
      {
        title: 'Alianzas de co-marketing',
        description: 'Workshops, webinars y playbooks conjuntos para captar demanda calificada.',
      },
      {
        title: 'Enablement para partners',
        description: 'Presentaciones, recorridos de onboarding y contenidos de éxito localizados para activar nuevas ofertas.',
      },
    ],
    ctaHeading: '¿Nos asociamos?',
    ctaBody: 'Cuéntanos sobre tu organización en support@traceremove.com — coordinamos una llamada en dos días hábiles.',
  },
}

const joinCopy: Record<
  Language,
  {
    title: string
    subtitle: string
    description: string
    valuesHeading: string
    values: { title: string; description: string }[]
    rolesHeading: string
    roles: string[]
    perksHeading: string
    perks: string[]
    ctaHeading: string
    ctaBody: string
  }
> = {
  en: {
    title: 'Join the Traceremove collective',
    subtitle: 'We help manage and resolve online data exposure',
    description:
      'We are always meeting strategists, storytellers, analysts, and builders who thrive in autonomous teams. If you love shipping experiments quickly and collaborating across languages, introduce yourself.',
    valuesHeading: 'How we work',
    values: [
      {
        title: 'Outcome obsessed',
        description: 'We design with metrics in mind and reverse-engineer every deliverable to business impact.',
      },
      {
        title: 'Multilingual by default',
        description: 'We operate across English, French, and Spanish markets, respecting regional nuance and accessibility.',
      },
      {
        title: 'Craft and curiosity',
        description: 'We merge experimentation with storytelling — from AI-assisted production to polished executive narratives.',
      },
    ],
    rolesHeading: 'Focus areas we hire for',
    roles: [
      'Growth strategist (contract and fractional engagements)',
      'Lifecycle marketing and CRM specialist',
      'Brand and product copywriter with localization experience',
      'Marketing analytics engineer (Looker Studio, Mixpanel, dbt)',
    ],
    perksHeading: 'What you can expect',
    perks: [
      'Remote-first collaboration with async rituals and quarterly in-person summits.',
      'Project-based autonomy with access to our playbooks, research, and tooling stack.',
      'Opportunities to lead multilingual workshops and client strategy rooms.',
      'Transparent profit sharing on long-term retainers.',
    ],
    ctaHeading: 'Introduce yourself',
    ctaBody: 'Send your portfolio, case studies, or LinkedIn to join@traceremove.com. Tell us about the markets you know best and the outcomes you love driving.',
  },
  fr: {
    title: "Rejoignez le collectif Traceremove",
    subtitle: 'Opérateurs growth remote-first, experts en réputation, revenus et narration produit.',
    description:
      "Nous rencontrons en continu des stratèges, créatifs, analystes et builders qui aiment l’autonomie. Si vous expédiez des expériences rapidement et collaborez en plusieurs langues, parlons-nous.",
    valuesHeading: 'Notre culture',
    values: [
      {
        title: 'Obsédés par l’impact',
        description: 'Chaque livrable est relié à un indicateur business clair et mesurable.',
      },
      {
        title: 'Multilingue par défaut',
        description: 'Nous opérons en anglais, français et espagnol tout en respectant les spécificités locales.',
      },
      {
        title: 'Curiosité et craft',
        description: 'Nous marions expérimentation, IA et storytelling pour créer des expériences mémorables.',
      },
    ],
    rolesHeading: 'Profils recherchés',
    roles: [
      'Stratège growth (mission ou temps partagé)',
      'Spécialiste lifecycle & CRM',
      'Copywriter marque & produit avec expérience en localisation',
      'Marketing analytics engineer (Looker Studio, Mixpanel, dbt)',
    ],
    perksHeading: 'Ce que nous offrons',
    perks: [
      'Organisation remote-first avec rituels asynchrones et sommets trimestriels.',
      'Autonomie projet avec accès à nos playbooks, recherches et stack outils.',
      'Opportunité d’animer des workshops multilingues et des comités stratégiques.',
      'Partage transparent des profits sur les retainers long terme.',
    ],
    ctaHeading: 'Envoyez votre profil',
    ctaBody: 'Partagez portfolio, études de cas ou LinkedIn via join@traceremove.com en précisant vos marchés et vos victoires préférées.',
  },
  es: {
    title: 'Únete al colectivo Traceremove',
    subtitle: 'Operadores de growth remotos que diseñan reputación, ingresos y relatos de producto.',
    description:
      'Buscamos estrategas, storytellers, analistas y makers que disfruten trabajar con autonomía. Si te emociona lanzar experimentos rápidos y colaborar en varios idiomas, preséntate.',
    valuesHeading: 'Nuestra cultura',
    values: [
      {
        title: 'Obsesión por el resultado',
        description: 'Todo entregable se conecta con métricas de negocio tangibles.',
      },
      {
        title: 'Multilingües de origen',
        description: 'Operamos en inglés, francés y español cuidando el contexto local.',
      },
      {
        title: 'Curiosidad y oficio',
        description: 'Combinamos experimentación, IA y narrativa para experiencias memorables.',
      },
    ],
    rolesHeading: 'Roles que buscamos',
    roles: [
      'Estratega de growth (contrato o fractional)',
      'Especialista en lifecycle marketing y CRM',
      'Copywriter de marca y producto con localización',
      'Ingeniero/a de analytics marketing (Looker Studio, Mixpanel, dbt)',
    ],
    perksHeading: 'Lo que ofrecemos',
    perks: [
      'Trabajo remoto-first con rituales asíncronos y encuentros trimestrales.',
      'Autonomía en proyectos con acceso a nuestros playbooks y stack de herramientas.',
      'Posibilidad de liderar workshops y salas estratégicas multilingües.',
      'Revenue share transparente en retainers de larga duración.',
    ],
    ctaHeading: 'Preséntate',
    ctaBody: 'Comparte tu portfolio, casos o LinkedIn en join@traceremove.com. Cuéntanos los mercados que mejor conoces y los resultados que disfrutas conseguir.',
  },
}

interface TeamMember {
  name: string
  role: string
  location: string
  bio: Record<Language, string>
  focus: Record<Language, string[]>
  color: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'TraceRemove Advisor',
    role: 'Founder & CEO',
    location: 'Toronto · Montréal',
    bio: {
      en: 'TraceRemove Advisor steers brand, lifecycle, and product GTM initiatives for venture-backed SaaS and commerce teams. He leads multilingual strategy rooms and keeps every engagement grounded in measurable impact.',
      fr: 'TraceRemove Advisor pilote les initiatives de marque, lifecycle et go-to-market produit pour des équipes SaaS et e-commerce financées. Il orchestre des workshops multilingues et relie chaque programme à des métriques tangibles.',
      es: 'TraceRemove Advisor dirige iniciativas de marca, lifecycle y go-to-market de producto para equipos SaaS y comercio respaldados por venture capital. Conduce workshops multilingües y ancla cada programa en métricas claras.',
    },
    focus: {
      en: ['Strategic narrative architecture', 'Revenue operations modelling', 'Executive advisory'],
      fr: ['Architecture narrative stratégique', 'Modélisation des opérations revenue', 'Conseil exécutif'],
      es: ['Arquitectura narrativa estratégica', 'Modelado de revenue operations', 'Asesoría ejecutiva'],
    },
    color: '#38bdf8',
  },
  {
    name: 'Maya Lavoie',
    role: 'Design Systems Director',
    location: 'Québec City',
    bio: {
      en: 'Maya crafts high-velocity brand systems spanning product UI, marketing, and sales enablement. She blends motion design, illustration, and accessibility audits for every launch.',
      fr: 'Maya conçoit des systèmes de marque à forte cadence couvrant UI produit, marketing et sales enablement. Elle marie motion design, illustration et audits d’accessibilité pour chaque lancement.',
      es: 'Maya diseña sistemas de marca de alta velocidad que conectan UI de producto, marketing y enablement comercial. Integra motion design, ilustración y auditorías de accesibilidad en cada entrega.',
    },
    focus: {
      en: ['Design systems & tokens', 'Creative automation', 'Motion storytelling'],
      fr: ['Design systems & tokens', 'Automatisation créative', 'Motion storytelling'],
      es: ['Design systems y tokens', 'Automatización creativa', 'Motion storytelling'],
    },
    color: '#f97316',
  },
  {
    name: 'Luis Mendoza',
    role: 'Growth Engineering Lead',
    location: 'Madrid',
    bio: {
      en: 'Luis codes experimentation frameworks, analytics pipelines, and marketing automation that tie campaign insights to product velocity.',
      fr: "Luis développe des frameworks d'expérimentation, des pipelines analytics et des automatisations marketing reliant chaque campagne au produit.",
      es: 'Luis desarrolla frameworks de experimentación, pipelines de analítica y automatizaciones de marketing que conectan cada campaña con el producto.',
    },
    focus: {
      en: ['Data engineering', 'Attribution modelling', 'Lifecycle automation'],
      fr: ['Data engineering', "Modélisation d'attribution", 'Automatisation lifecycle'],
      es: ['Ingeniería de datos', 'Modelado de atribución', 'Automatización lifecycle'],
    },
    color: '#a855f7',
  },
  {
    name: 'Sofia Martínez',
    role: 'Client Strategy Partner',
    location: 'Barcelona · Remote',
    bio: {
      en: 'Sofia architects go-to-market roadmaps and facilitates multilingual revenue rooms to keep marketing, product, and sales in sync.',
      fr: 'Sofia structure des roadmaps go-to-market et anime des comités revenue multilingues pour aligner marketing, produit et ventes.',
      es: 'Sofia estructura roadmaps go-to-market y facilita revenue rooms multilingües que alinean marketing, producto y ventas.',
    },
    focus: {
      en: ['Integrated GTM planning', 'Stakeholder facilitation', 'Enablement playbooks'],
      fr: ['Planification GTM intégrée', 'Facilitation de parties prenantes', 'Playbooks d’enablement'],
      es: ['Planificación GTM integrada', 'Facilitación de stakeholders', 'Playbooks de enablement'],
    },
    color: '#22d3ee',
  },
]

type ServiceAccent = 'cyan' | 'violet' | 'emerald' | 'amber' | 'blue'

interface PrimaryService {
  key: string
  accent: ServiceAccent
  badge: Record<Language, string>
  title: Record<Language, string>
  description: Record<Language, string>
  price: Record<Language, string>
  bullets: Record<Language, string[]>
}

const primaryServices: PrimaryService[] = [
  {
    key: 'trace-removal',
    accent: 'cyan',
    badge: {
      en: 'Trace removal',
      fr: 'Effacement',
      es: 'Eliminación',
    },
    title: {
      en: 'Digital trace removal',
      fr: 'Suppression d’empreinte numérique',
      es: 'Eliminación de huella digital',
    },
    description: {
      en: 'Erase damaging search results, leaked assets, and platform footprints with legal-safe takedown workflows.',
      fr: 'Nous effaçons résultats de recherche nuisibles, fuites d’actifs et traces de plateformes via des workflows conformes.',
      es: 'Borramos resultados nocivos, activos filtrados y rastros en plataformas con flujos de baja conformes.',
    },
    price: {
      en: 'From $6,400 USD',
      fr: 'À partir de 6 400 $ US',
      es: 'Desde 6 400 USD',
    },
    bullets: {
      en: [
        'Crisis assessment in under 48 hours',
        'Coordinated removals across press, forums, and clouds',
        'Escalation pods for executives and high-risk teams',
      ],
      fr: [
        'Diagnostic de crise en moins de 48 h',
        'Suppression coordonnée presse, forums et clouds',
        'Pods d’escalade pour dirigeants et équipes sensibles',
      ],
      es: [
        'Evaluación de crisis en menos de 48 h',
        'Eliminaciones coordinadas en prensa, foros y nubes',
        'Pods de escalamiento para ejecutivos y equipos críticos',
      ],
    },
  },
  {
    key: 'serm',
    accent: 'violet',
    badge: {
      en: 'SERM',
      fr: 'SERM',
      es: 'SERM',
    },
    title: {
      en: 'We help manage and resolve online data exposure',
      fr: 'Gestion de réputation search',
      es: 'Gestión de reputación en buscadores',
    },
    description: {
      en: 'Own every SERP pixel with always-on search monitoring, authority content, and knowledge panel optimisation.',
      fr: 'Maîtrisez chaque pixel SERP grâce au monitoring continu, aux contenus d’autorité et à l’optimisation du knowledge panel.',
      es: 'Control total del SERP con monitoreo continuo, contenidos de autoridad y optimización del knowledge panel.',
    },
    price: {
      en: 'From $4,900 USD / month',
      fr: 'À partir de 4 900 $ US / mois',
      es: 'Desde 4 900 USD / mes',
    },
    bullets: {
      en: [
        'Always-on search result audits',
        'Content seeding and knowledge panel optimisation',
        'Monthly sentiment dashboards and alerts',
      ],
      fr: [
        'Audit continu des résultats de recherche',
        'Activation de contenus et optimisation du knowledge panel',
        'Tableaux de bord de sentiment et alertes mensuelles',
      ],
      es: [
        'Auditoría continua de resultados de búsqueda',
        'Siembra de contenidos y optimización del knowledge panel',
        'Dashboards de sentimiento y alertas mensuales',
      ],
    },
  },
  {
    key: 'cyber-monitoring',
    accent: 'emerald',
    badge: {
      en: 'Cyber monitoring',
      fr: 'Cyber monitoring',
      es: 'Ciber monitoreo',
    },
    title: {
      en: 'Cybersecurity monitoring',
      fr: 'Monitoring cybersécurité',
      es: 'Monitoreo de ciberseguridad',
    },
    description: {
      en: 'Detect breaches, leaks, and impersonations early with continuous dark web, cloud, and device intelligence.',
      fr: 'Détectez fuites, intrusions et usurpations via une veille continue dark web, cloud et endpoints.',
      es: 'Detecta filtraciones, brechas e impersonaciones con inteligencia continua en dark web, cloud y endpoints.',
    },
    price: {
      en: 'From $7,800 USD / quarter',
      fr: 'À partir de 7 800 $ US / trimestre',
      es: 'Desde 7 800 USD / trimestre',
    },
    bullets: {
      en: [
        'Threat intelligence fused with brand risk scoring',
        'Incident playbooks aligned to SOC workflows',
        'Executive alerts with multilingual escalation',
      ],
      fr: [
        'Veille de menaces couplée à un scoring de risque marque',
        'Playbooks d’incident alignés sur vos workflows SOC',
        'Alertes dirigeants avec escalade multilingue',
      ],
      es: [
        'Inteligencia de amenazas unida a scoring de riesgo de marca',
        'Playbooks de incidentes alineados al SOC',
        'Alertas ejecutivas con escalamiento multilingüe',
      ],
    },
  },
  {
    key: 'design',
    accent: 'amber',
    badge: {
      en: 'Design ops',
      fr: 'Design ops',
      es: 'Design ops',
    },
    title: {
      en: 'Product & web design systems',
      fr: 'Systèmes de design produit & web',
      es: 'Sistemas de diseño digital',
    },
    description: {
      en: 'Prototype, test, and deploy immersive interfaces that translate trust into measurable activation.',
      fr: 'Prototyper, tester et livrer des interfaces immersives qui convertissent la confiance en activation mesurable.',
      es: 'Prototipamos, testeamos y lanzamos interfaces inmersivas que convierten confianza en activación medible.',
    },
    price: {
      en: 'From $5,600 USD',
      fr: 'À partir de 5 600 $ US',
      es: 'Desde 5 600 USD',
    },
    bullets: {
      en: [
        'Research-driven UX audits and journeys',
        'Design systems ready for dev handoff',
        'Motion language and accessibility baked in',
      ],
      fr: [
        'Audits UX et parcours guidés par la recherche',
        'Design systems prêts pour le handoff dev',
        'Langage motion et accessibilité intégrés',
      ],
      es: [
        'Auditorías UX guiadas por research',
        'Design systems listos para handoff dev',
        'Lenguaje de motion y accesibilidad integrados',
      ],
    },
  },
  {
    key: 'web-builds',
    accent: 'blue',
    badge: {
      en: 'Web builds',
      fr: 'Sites web',
      es: 'Sitios web',
    },
    title: {
      en: 'Website development sprints',
      fr: 'Sprints de développement web',
      es: 'Sprints de desarrollo web',
    },
    description: {
      en: 'Ship multilingual, high-performance websites with pricing clarity, modular pages, and analytics baked in.',
      fr: 'Livrez des sites multilingues haute performance avec tarification claire, pages modulaires et analytics intégrés.',
      es: 'Lanza sitios multilingües de alto rendimiento con precios claros, páginas modulares y analytics integrados.',
    },
    price: {
      en: 'From $8,900 USD',
      fr: 'À partir de 8 900 $ US',
      es: 'Desde 8 900 USD',
    },
    bullets: {
      en: [
        'Discovery, copy, and SEO localisation included',
        'Component-based builds in Webflow, Next, or Shopify',
        'Performance budgets with launch QA & training',
      ],
      fr: [
        'Discovery, contenus et SEO localisé inclus',
        'Développements modulaires Webflow, Next ou Shopify',
        'Budgets de performance avec QA de lancement et formation',
      ],
      es: [
        'Discovery, contenidos y SEO localizado incluidos',
        'Construcciones modulares en Webflow, Next o Shopify',
        'Presupuestos de performance con QA de lanzamiento y training',
      ],
    },
  },
]

const homeServicesCopy: Record<
  Language,
  {
    title: string
    description: string
  }
> = {
  en: {
    title: 'Precision programs that protect and accelerate your brand',
    description:
      'We help manage and resolve online data exposure',
  },
  fr: {
    title: 'Des programmes précis pour protéger et accélérer votre marque',
    description:
      'Chaque mission est menée par TraceRemove Advisor avec un pod senior couvrant réputation, sécurité, design et engineering pour lancer avec confiance.',
  },
  es: {
    title: 'Programas precisos que protegen y aceleran tu marca',
    description:
      'Cada colaboración está liderada por TraceRemove Advisor con un pod senior de reputación, seguridad, diseño y tecnología para lanzar con confianza.',
  },
}

const homeHeroHeading: Record<Language, string> = {
  en: 'Monitor and Manage Online Data Exposure',
  fr: 'Des plans de services multilingues conçus pour accélérer votre momentum.',
  es: 'Planos de servicios multilingües diseñados para impulsar tu crecimiento.',
}

const serviceCardCta: Record<Language, string> = {
  en: 'Book this service',
  fr: 'Réserver ce service',
  es: 'Reservar este servicio',
}

const HomePage = () => {
  const currentLanguage = useCurrentLanguage()
  const summaries = languages.map((language) => {
    const count = servicePages.filter((page) => page.language === language).length
    return { language, count }
  })

  const heroCta = navCopy[currentLanguage].callToAction
  const heroHeading = homeHeroHeading[currentLanguage]
  const serviceIntro = homeServicesCopy[currentLanguage]
  const serviceCta = serviceCardCta[currentLanguage]
  const localizedServices = primaryServices.map((service) => ({
    key: service.key,
    accent: service.accent,
    badge: service.badge[currentLanguage],
    title: service.title[currentLanguage],
    description: service.description[currentLanguage],
    price: service.price[currentLanguage],
    bullets: service.bullets[currentLanguage],
    contactHref: `mailto:support@traceremove.com?subject=${encodeURIComponent(service.title[currentLanguage])}`,
  }))

  return (
    <section className="home">
      <div className="home-hero" style={{ position: 'relative' }}>
        <HeroCanvas />
        <div className="home-hero-copy" style={{ position: 'relative', zIndex: 1 }}>
          <h1>{heroHeading}</h1>
          <div
            style={{
              width: '56px',
              height: '2px',
              background: 'var(--gold, #C8A96E)',
              margin: '20px 0',
            }}
          />
          <p>
            Traceremove provides structured tools and managed workflows to identify, monitor, and resolve online data
            exposure — for businesses, executives, and agency partners across North America, Europe, Latin America,
            Asia-Pacific, and Africa.
          </p>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link
              className="button primary"
              to={getContactPath(currentLanguage)}
              style={{ display: 'inline-flex', width: 'auto', padding: '14px 32px' }}
            >
              Request Confidential Assessment →
            </Link>
            <a
              className="button secondary"
              href="/case-studies"
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.5)',
                color: '#ffffff',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer',
                opacity: 1,
              }}
            >
              View Case Studies
            </a>
          </div>
          <div className="trust-strip" style={{ display: 'flex', alignItems: 'center', gap: '0', flexWrap: 'wrap' }}>
            <span><strong>500+</strong> cases resolved</span>
            <span style={{ color: 'rgba(255,255,255,0.25)', margin: '0 8px' }}>·</span>
            <span><strong>98%</strong> success rate</span>
            <span style={{ color: 'rgba(255,255,255,0.25)', margin: '0 8px' }}>·</span>
            <span><strong>30–90 day</strong> results</span>
            <span style={{ color: 'rgba(255,255,255,0.25)', margin: '0 8px' }}>·</span>
            <span><strong>New York, NY</strong></span>
          </div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(200,169,110,0.06)',
              border: '1px solid rgba(200,169,110,0.2)',
              borderRadius: '100px',
              padding: '8px 16px',
              marginTop: '20px',
            }}
          >
            <span style={{ color: '#C8A96E', fontSize: '14px' }}>🔒</span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
              <strong style={{ color: '#C8A96E', fontWeight: 500 }}>Full NDA provided</strong>{' '}at first contact. All assessments are strictly confidential.
            </span>
          </div>
        </div>
      </div>
      <ClientsStrip />
      <PlatformsSection />
      <AgenciesSection />
      <ProcessSection />
      <PricingSection />
      <ROICalculator />
      <ScanSection />
      <CaseStudiesSection />
      <FAQSection />
      <FinalCTA />
      <div>
        <p>{''}</p>
        <p>
          Users access structured tools and managed workflows to identify and resolve data exposure issues.
        </p>
      </div>

      <section className="home-production" aria-labelledby="home-provides-heading">
        <header className="home-production__header">
          <p className="home-production__kicker">What Traceremove Provides</p>
          <h2 id="home-provides-heading">What Traceremove Provides</h2>
        </header>
        <p>Traceremove provides structured digital solutions for managing online data exposure.</p>
        <p>
          Customers access tools and managed workflows to identify, monitor, and resolve data-related risks.
        </p>
      </section>

      <section className="home-production" aria-labelledby="home-how-it-works-heading">
        <header className="home-production__header">
          <p className="home-production__kicker">How it works</p>
          <h2 id="home-how-it-works-heading">How it works</h2>
        </header>
        <div className="home-production__grid">
          <article>
            <h3>1. Identify data exposure</h3>
          </article>
          <article>
            <h3>2. Analyze risk</h3>
          </article>
          <article>
            <h3>3. Resolve through structured workflows</h3>
          </article>
        </div>
      </section>

      <section className="home-production" aria-labelledby="home-pricing-heading">
        <header className="home-production__header">
          <p className="home-production__kicker">Simple pricing</p>
          <h2 id="home-pricing-heading">Simple pricing</h2>
        </header>
        <div className="home-production__grid">
          <article>
            <h3>Starter</h3>
            <p>$99/month</p>
          </article>
          <article>
            <h3>Professional</h3>
            <p>$299/month</p>
          </article>
          <article>
            <h3>Advanced</h3>
            <p>$799/month</p>
          </article>
        </div>
      </section>

      <MomentumTicker variant="light" />

      <section className="home-reputation" aria-labelledby="home-reputation-heading">
        <header>
          <p className="home-reputation__kicker">We help manage and resolve online data exposure</p>
          <h2 id="home-reputation-heading">Simple monitoring and resolution for online data exposure</h2>
        </header>
        <div className="home-reputation__grid">
          <article>
            <h3>Data exposure monitoring</h3>
            <p>We monitor your online data exposure across search, social, and review platforms.</p>
          </article>
          <article>
            <h3>Risk analysis</h3>
            <p>We analyze risk and prioritize what to fix first.</p>
          </article>
          <article>
            <h3>Structured resolution</h3>
            <p>We use structured workflows to resolve issues and track progress.</p>
          </article>
        </div>
      </section>

      <section className="home-production" aria-labelledby="home-production-heading">
        <header className="home-production__header">
          <p className="home-production__kicker">Simple data exposure operations</p>
          <h2 id="home-production-heading">From monitoring to resolution in one structured workflow</h2>
        </header>
        <div className="home-production__grid">
          <article>
            <h3>What we monitor</h3>
            <ul>
              <li>Exposed personal or business data</li>
              <li>Misleading profile and listing content</li>
              <li>High-risk pages affecting trust</li>
            </ul>
          </article>
          <article>
            <h3>How we work</h3>
            <ul>
              <li>Identify and monitor exposure points</li>
              <li>Analyze risk and select the best workflow</li>
              <li>Resolve issues with documented actions and status updates</li>
            </ul>
          </article>
          <article>
            <h3>Client outcomes</h3>
            <ul>
              <li>Clearer visibility into online data exposure</li>
              <li>Faster risk response with ongoing monitoring</li>
              <li>Measurable resolution progress across platforms</li>
            </ul>
          </article>
        </div>
        <div className="home-production__actions">
          <Link className="button primary" to={getContactPath(currentLanguage)}>
            Start analysis
          </Link>
          <Link className="button tertiary" to={getCaseStudiesPath(currentLanguage)}>
            View resolution examples
          </Link>
        </div>
      </section>

      <section className="home-services">
        <header className="home-services__header">
          <h2>{serviceIntro.title}</h2>
          <p>{serviceIntro.description}</p>
        </header>
        <div className="home-services__grid">
          {localizedServices.map((service) => (
            <article key={service.key} className={`home-service-card home-service-card--${service.accent}`}>
              <div className="home-service-card__inner">
                <span className="home-service-card__badge">{service.badge}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p className="home-service-card__price">{service.price}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <a className="button primary" href={service.contactHref}>
                {serviceCta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <div className="home-grid">
        {summaries.map(({ language, count }) => (
          <article key={language} className="home-card">
            <header>
              <h2>{languageLabels[language]}</h2>
              <p>{count} tailored pages</p>
            </header>
            <p>
              Navigate all {languageLabels[language]} services, from positioning and creative systems to lifecycle
              automation. Each page outlines outcomes, investment levels, and the rituals we run with your team.
            </p>
            <Link className="button tertiary" to={navigation[language][0]?.pages[0]?.path ?? '/'}>
              {language === 'en' && 'Explore English services'}
              {language === 'fr' && 'Découvrir les services'}
              {language === 'es' && 'Explorar servicios'}
            </Link>
          </article>
        ))}
      </div>

      <div className="home-panels">
        <article className="home-panel">
          <h3>Immersive launch playbooks</h3>
          <p>
            From narrative strategy to creative operations, every service page details timelines, pricing, and success
            metrics so stakeholders can align instantly.
          </p>
        </article>
        <article className="home-panel">
          <h3>Data-synced revenue ops</h3>
          <p>
            We stitch dashboards, attribution models, and experimentation cadences to activate multi-market growth with
            one unified team.
          </p>
        </article>
        <article className="home-panel">
          <h3>Leadership-level partnership</h3>
          <p>
            You work directly with TraceRemove Advisor and our senior partners—no hand-offs, just outcomes delivered with
            precision.
          </p>
        </article>
      </div>

      <InsightShowcase />

      <div className="home-banner">
        <p>
          {heroCta} — <a href="mailto:support@traceremove.com">support@traceremove.com</a> ·{' '}
          <a href="tel:+16063022958">+1 (472) 248 0235</a>
        </p>
      </div>
    </section>
  )
}

const ServicePageView = ({ page }: { page: ServicePageContent }) => {
  const labels = interfaceCopy[page.language]
  return (
    <article className="service-page">
      <header className="service-hero">
        <div className="service-hero-copy">
          <p className="service-preheading">{page.hero.preheading}</p>
          <h1>{page.hero.heading}</h1>
          <p className="service-subheading">{page.hero.subheading}</p>
          <div className="service-cta-group">
            <a href="#contact" className="button primary">
              {page.hero.primaryCta}
            </a>
            <a href="#case-study" className="button secondary">
              {page.hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="service-hero-visual" aria-hidden="true">
          <GrowthSpark variant="light" size="sm" className="service-hero-graph" />
          <img src="/traceremove-orbit.svg" alt="" loading="lazy" />
        </div>
      </header>

      <section className="service-section">
        <h2>{labels.overview}</h2>
        <div className="service-two-column">
          {page.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="service-section">
        <h2>{labels.highlights}</h2>
        <ul className="service-highlight-list">
          {page.serviceHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="service-section">
        <h2>{labels.packages}</h2>
        <div className="package-grid">
          {page.packages.map((pkg) => (
            <article key={pkg.name} className="package-card">
              <header>
                <h3>{pkg.name}</h3>
                <p className="package-price">{pkg.price}</p>
              </header>
              <p>{pkg.description}</p>
              <ul>
                {pkg.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="service-section">
        <h2>{labels.differentiators}</h2>
        <ul className="service-highlight-list">
          {page.differentiators.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="service-section">
        <h2>{labels.process}</h2>
        <ol className="process-steps">
          {page.process.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="service-section">
        <h2>{labels.metrics}</h2>
        <ul className="metrics-list">
          {page.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </section>

      <section id="case-study" className="service-section">
        <h2>{labels.caseStudy}</h2>
        <article className="case-study">
          <h3>{page.caseStudy.title}</h3>
          <p>{page.caseStudy.summary}</p>
          <p className="case-impact">{page.caseStudy.impact}</p>
        </article>
      </section>

      <section className="service-section">
        <h2>{labels.faq}</h2>
        <dl className="faq-list">
          {page.faq.map((item) => (
            <div key={item.question} className="faq-item">
              <dt>{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact" className="service-section contact-section">
        <h2>{labels.contactHeading}</h2>
        <p>{page.contactPrompt}</p>
        <div className="contact-actions">
          <a className="button primary" href="mailto:support@traceremove.com">
            support@traceremove.com
          </a>
          <a className="button secondary" href="tel:+16063022958">
            +1 (472) 248 0235
          </a>
        </div>
      </section>
    </article>
  )
}

const ServicesPricingPage = () => {
  const language = useCurrentLanguage()
  const copy = servicesPricingCopy[language]
  const tiers = copy.pricing.tiers
  const [activeTierId, setActiveTierId] = useState(tiers[0]?.id ?? '')
  const [incidentCount, setIncidentCount] = useState(copy.roi.inputs.incidents.defaultValue)
  const [retentionRate, setRetentionRate] = useState(copy.roi.inputs.retention.defaultValue)
  const [customerValue, setCustomerValue] = useState(copy.roi.inputs.customerValue.defaultValue)

  useEffect(() => {
    setActiveTierId(copy.pricing.tiers[0]?.id ?? '')
    setIncidentCount(copy.roi.inputs.incidents.defaultValue)
    setRetentionRate(copy.roi.inputs.retention.defaultValue)
    setCustomerValue(copy.roi.inputs.customerValue.defaultValue)
  }, [copy])

  const activeTier = tiers.find((tier) => tier.id === activeTierId) ?? tiers[0]

  const monthlyCustomersProtected = Math.max(
    0,
    Math.round((incidentCount * retentionRate) / 100)
  )
  const monthlyRevenueProtected = Math.max(0, Math.round(monthlyCustomersProtected * customerValue))
  const annualRevenueProtected = monthlyRevenueProtected * 12
  const formattedAnnualImpact = formatCurrency(language, annualRevenueProtected)
  const formattedMonthlyRevenue = formatCurrency(language, monthlyRevenueProtected)
  const summaryText = copy.roi.result.summary.replace('{{value}}', formattedAnnualImpact)

  const handleIncidentsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIncidentCount(Number(event.target.value))
  }

  const handleRetentionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRetentionRate(Number(event.target.value))
  }

  const handleCustomerValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerValue(Number(event.target.value))
  }

  return (
    <article className="services-pricing">
      <header className="services-pricing__hero">
        <div className="services-pricing__hero-copy">
          <span className="services-pricing__eyebrow">{copy.hero.eyebrow}</span>
          <h1>{copy.hero.heading}</h1>
          <p>{copy.hero.body}</p>
          <div className="services-pricing__actions">
            <Link className="button primary" to={getContactPath(language)}>
              {copy.hero.primaryCta}
            </Link>
            <a className="button secondary" href="#services-pricing-pricing">
              {copy.hero.secondaryCta}
            </a>
          </div>
          <p className="services-pricing__note">{copy.hero.note}</p>
        </div>
        <div className="services-pricing__hero-visual" aria-hidden="true">
          <GrowthSpark variant="light" size="lg" className="services-pricing__spark" />
          <span className="services-pricing__glow" />
          <span className="services-pricing__orb services-pricing__orb--one" />
          <span className="services-pricing__orb services-pricing__orb--two" />
        </div>
      </header>

      <MomentumTicker variant="dark" />

      <section className="services-pricing__promise" aria-labelledby="services-pricing-promise">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-promise">{copy.promise.title}</h2>
        </div>
        <div className="services-pricing__promise-body">
          <div>
            {copy.promise.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul>
            {copy.promise.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="services-pricing__pillars" aria-labelledby="services-pricing-pillars">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-pillars">{copy.pillars.title}</h2>
          <p>{copy.pillars.subtitle}</p>
        </div>
        <div className="services-pricing__pillar-grid">
          {copy.pillars.items.map((item, index) => (
            <article
              key={item.title}
              className="services-pricing__pillar-card"
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header>
                <span className="services-pricing__badge">{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
              </header>
              <p>{item.description}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="services-pricing-pricing"
        className="services-pricing__pricing"
        aria-labelledby="services-pricing-pricing-heading"
      >
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-pricing-heading">{copy.pricing.title}</h2>
          <p>{copy.pricing.subtitle}</p>
        </div>
        <div className="services-pricing__tier-tabs" role="tablist" aria-label={copy.pricing.title}>
          {tiers.map((tier) => {
            const isActive = tier.id === activeTier?.id
            return (
              <button
                key={tier.id}
                type="button"
                className={`services-pricing__tier-tab${isActive ? ' is-active' : ''}`}
                onClick={() => setActiveTierId(tier.id)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`services-pricing-tier-${tier.id}`}
                id={`services-pricing-tab-${tier.id}`}
              >
                <span className="services-pricing__tier-name">{tier.name}</span>
                <span className="services-pricing__tier-price">{tier.price}</span>
                <span className="services-pricing__tier-cadence">{tier.cadence}</span>
              </button>
            )
          })}
        </div>
        {activeTier ? (
          <article
            id={`services-pricing-tier-${activeTier.id}`}
            role="tabpanel"
            aria-labelledby={`services-pricing-tab-${activeTier.id}`}
            className="services-pricing__tier-card"
          >
            <header>
              <h3>{activeTier.name}</h3>
              <p className="services-pricing__tier-highlight">{activeTier.highlight}</p>
              <p className="services-pricing__tier-description">{activeTier.description}</p>
            </header>
            <ul className="services-pricing__tier-features">
              {activeTier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="services-pricing__tier-actions">
              <Link className="button primary" to={getContactPath(language)}>
                {copy.hero.primaryCta}
              </Link>
              <a className="button ghost" href="mailto:support@traceremove.com">
                support@traceremove.com
              </a>
            </div>
          </article>
        ) : null}
        <p className="services-pricing__footnote">{copy.pricing.note}</p>
      </section>

      <section className="services-pricing__comparison" aria-labelledby="services-pricing-comparison">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-comparison">{copy.comparison.title}</h2>
          <p>{copy.comparison.subtitle}</p>
        </div>
        <div className="services-pricing__comparison-table" role="table">
          <div className="services-pricing__comparison-head" role="row">
            <span role="columnheader" className="services-pricing__comparison-label">
              {copy.comparison.criteriaLabel}
            </span>
            <span role="columnheader">{copy.comparison.columns.traceremove}</span>
            <span role="columnheader">{copy.comparison.columns.traditional}</span>
          </div>
          {copy.comparison.rows.map((row, index) => (
            <div
              key={row.label}
              className="services-pricing__comparison-row"
              role="row"
              style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
            >
              <span role="rowheader">{row.label}</span>
              <span>{row.traceremove}</span>
              <span>{row.traditional}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="services-pricing__addons" aria-labelledby="services-pricing-addons">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-addons">{copy.addOns.title}</h2>
          <p>{copy.addOns.subtitle}</p>
        </div>
        <div className="services-pricing__addon-grid">
          {copy.addOns.items.map((item, index) => (
            <article
              key={item.name}
              className="services-pricing__addon-card"
              style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
            >
              <header>
                <h3>{item.name}</h3>
                <span className="services-pricing__addon-price">{item.price}</span>
              </header>
              <p>{item.description}</p>
              <ul>
                {item.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__deliverables" aria-labelledby="services-pricing-deliverables">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-deliverables">{copy.deliverables.title}</h2>
          <p>{copy.deliverables.subtitle}</p>
        </div>
        <div className="services-pricing__deliverable-grid">
          {copy.deliverables.items.map((item, index) => (
            <article
              key={item.title}
              className="services-pricing__deliverable-card"
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header>
                <h3>{item.title}</h3>
                <span>{item.cadence}</span>
              </header>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__workflow" aria-labelledby="services-pricing-workflow">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-workflow">{copy.workflow.title}</h2>
          <p>{copy.workflow.subtitle}</p>
        </div>
        <ol className="services-pricing__workflow-list">
          {copy.workflow.steps.map((step, index) => (
            <li key={step.title} className="services-pricing__workflow-step">
              <div className="services-pricing__workflow-marker" aria-hidden="true">
                <span>{index + 1}</span>
                {index !== copy.workflow.steps.length - 1 && <span className="services-pricing__workflow-line" />}
              </div>
              <div className="services-pricing__workflow-content">
                <header>
                  <h3>{step.title}</h3>
                  <span>{step.duration}</span>
                </header>
                <p>{step.description}</p>
                <ul>
                  {step.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="services-pricing__timeline" aria-labelledby="services-pricing-timeline">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-timeline">{copy.timeline.title}</h2>
          <p>{copy.timeline.subtitle}</p>
        </div>
        <ol className="services-pricing__timeline-grid">
          {copy.timeline.phases.map((phase, index) => (
            <li
              key={phase.title}
              className="services-pricing__timeline-card"
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header>
                <span className="services-pricing__badge">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{phase.title}</h3>
                  <span>{phase.duration}</span>
                </div>
              </header>
              <p>{phase.description}</p>
              <ul>
                {phase.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="services-pricing__assurance" aria-labelledby="services-pricing-assurance">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-assurance">{copy.assurance.title}</h2>
          <p>{copy.assurance.subtitle}</p>
        </div>
        <div className="services-pricing__assurance-grid">
          <div className="services-pricing__metrics">
            {copy.assurance.metrics.map((metric) => (
              <div key={metric.label} className="services-pricing__metric">
                <span className="services-pricing__metric-value">{metric.value}</span>
                <span className="services-pricing__metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="services-pricing__testimonials">
            {copy.assurance.testimonials.map((testimonial) => (
              <figure key={testimonial.quote} className="services-pricing__testimonial">
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <span className="services-pricing__testimonial-author">{testimonial.author}</span>
                  <span className="services-pricing__testimonial-role">{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="services-pricing__compliance" aria-labelledby="services-pricing-compliance">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-compliance">{copy.compliance.title}</h2>
          <p>{copy.compliance.subtitle}</p>
        </div>
        <div className="services-pricing__compliance-grid">
          {copy.compliance.frameworks.map((framework, index) => (
            <article
              key={framework.id}
              className="services-pricing__compliance-card"
              style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
            >
              <header>
                <span className="services-pricing__compliance-eyebrow">{framework.framework}</span>
                <h3>{framework.name}</h3>
              </header>
              <p>{framework.coverage}</p>
              <footer>
                <span className="services-pricing__compliance-renewal">{framework.renewal}</span>
                <span className="services-pricing__compliance-evidence">{framework.evidence}</span>
              </footer>
            </article>
          ))}
        </div>
        <ul className="services-pricing__compliance-badges">
          {copy.compliance.badges.map((badge, index) => (
            <li
              key={badge.label}
              className="services-pricing__compliance-badge"
              style={{ animationDelay: `${index * 0.06}s` } as CSSProperties}
            >
              <span>{badge.label}</span>
              <p>{badge.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="services-pricing__governance" aria-labelledby="services-pricing-governance">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-governance">{copy.governance.title}</h2>
          <p>{copy.governance.subtitle}</p>
        </div>
        <div className="services-pricing__governance-grid">
          {copy.governance.protocols.map((protocol, index) => (
            <article
              key={protocol.title}
              className="services-pricing__governance-card"
              style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
            >
              <header>
                <h3>{protocol.title}</h3>
                <p>{protocol.description}</p>
              </header>
              <ul>
                {protocol.safeguards.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__guarantees" aria-labelledby="services-pricing-guarantees">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-guarantees">{copy.guarantees.title}</h2>
          <p>{copy.guarantees.subtitle}</p>
        </div>
        <div className="services-pricing__guarantee-grid">
          {copy.guarantees.items.map((item, index) => (
            <article
              key={item.title}
              className="services-pricing__guarantee-card"
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__support" aria-labelledby="services-pricing-support">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-support">{copy.support.title}</h2>
          <p>{copy.support.subtitle}</p>
        </div>
        <div className="services-pricing__support-grid">
          {copy.support.channels.map((channel, index) => (
            <article
              key={channel.name}
              className="services-pricing__support-card"
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header>
                <h3>{channel.name}</h3>
                <span>{channel.availability}</span>
              </header>
              <p>{channel.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__slas" aria-labelledby="services-pricing-slas">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-slas">{copy.slas.title}</h2>
          <p>{copy.slas.subtitle}</p>
        </div>
        <div className="services-pricing__sla-grid">
          {copy.slas.commitments.map((commitment, index) => (
            <article
              key={commitment.title}
              className="services-pricing__sla-card"
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header>
                <h3>{commitment.title}</h3>
                <span>{commitment.target}</span>
              </header>
              <p>{commitment.description}</p>
              <footer>
                <span>{commitment.coverage}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__reporting" aria-labelledby="services-pricing-reporting">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-reporting">{copy.reporting.title}</h2>
          <p>{copy.reporting.subtitle}</p>
        </div>
        <div className="services-pricing__reporting-grid">
          {copy.reporting.rhythms.map((rhythm, index) => (
            <article
              key={rhythm.title}
              className="services-pricing__reporting-card"
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header>
                <span>{rhythm.cadence}</span>
                <h3>{rhythm.title}</h3>
              </header>
              <p>{rhythm.description}</p>
              <ul>
                {rhythm.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__industries" aria-labelledby="services-pricing-industries">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-industries">{copy.industries.title}</h2>
          <p>{copy.industries.subtitle}</p>
        </div>
        <div className="services-pricing__industry-grid">
          {copy.industries.sectors.map((sector, index) => (
            <article
              key={sector.id}
              className="services-pricing__industry-card"
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header>
                <span className="services-pricing__badge">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{sector.name}</h3>
                  <p>{sector.challenge}</p>
                </div>
              </header>
              <p className="services-pricing__industry-approach">{sector.approach}</p>
              <dl>
                <div>
                  <dt>{sector.metric}</dt>
                  <dd>{sector.proof}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section
        className="services-pricing__transformations"
        aria-labelledby="services-pricing-transformations"
      >
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-transformations">{copy.transformations.title}</h2>
          <p>{copy.transformations.subtitle}</p>
        </div>
        <div className="services-pricing__transformation-grid">
          {copy.transformations.stories.map((story, index) => (
            <article
              key={story.id}
              className="services-pricing__transformation-card"
              style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
            >
              <header>
                <div className="services-pricing__transformation-meta">
                  <span>{story.sector}</span>
                  <strong>{story.client}</strong>
                </div>
                <h3>{story.title}</h3>
              </header>
              <p className="services-pricing__transformation-challenge">{story.challenge}</p>
              <ul>
                {story.interventions.map((intervention) => (
                  <li key={intervention}>{intervention}</li>
                ))}
              </ul>
              <p className="services-pricing__transformation-outcome">{story.outcome}</p>
              <blockquote>
                <p>{story.quote}</p>
                <cite>{story.speaker}</cite>
              </blockquote>
              <div className="services-pricing__transformation-visual" aria-hidden="true">
                <GrowthSpark variant={index % 2 === 0 ? 'light' : 'dark'} size="sm" />
                <span className="services-pricing__transformation-orb" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__operations" aria-labelledby="services-pricing-operations">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-operations">{copy.operations.title}</h2>
          <p>{copy.operations.subtitle}</p>
        </div>
        <div className="services-pricing__operations-layout">
          <div className="services-pricing__operations-grid">
            {copy.operations.cadences.map((cadence, index) => (
              <article
                key={cadence.title}
                className="services-pricing__operations-card"
                style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
              >
                <header>
                  <h3>{cadence.title}</h3>
                  <span>{cadence.duration}</span>
                </header>
                <p>{cadence.focus}</p>
                <div className="services-pricing__operations-meta">
                  <strong>{copy.hero.eyebrow}</strong>
                  <ul>
                    {cadence.attendees.map((attendee) => (
                      <li key={attendee}>{attendee}</li>
                    ))}
                  </ul>
                </div>
                <ul>
                  {cadence.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <aside className="services-pricing__operations-signals">
            {copy.operations.signals.map((signal, index) => (
              <article
                key={signal.label}
                className="services-pricing__operations-signal"
                style={{ animationDelay: `${0.12 + index * 0.08}s` } as CSSProperties}
              >
                <header>
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </header>
                <p>{signal.description}</p>
              </article>
            ))}
            <div className="services-pricing__operations-visual" aria-hidden="true">
              <GrowthSpark variant="dark" size="sm" />
              <span className="services-pricing__operations-orb" />
            </div>
          </aside>
        </div>
      </section>

      <section className="services-pricing__resilience" aria-labelledby="services-pricing-resilience">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-resilience">{copy.resilience.title}</h2>
          <p>{copy.resilience.subtitle}</p>
        </div>
        <div className="services-pricing__resilience-layout">
          <div className="services-pricing__resilience-grid">
            {copy.resilience.drills.map((drill, index) => (
              <article
                key={drill.title}
                className="services-pricing__resilience-card"
                style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
              >
                <header>
                  <div>
                    <h3>{drill.title}</h3>
                    <span>{drill.cadence}</span>
                  </div>
                  <p>{drill.scenario}</p>
                </header>
                <ul>
                  {drill.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <aside className="services-pricing__resilience-aside">
            <div className="services-pricing__resilience-signals">
              {copy.resilience.signals.map((signal, index) => (
                <article
                  key={signal.label}
                  className="services-pricing__resilience-signal"
                  style={{ animationDelay: `${0.16 + index * 0.08}s` } as CSSProperties}
                >
                  <header>
                    <span>{signal.label}</span>
                    <strong>{signal.value}</strong>
                  </header>
                  <p>{signal.description}</p>
                </article>
              ))}
            </div>
            <div className="services-pricing__resilience-cta">
              <p>{copy.resilience.cta.description}</p>
              <Link className="button tertiary" to={getContactPath(language)}>
                {copy.resilience.cta.label}
              </Link>
            </div>
            <div className="services-pricing__resilience-visual" aria-hidden="true">
              <GrowthSpark variant="dark" size="sm" />
              <span className="services-pricing__resilience-orb" />
            </div>
          </aside>
        </div>
      </section>

      <section className="services-pricing__executive" aria-labelledby="services-pricing-executive">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-executive">{copy.executive.title}</h2>
          <p>{copy.executive.subtitle}</p>
        </div>
        <div className="services-pricing__executive-layout">
          <div className="services-pricing__executive-briefings">
            {copy.executive.briefings.map((briefing, index) => (
              <article
                key={briefing.title}
                className="services-pricing__executive-card"
                style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
              >
                <header>
                  <h3>{briefing.title}</h3>
                  <span>{briefing.cadence}</span>
                </header>
                <p>{briefing.description}</p>
                <ul>
                  {briefing.takeaways.map((takeaway) => (
                    <li key={takeaway}>{takeaway}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <aside className="services-pricing__executive-aside">
            <div className="services-pricing__executive-indicators">
              {copy.executive.indicators.map((indicator, index) => (
                <article
                  key={indicator.label}
                  className="services-pricing__executive-indicator"
                  style={{ animationDelay: `${0.12 + index * 0.08}s` } as CSSProperties}
                >
                  <header>
                    <span>{indicator.label}</span>
                    <strong>{indicator.value}</strong>
                  </header>
                  <p>{indicator.context}</p>
                </article>
              ))}
            </div>
            <div className="services-pricing__executive-cta">
              <p>{copy.executive.cta.description}</p>
              <Link className="button primary" to={getContactPath(language)}>
                {copy.executive.cta.label}
              </Link>
            </div>
            <div className="services-pricing__executive-visual" aria-hidden="true">
              <GrowthSpark variant="light" size="sm" />
              <span className="services-pricing__executive-orb" />
            </div>
          </aside>
        </div>
      </section>

      <section className="services-pricing__concierge" aria-labelledby="services-pricing-concierge">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-concierge">{copy.concierge.title}</h2>
          <p>{copy.concierge.subtitle}</p>
        </div>
        <div className="services-pricing__concierge-grid">
          {copy.concierge.touchpoints.map((touchpoint, index) => (
            <article
              key={touchpoint.title}
              className="services-pricing__concierge-card"
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header>
                <h3>{touchpoint.title}</h3>
                <span>{touchpoint.availability}</span>
              </header>
              <p>{touchpoint.description}</p>
              <footer>
                <span>{touchpoint.channel}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__procurement" aria-labelledby="services-pricing-procurement">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-procurement">{copy.procurement.title}</h2>
          <p>{copy.procurement.subtitle}</p>
        </div>
        <div className="services-pricing__procurement-grid">
          {copy.procurement.artifacts.map((artifact, index) => (
            <article
              key={artifact.title}
              className="services-pricing__procurement-card"
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header>
                <span className="services-pricing__procurement-format">{artifact.format}</span>
                <h3>{artifact.title}</h3>
              </header>
              <p>{artifact.description}</p>
              <footer>
                <span className="services-pricing__procurement-availability">{artifact.availability}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__enablement" aria-labelledby="services-pricing-enablement">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-enablement">{copy.enablement.title}</h2>
          <p>{copy.enablement.subtitle}</p>
        </div>
        <div className="services-pricing__enablement-grid">
          {copy.enablement.streams.map((stream, index) => (
            <article
              key={stream.title}
              className="services-pricing__enablement-card"
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header>
                <h3>{stream.title}</h3>
                <span>{stream.rhythm}</span>
              </header>
              <p>{stream.description}</p>
              <ul>
                {stream.assets.map((asset) => (
                  <li key={asset}>{asset}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__platform" aria-labelledby="services-pricing-platform">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-platform">{copy.platform.title}</h2>
          <p>{copy.platform.subtitle}</p>
        </div>
        <div className="services-pricing__platform-grid">
          {copy.platform.capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className="services-pricing__platform-card"
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header>
                <span className="services-pricing__badge">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
              </header>
              <ul>
                {capability.signals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__playbooks" aria-labelledby="services-pricing-playbooks">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-playbooks">{copy.playbooks.title}</h2>
          <p>{copy.playbooks.subtitle}</p>
        </div>
        <div className="services-pricing__playbooks-grid">
          {copy.playbooks.items.map((playbook, index) => (
            <article
              key={playbook.title}
              className="services-pricing__playbook-card"
              style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
            >
              <header>
                <span className="services-pricing__playbook-response">{playbook.responseTime}</span>
                <h3>{playbook.title}</h3>
                <p>{playbook.description}</p>
              </header>
              <ol>
                {playbook.stages.map((stage) => (
                  <li key={stage}>{stage}</li>
                ))}
              </ol>
              <footer>
                <span>{playbook.outcome}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__integrations" aria-labelledby="services-pricing-integrations">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-integrations">{copy.integrations.title}</h2>
          <p>{copy.integrations.subtitle}</p>
        </div>
        <div className="services-pricing__integration-grid">
          {copy.integrations.partners.map((partner, index) => (
            <article
              key={partner.name}
              className="services-pricing__integration-card"
              style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
            >
              <header>
                <span className="services-pricing__integration-category">{partner.category}</span>
                <h3>{partner.name}</h3>
              </header>
              <p>{partner.description}</p>
              <footer>
                <span className="services-pricing__integration-coverage">{partner.coverage}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__roi" aria-labelledby="services-pricing-roi">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-roi">{copy.roi.title}</h2>
          <p>{copy.roi.subtitle}</p>
        </div>
        <div className="services-pricing__roi-grid">
          <form
            className="services-pricing__roi-calculator"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="services-pricing__roi-field">
              <label htmlFor="services-pricing-incidents">
                <span>{copy.roi.inputs.incidents.label}</span>
                <small>{copy.roi.inputs.incidents.help}</small>
              </label>
              <div className="services-pricing__roi-control">
                <input
                  id="services-pricing-incidents"
                  type="range"
                  min={copy.roi.inputs.incidents.min}
                  max={copy.roi.inputs.incidents.max}
                  step={copy.roi.inputs.incidents.step}
                  value={incidentCount}
                  onChange={handleIncidentsChange}
                />
                <span className="services-pricing__roi-value">
                  {formatNumber(language, incidentCount)}
                  {copy.roi.inputs.incidents.suffix ? ` ${copy.roi.inputs.incidents.suffix}` : ''}
                </span>
              </div>
            </div>

            <div className="services-pricing__roi-field">
              <label htmlFor="services-pricing-retention">
                <span>{copy.roi.inputs.retention.label}</span>
                <small>{copy.roi.inputs.retention.help}</small>
              </label>
              <div className="services-pricing__roi-control">
                <input
                  id="services-pricing-retention"
                  type="range"
                  min={copy.roi.inputs.retention.min}
                  max={copy.roi.inputs.retention.max}
                  step={copy.roi.inputs.retention.step}
                  value={retentionRate}
                  onChange={handleRetentionChange}
                />
                <span className="services-pricing__roi-value">
                  {formatNumber(language, retentionRate)}
                  {copy.roi.inputs.retention.suffix ? ` ${copy.roi.inputs.retention.suffix}` : ''}
                </span>
              </div>
            </div>

            <div className="services-pricing__roi-field">
              <label htmlFor="services-pricing-customer-value">
                <span>{copy.roi.inputs.customerValue.label}</span>
                <small>{copy.roi.inputs.customerValue.help}</small>
              </label>
              <div className="services-pricing__roi-control">
                <input
                  id="services-pricing-customer-value"
                  type="range"
                  min={copy.roi.inputs.customerValue.min}
                  max={copy.roi.inputs.customerValue.max}
                  step={copy.roi.inputs.customerValue.step}
                  value={customerValue}
                  onChange={handleCustomerValueChange}
                />
                <span className="services-pricing__roi-value">
                  {formatCurrency(language, customerValue)}
                </span>
              </div>
            </div>
          </form>

          <aside className="services-pricing__roi-result">
            <header>
              <h3>{copy.roi.result.headline}</h3>
              <p className="services-pricing__roi-impact-label">{copy.roi.result.label}</p>
              <p className="services-pricing__roi-impact-value">{formattedAnnualImpact}</p>
            </header>
            <p>{summaryText}</p>
            <dl className="services-pricing__roi-metrics">
              <div>
                <dt>{copy.roi.result.monthlyLabel}</dt>
                <dd>{formattedMonthlyRevenue}</dd>
              </div>
              <div>
                <dt>{copy.roi.result.customersLabel}</dt>
                <dd>{formatNumber(language, monthlyCustomersProtected)}</dd>
              </div>
            </dl>
            <Link className="button primary" to={getContactPath(language)}>
              {copy.cta.primary}
            </Link>
          </aside>
        </div>
        <p className="services-pricing__roi-note">{copy.roi.assumption}</p>
        <div className="services-pricing__roi-scenarios">
          {copy.roi.scenarios.map((scenario, index) => (
            <article
              key={scenario.title}
              className="services-pricing__roi-card"
              style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
            >
              <header>
                <h3>{scenario.title}</h3>
                <p className="services-pricing__roi-loss">{scenario.loss}</p>
                <p className="services-pricing__roi-improvement">{scenario.improvement}</p>
              </header>
              <p>{scenario.description}</p>
              <ul>
                {scenario.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="services-pricing__faq" aria-labelledby="services-pricing-faq">
        <div className="services-pricing__section-header">
          <h2 id="services-pricing-faq">{copy.faqs.title}</h2>
        </div>
        <dl className="services-pricing__faq-list">
          {copy.faqs.items.map((item) => (
            <div key={item.question} className="services-pricing__faq-item">
              <dt>{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="services-pricing__cta" aria-labelledby="services-pricing-cta">
        <div>
          <h2 id="services-pricing-cta">{copy.cta.title}</h2>
          <p>{copy.cta.body}</p>
        </div>
        <div className="services-pricing__cta-actions">
          <Link className="button primary" to={getContactPath(language)}>
            {copy.cta.primary}
          </Link>
          <a className="button ghost" href="mailto:support@traceremove.com">
            {copy.cta.secondary}
          </a>
        </div>
      </section>
    </article>
  )
}

const TeamPage = () => {
  const language = useCurrentLanguage()
  const copy = teamCopy[language]

  return (
    <article className="team-page">
      <header className="team-hero">
        <div className="team-hero-copy">
          <p className="team-preheading">Traceremove</p>
          <h1>{copy.title}</h1>
          <p className="team-subheading">{copy.subtitle}</p>
          <p>{copy.intro}</p>
        </div>
        <div className="team-hero-visual" aria-hidden="true">
          <GrowthSpark variant="light" size="md" className="team-hero-graph" />
          <img src="/traceremove-orbit.svg" alt="" loading="lazy" />
        </div>
      </header>

      <section className="team-grid">
        {teamMembers.map((member) => (
          <article key={member.name} className="team-card">
            <div className="team-card-visual" style={{ background: member.color }} aria-hidden="true">
              <span>{member.name[0]}</span>
            </div>
            <div className="team-card-body">
              <header>
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-location">{member.location}</p>
              </header>
              <p>{member.bio[language]}</p>
              <ul>
                {member.focus[language].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="team-culture">
        <h2>{copy.cultureHeading}</h2>
        <ul>
          {copy.culturePoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="team-contact">
          <p>{copy.contactPrompt}</p>
          <div className="team-contact-actions">
            <a className="button primary" href="mailto:support@traceremove.com">
              support@traceremove.com
            </a>
            <a className="button secondary" href="tel:+16063022958">
              +1 (472) 248 0235
            </a>
          </div>
        </div>
      </section>
    </article>
  )
}

const TrustCenterPage = () => {
  const language = useCurrentLanguage()
  const copy = trustCenterCopy[language]

  return (
    <article className="trust-page">
      <header className="trust-hero">
        <div className="trust-hero__copy">
          <p className="trust-hero__kicker">{copy.hero.kicker}</p>
          <h1>{copy.hero.title}</h1>
          <p className="trust-hero__subtitle">{copy.hero.subtitle}</p>
          <p>{copy.hero.body}</p>
          <div className="trust-hero__actions">
            <Link className="button primary" to={getContactPath(language)}>
              {copy.hero.primaryCta}
            </Link>
            <Link className="button tertiary" to={getResourcesPath(language)}>
              {copy.hero.secondaryCta}
            </Link>
          </div>
          <ul className="trust-hero__highlights">
            {copy.highlights.map((item, index) => (
              <li key={item} data-index={index}>
                <span aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="trust-hero__visual" aria-hidden="true">
          <span className="trust-hero__halo" />
          <GrowthSpark variant="light" size="lg" className="trust-hero__spark" />
        </div>
      </header>

      <MomentumTicker variant="light" />

      <section className="trust-signals" aria-labelledby="trust-signals-heading">
        <div className="trust-section__header">
          <h2 id="trust-signals-heading">{copy.signalsTitle}</h2>
        </div>
        <div className="trust-signals__grid">
          {copy.signals.map((signal, index) => (
            <article key={signal.label} className="trust-signal" data-index={index}>
              <span className="trust-signal__value">{signal.value}</span>
              <h3>{signal.label}</h3>
              <p>{signal.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-pillars" aria-labelledby="trust-pillars-heading">
        <div className="trust-section__header">
          <div>
            <h2 id="trust-pillars-heading">{copy.pillarsTitle}</h2>
            <p>{copy.pillarsSubtitle}</p>
          </div>
        </div>
        <div className="trust-pillars__grid">
          {copy.pillars.map((pillar, index) => (
            <article key={pillar.id} className="trust-pillar" data-index={index}>
              <p className="trust-pillar__eyebrow">{pillar.eyebrow}</p>
              <h3>{pillar.title}</h3>
              <p className="trust-pillar__description">{pillar.description}</p>
              <ul>
                {pillar.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <span className="trust-pillar__glow" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="trust-frameworks" aria-labelledby="trust-frameworks-heading">
        <div className="trust-section__header">
          <div>
            <h2 id="trust-frameworks-heading">{copy.frameworksTitle}</h2>
            <p>{copy.frameworksSubtitle}</p>
          </div>
        </div>
        <div className="trust-frameworks__list">
          {copy.frameworks.map((framework, index) => (
            <article key={framework.id} className="trust-framework" data-index={index}>
              <div className="trust-framework__heading">
                <h3>{framework.title}</h3>
                <p>{framework.summary}</p>
              </div>
              <div className="trust-framework__meta">
                <p>{framework.certification}</p>
                <p>{framework.renewal}</p>
              </div>
              <span className="trust-framework__spark" aria-hidden="true">
                <GrowthSpark variant={index % 2 === 0 ? 'light' : 'dark'} size="sm" />
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-streams" aria-labelledby="trust-streams-heading">
        <div className="trust-section__header">
          <div>
            <h2 id="trust-streams-heading">{copy.streamsTitle}</h2>
            <p>{copy.streamsSubtitle}</p>
          </div>
        </div>
        <div className="trust-streams__grid">
          {copy.streams.map((stream, index) => (
            <article key={stream.id} className="trust-stream" data-index={index}>
              <header>
                <p className="trust-stream__eyebrow">{index + 1}</p>
                <h3>{stream.title}</h3>
                <p>{stream.description}</p>
              </header>
              <ul>
                {stream.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-contact" aria-labelledby="trust-contact-heading">
        <div className="trust-contact__copy">
          <h2 id="trust-contact-heading">{copy.contact.title}</h2>
          <p>{copy.contact.subtitle}</p>
          <p className="trust-contact__phone">{copy.contact.phone}</p>
          <p className="trust-contact__hours">{copy.contact.hours}</p>
        </div>
        <div className="trust-contact__actions">
          {copy.contact.actions.map((action) => (
            <a key={action.label} className="button secondary" href={action.href}>
              {action.label}
            </a>
          ))}
        </div>
      </section>
    </article>
  )
}

const CaseStudiesPage = () => {
  const language = useCurrentLanguage()
  const copy = caseStudiesCopy[language]

  return (
    <article className="case-page">
      <header className="case-hero">
        <div className="case-hero__copy">
          <p className="case-hero__kicker">{copy.hero.kicker}</p>
          <h1>{copy.hero.title}</h1>
          <p className="case-hero__subtitle">{copy.hero.subtitle}</p>
          <p>{copy.hero.body}</p>
          <div className="case-hero__actions">
            <Link className="button primary" to={getContactPath(language)}>
              {copy.hero.primaryCta}
            </Link>
            <Link className="button secondary" to={getBlogBasePath(language)}>
              {copy.hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="case-hero__visual" aria-hidden="true">
          <GrowthSpark variant="light" size="lg" className="case-hero__spark" />
          <span className="case-hero__halo" />
        </div>
      </header>

      <MomentumTicker variant="light" />

      <section className="case-stats" aria-labelledby="case-stats-heading">
        <div className="case-section__header">
          <h2 id="case-stats-heading">{copy.statsHeading}</h2>
        </div>
        <div className="case-stats__grid">
          {copy.stats.map((stat, index) => (
            <article key={stat.label} className="case-stat" data-index={index}>
              <span className="case-stat__value">{stat.value}</span>
              <span className="case-stat__label">{stat.label}</span>
              <p>{stat.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-stories" aria-labelledby="case-stories-heading">
        <div className="case-section__header">
          <div>
            <h2 id="case-stories-heading">{copy.storiesHeading}</h2>
            <p>{copy.storiesSubtitle}</p>
          </div>
        </div>
        <div className="case-stories__grid">
          {copy.stories.map((story, index) => (
            <article key={story.title} className="case-card" data-index={index}>
              <div className="case-card__visual" aria-hidden="true">
                <GrowthSpark variant={index % 2 === 0 ? 'light' : 'dark'} size="sm" />
                <span>{story.visual}</span>
              </div>
              <div className="case-card__body">
                <p className="case-card__industry">{story.industry}</p>
                <h3>{story.title}</h3>
                <p className="case-card__summary">{story.summary}</p>
                <dl className="case-card__details">
                  <div>
                    <dt>{copy.storyLabels.challenge}</dt>
                    <dd>{story.challenge}</dd>
                  </div>
                  <div>
                    <dt>{copy.storyLabels.approach}</dt>
                    <dd>{story.approach}</dd>
                  </div>
                  <div>
                    <dt>{copy.storyLabels.impact}</dt>
                    <dd>{story.impact}</dd>
                  </div>
                </dl>
                <ul className="case-card__metrics" aria-label={copy.storyLabels.metrics}>
                  {story.metrics.map((metric) => (
                    <li key={`${story.title}-${metric.label}`}>
                      <span className="case-card__metric-value">{metric.value}</span>
                      <span className="case-card__metric-label">{metric.label}</span>
                    </li>
                  ))}
                </ul>
                <blockquote className="case-card__testimonial">
                  <p>{story.testimonial.quote}</p>
                  <cite>{story.testimonial.attribution}</cite>
                  <span className="case-card__testimonial-label">{copy.storyLabels.testimonial}</span>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-method" aria-labelledby="case-method-heading">
        <div className="case-section__header">
          <div>
            <h2 id="case-method-heading">{copy.methodology.heading}</h2>
            <p>{copy.methodology.summary}</p>
          </div>
        </div>
        <ol className="case-method__steps">
          {copy.methodology.steps.map((step, index) => (
            <li key={step.title} className="case-method__step" data-index={index}>
              <span className="case-method__number">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <InsightShowcase variant="case" />

      <section className="case-cta">
        <div>
          <h2>{copy.cta.heading}</h2>
          <p>{copy.cta.body}</p>
        </div>
        <div className="case-cta__actions">
          <Link className="button primary" to={getContactPath(language)}>
            {copy.cta.primary}
          </Link>
          <Link className="button ghost" to={getPartnersPath(language)}>
            {copy.cta.secondary}
          </Link>
        </div>
      </section>
    </article>
  )
}

const CommandCenterPage = () => {
  const language = useCurrentLanguage()
  const copy = commandCenterCopy[language]
  const heroSecondaryIsExternal =
    copy.hero.secondaryHref.startsWith('http') || copy.hero.secondaryHref.startsWith('mailto:')

  return (
    <article className="command-page">
      <header className="command-hero">
        <div className="command-hero__copy">
          <p className="command-hero__eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="command-hero__subtitle">{copy.hero.subtitle}</p>
          <p>{copy.hero.description}</p>
          <div className="command-hero__actions">
            <Link className="button primary" to={getContactPath(language)}>
              {copy.hero.primaryCta}
            </Link>
            {heroSecondaryIsExternal ? (
              <a className="button secondary" href={copy.hero.secondaryHref}>
                {copy.hero.secondaryCta}
              </a>
            ) : (
              <Link className="button secondary" to={copy.hero.secondaryHref}>
                {copy.hero.secondaryCta}
              </Link>
            )}
          </div>
        </div>
        <div className="command-hero__visual">
          <GrowthSpark
            variant="light"
            size="lg"
            className="command-hero__spark"
            ariaLabel={copy.hero.visualCaption}
          />
          <p className="command-hero__caption">{copy.hero.visualCaption}</p>
          <ul className="command-hero__metrics">
            {copy.hero.metrics.map((metric, index) => (
              <li
                key={metric.label}
                className="command-hero__metric"
                style={{ animationDelay: `${index * 0.12}s` } as CSSProperties}
              >
                <span className="command-hero__metric-value">{metric.value}</span>
                <span className="command-hero__metric-label">{metric.label}</span>
                <p>{metric.annotation}</p>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <MomentumTicker variant="light" />

      <section className="command-coverage" aria-labelledby="command-coverage-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-coverage-heading">{copy.coverage.title}</h2>
            <p>{copy.coverage.description}</p>
          </div>
        </div>
        <div className="command-coverage__grid">
          {copy.coverage.regions.map((region, index) => (
            <article
              key={region.id}
              className="command-coverage__card"
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <span className="command-coverage__spark" aria-hidden="true">
                <GrowthSpark variant={index % 2 === 0 ? 'dark' : 'light'} size="sm" />
              </span>
              <header className="command-coverage__header">
                <span className="command-coverage__badge">{region.availability}</span>
                <span className="command-coverage__lead">{region.lead}</span>
              </header>
              <h3>{region.name}</h3>
              <ul className="command-coverage__list">
                {region.specialties.map((specialty) => (
                  <li key={specialty}>{specialty}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="command-monitoring" aria-labelledby="command-monitoring-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-monitoring-heading">{copy.monitoring.title}</h2>
            <p>{copy.monitoring.description}</p>
          </div>
        </div>
        <div className="command-monitoring__grid">
          {copy.monitoring.signals.map((signal, index) => (
            <article
              key={signal.id}
              className="command-monitoring__card"
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <span className="command-monitoring__icon" aria-hidden="true">
                <GrowthSpark variant={index % 2 === 0 ? 'light' : 'dark'} size="sm" />
              </span>
              <h3>{signal.label}</h3>
              <p>{signal.detail}</p>
              <p className="command-monitoring__metric">{signal.metric}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="command-workflows" aria-labelledby="command-workflows-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-workflows-heading">{copy.workflows.title}</h2>
            <p>{copy.workflows.description}</p>
          </div>
        </div>
        <ol className="command-workflows__steps">
          {copy.workflows.steps.map((step, index) => (
            <li
              key={step.id}
              className="command-workflows__step"
              data-index={index}
              style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
            >
              <span className="command-workflows__number">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <p className="command-workflows__duration">{step.duration}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="command-dashboards" aria-labelledby="command-dashboards-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-dashboards-heading">{copy.dashboards.title}</h2>
            <p>{copy.dashboards.description}</p>
          </div>
        </div>
        <div className="command-dashboards__grid">
          {copy.dashboards.panels.map((panel, index) => (
            <article
              key={panel.id}
              className="command-dashboards__card"
              data-index={index}
              style={{ animationDelay: `${index * 0.12}s` } as CSSProperties}
            >
              <header className="command-dashboards__header">
                <h3>{panel.title}</h3>
                <span className="command-dashboards__metric">{panel.metric}</span>
              </header>
              <p>{panel.description}</p>
              <footer className="command-dashboards__footer">
                <span>{panel.action}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="command-diagnostics" aria-labelledby="command-diagnostics-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-diagnostics-heading">{copy.diagnostics.title}</h2>
            <p>{copy.diagnostics.description}</p>
          </div>
        </div>
        <div className="command-diagnostics__grid">
          {copy.diagnostics.modules.map((module, index) => (
            <article
              key={module.id}
              className="command-diagnostics__card"
              data-index={index}
              style={{ animationDelay: `${index * 0.12}s` } as CSSProperties}
            >
              <header className="command-diagnostics__header">
                <span className="command-diagnostics__icon" aria-hidden="true">
                  <GrowthSpark variant={index % 2 === 0 ? 'light' : 'dark'} size="sm" />
                </span>
                <h3>{module.title}</h3>
              </header>
              <p>{module.summary}</p>
              <p className="command-diagnostics__assurance">{module.assurance}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="command-intel" aria-labelledby="command-intel-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-intel-heading">{copy.intelligence.title}</h2>
            <p>{copy.intelligence.description}</p>
          </div>
        </div>
        <div className="command-intel__grid">
          {copy.intelligence.feeds.map((feed, index) => (
            <article
              key={feed.id}
              className="command-intel__card"
              data-index={index}
              style={{ animationDelay: `${index * 0.12}s` } as CSSProperties}
            >
              <header>
                <span className="command-intel__badge" aria-hidden="true">
                  <GrowthSpark variant={index % 2 === 0 ? 'light' : 'dark'} size="sm" />
                </span>
                <div>
                  <h3>{feed.title}</h3>
                  <p>{feed.description}</p>
                </div>
              </header>
              <footer>
                <span>{feed.cadence}</span>
                <span>{feed.coverage}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="command-fusion" aria-labelledby="command-fusion-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-fusion-heading">{copy.fusion.title}</h2>
            <p>{copy.fusion.description}</p>
          </div>
        </div>
        <div className="command-fusion__grid">
          {copy.fusion.rooms.map((room, index) => (
            <article
              key={room.id}
              className="command-fusion__card"
              data-index={index}
              style={{ animationDelay: `${index * 0.12}s` } as CSSProperties}
            >
              <header>
                <span className="command-fusion__badge" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{room.title}</h3>
                  <p>{room.goal}</p>
                </div>
              </header>
              <footer>
                <span>{room.cadence}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="command-playbooks" aria-labelledby="command-playbooks-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-playbooks-heading">{copy.playbooks.title}</h2>
            <p>{copy.playbooks.description}</p>
          </div>
        </div>
        <div className="command-playbooks__grid">
          {copy.playbooks.items.map((item, index) => (
            <article
              key={item.id}
              className="command-playbook"
              data-index={index}
              style={{ animationDelay: `${index * 0.12}s` } as CSSProperties}
            >
              <header>
                <span className="command-playbook__badge">{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </header>
              <ul>
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="command-technology" aria-labelledby="command-technology-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-technology-heading">{copy.technology.title}</h2>
            <p>{copy.technology.description}</p>
          </div>
        </div>
        <div className="command-technology__grid">
          {copy.technology.modules.map((module, index) => (
            <article
              key={module.id}
              className="command-technology__card"
              data-index={index}
              style={{ animationDelay: `${index * 0.12}s` } as CSSProperties}
            >
              <header>
                <span className="command-technology__icon" aria-hidden="true">
                  <GrowthSpark variant={index % 2 === 0 ? 'dark' : 'light'} size="sm" />
                </span>
                <h3>{module.name}</h3>
              </header>
              <p>{module.description}</p>
              <p className="command-technology__automation">{module.automation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="command-briefings" aria-labelledby="command-briefings-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-briefings-heading">{copy.briefings.title}</h2>
            <p>{copy.briefings.description}</p>
          </div>
        </div>
        <div className="command-briefings__grid">
          {copy.briefings.sessions.map((session, index) => (
            <article
              key={session.id}
              className="command-briefings__card"
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header className="command-briefings__header">
                <span className="command-briefings__audience">{session.audience}</span>
                <span className="command-briefings__cadence">{session.cadence}</span>
              </header>
              <h3>{session.focus}</h3>
              <p>{session.takeaways}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="command-readiness" aria-labelledby="command-readiness-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-readiness-heading">{copy.readiness.title}</h2>
            <p>{copy.readiness.description}</p>
          </div>
        </div>
        <div className="command-readiness__grid">
          {copy.readiness.columns.map((column, index) => (
            <article
              key={column.title}
              className="command-readiness__column"
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <h3>{column.title}</h3>
              <ul>
                {column.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="command-retrospectives" aria-labelledby="command-retrospectives-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-retrospectives-heading">{copy.retrospectives.title}</h2>
            <p>{copy.retrospectives.description}</p>
          </div>
        </div>
        <div className="command-retrospectives__grid">
          {copy.retrospectives.stories.map((story, index) => (
            <article
              key={story.id}
              className="command-retrospectives__card"
              data-index={index}
              style={{ animationDelay: `${index * 0.12}s` } as CSSProperties}
            >
              <header>
                <h3>{story.name}</h3>
                <span className="command-retrospectives__metric">{story.metric}</span>
              </header>
              <p className="command-retrospectives__impact">{story.impact}</p>
              <p>{story.improvement}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="command-calendar" aria-labelledby="command-calendar-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-calendar-heading">{copy.calendar.title}</h2>
            <p>{copy.calendar.description}</p>
          </div>
        </div>
        <ol className="command-calendar__list">
          {copy.calendar.events.map((event, index) => (
            <li
              key={event.id}
              className="command-calendar__item"
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <span className="command-calendar__month">{event.month}</span>
              <div className="command-calendar__content">
                <h3>{event.focus}</h3>
                <p className="command-calendar__lead">{event.lead}</p>
                <p>{event.readiness}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="command-escalation" aria-labelledby="command-escalation-heading">
        <div className="command-section__header">
          <div>
            <h2 id="command-escalation-heading">{copy.escalation.title}</h2>
            <p>{copy.escalation.description}</p>
          </div>
          <div className="command-escalation__hotline">
            <span>{copy.escalation.hotlineLabel}</span>
            <strong>{copy.escalation.hotlineValue}</strong>
          </div>
        </div>
        <div className="command-escalation__grid">
          {copy.escalation.tiers.map((tier, index) => (
            <article
              key={tier.id}
              className="command-escalation__card"
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <header>
                <span className="command-escalation__level">{tier.level}</span>
                <p>{tier.response}</p>
              </header>
              <ul>
                {tier.channels.map((channel) => (
                  <li key={channel}>{channel}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="command-cta">
        <div>
          <h2>{copy.contact.title}</h2>
          <p>{copy.contact.subtitle}</p>
        </div>
        <div className="command-cta__actions">
          <Link className="button primary" to={getContactPath(language)}>
            {copy.contact.primary}
          </Link>
          <a className="button ghost" href={copy.contact.secondaryHref}>
            {copy.contact.secondary}
          </a>
        </div>
      </section>
    </article>
  )
}

const AcademyPage = () => {
  const language = useCurrentLanguage()
  const copy = academyCopy[language]
  const secondaryHref = resolveAcademySecondaryHref(copy.hero.secondaryTarget, language)

  return (
    <article className="academy-page">
      <header className="academy-hero">
        <div className="academy-hero__content">
          <p className="academy-hero__eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="academy-hero__subtitle">{copy.hero.subtitle}</p>
          <div className="academy-hero__actions">
            <Link className="button primary" to={getContactPath(language)}>
              {copy.hero.primaryCta}
            </Link>
            <Link className="button secondary" to={secondaryHref}>
              {copy.hero.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="academy-hero__visual">
          <GrowthSpark
            variant="light"
            size="lg"
            className="academy-hero__spark"
            ariaLabel={copy.hero.visualCaption}
          />
          <p className="academy-hero__caption">{copy.hero.visualCaption}</p>
          <ul className="academy-hero__metrics">
            {copy.hero.metrics.map((metric, index) => (
              <li key={metric.label} className="academy-hero__metric" data-index={index}>
                <span className="academy-hero__metric-value">{metric.value}</span>
                <span className="academy-hero__metric-label">{metric.label}</span>
                <p>{metric.annotation}</p>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <MomentumTicker variant="light" />

      <section className="academy-tracks" aria-labelledby="academy-tracks-heading">
        <div className="academy-tracks__intro">
          <p className="academy-tracks__eyebrow">{copy.hero.eyebrow}</p>
          <h2 id="academy-tracks-heading">{copy.tracksHeading}</h2>
          <p>{copy.tracksSubtitle}</p>
        </div>
        <div className="academy-tracks__grid">
          {copy.tracks.map((track, index) => (
            <article key={track.id} className="academy-track" data-index={index}>
              <header className="academy-track__header">
                <p className="academy-track__focus">{track.focus}</p>
                <h3>{track.title}</h3>
                <p className="academy-track__description">{track.description}</p>
                <div className="academy-track__meta">
                  <span>{track.duration}</span>
                  <span>{track.format}</span>
                </div>
              </header>
              <div className="academy-track__body">
                <div className="academy-track__list">
                  <h4>{copy.trackOutcomeLabel}</h4>
                  <ul>
                    {track.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
                <div className="academy-track__list">
                  <h4>{copy.trackModuleLabel}</h4>
                  <ul>
                    {track.modules.map((module) => (
                      <li key={module}>{module}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="academy-workshops" aria-labelledby="academy-workshops-heading">
        <div className="academy-workshops__intro">
          <h2 id="academy-workshops-heading">{copy.workshopsHeading}</h2>
          <p>{copy.workshopsSubtitle}</p>
        </div>
        <div className="academy-workshops__list">
          {copy.workshops.map((workshop, index) => (
            <article key={workshop.title} className="academy-workshop" data-index={index}>
              <header className="academy-workshop__header">
                <p className="academy-workshop__focus">{workshop.focus}</p>
                <h3>{workshop.title}</h3>
                <div className="academy-workshop__meta">
                  <span>{workshop.length}</span>
                  <span>{workshop.format}</span>
                </div>
              </header>
              <div className="academy-workshop__takeaways">
                <h4>{copy.workshopTakeawayLabel}</h4>
                <ul>
                  {workshop.takeaways.map((takeaway) => (
                    <li key={takeaway}>{takeaway}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="academy-labs" aria-labelledby="academy-labs-heading">
        <div className="academy-labs__intro">
          <h2 id="academy-labs-heading">{copy.labsHeading}</h2>
          <p>{copy.labsSubtitle}</p>
        </div>
        <div className="academy-labs__grid">
          {copy.labs.map((lab, index) => (
            <article key={lab.title} className="academy-lab" data-index={index}>
              <header className="academy-lab__header">
                <h3>{lab.title}</h3>
                <p className="academy-lab__description">{lab.description}</p>
              </header>
              <p className="academy-lab__lead">{lab.lead}</p>
              <p className="academy-lab__cadence">{lab.cadence}</p>
              <div className="academy-lab__deliverables">
                <h4>{copy.labDeliverableLabel}</h4>
                <ul>
                  {lab.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="academy-cohorts" aria-labelledby="academy-cohorts-heading">
        <div className="academy-cohorts__intro">
          <h2 id="academy-cohorts-heading">{copy.cohortsHeading}</h2>
          <p>{copy.cohortsSubtitle}</p>
          <p className="academy-cohorts__note">{copy.cohortsNote}</p>
        </div>
        <div className="academy-cohorts__grid">
          {copy.cohorts.map((cohort, index) => (
            <article key={cohort.id} className="academy-cohort" data-index={index}>
              <header className="academy-cohort__header">
                <h3>{cohort.title}</h3>
                <p className="academy-cohort__description">{cohort.description}</p>
              </header>
              <dl className="academy-cohort__meta">
                <div>
                  <dt>{copy.cohortStartLabel}</dt>
                  <dd>{cohort.start}</dd>
                </div>
                <div>
                  <dt>{copy.cohortCadenceLabel}</dt>
                  <dd>{cohort.cadence}</dd>
                </div>
                <div>
                  <dt>{copy.cohortFocusLabel}</dt>
                  <dd>{cohort.focus}</dd>
                </div>
                <div>
                  <dt>{copy.cohortSeatsLabel}</dt>
                  <dd>{cohort.seats}</dd>
                </div>
              </dl>
              <div className="academy-cohort__highlights">
                <h4>{copy.cohortHighlightsLabel}</h4>
                <ul>
                  {cohort.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <Link className="button tertiary" to={getContactPath(language)}>
                {copy.cohortActionLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="academy-mentorship" aria-labelledby="academy-mentorship-heading">
        <div className="academy-mentorship__intro">
          <h2 id="academy-mentorship-heading">{copy.mentorshipHeading}</h2>
          <p>{copy.mentorshipSubtitle}</p>
        </div>
        <div className="academy-mentorship__grid">
          {copy.mentors.map((mentor, index) => (
            <article key={mentor.name} className="academy-mentor" data-index={index}>
              <header className="academy-mentor__header">
                <div>
                  <h3>{mentor.name}</h3>
                  <p className="academy-mentor__role">{mentor.role}</p>
                </div>
                <span className="academy-mentor__badge">{mentor.availability}</span>
              </header>
              <p className="academy-mentor__bio">{mentor.bio}</p>
              <div className="academy-mentor__lists">
                <div className="academy-mentor__list">
                  <h4>{copy.mentorExpertiseLabel}</h4>
                  <ul>
                    {mentor.expertise.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="academy-mentor__meta">
                  <dl>
                    <div>
                      <dt>{copy.mentorAvailabilityLabel}</dt>
                      <dd>{mentor.availability}</dd>
                    </div>
                    <div>
                      <dt>{copy.mentorLanguagesLabel}</dt>
                      <dd>{mentor.languages.join(', ')}</dd>
                    </div>
                  </dl>
                  <p className="academy-mentor__note">
                    <span>{copy.mentorNoteLabel}</span>
                    {mentor.note}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="academy-office-hours" aria-labelledby="academy-office-hours-heading">
        <div className="academy-office-hours__intro">
          <h2 id="academy-office-hours-heading">{copy.officeHoursHeading}</h2>
          <p>{copy.officeHoursSubtitle}</p>
        </div>
        <div className="academy-office-hours__grid">
          {copy.officeHours.map((slot, index) => (
            <article key={slot.title} className="academy-office-hour" data-index={index}>
              <header className="academy-office-hour__header">
                <p className="academy-office-hour__cadence">{slot.cadence}</p>
                <h3>{slot.title}</h3>
                <p className="academy-office-hour__focus">
                  <span>{copy.officeHoursFocusLabel}</span>
                  {slot.focus}
                </p>
              </header>
              <dl className="academy-office-hour__meta">
                <div>
                  <dt>{copy.officeHoursFacilitatorLabel}</dt>
                  <dd>{slot.facilitator}</dd>
                </div>
                <div>
                  <dt>{copy.officeHoursFormatLabel}</dt>
                  <dd>{slot.format}</dd>
                </div>
              </dl>
              <div className="academy-office-hour__takeaways">
                <h4>{copy.officeHoursTakeawayLabel}</h4>
                <ul>
                  {slot.takeaways.map((takeaway) => (
                    <li key={takeaway}>{takeaway}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="academy-certifications" aria-labelledby="academy-certifications-heading">
        <div className="academy-certifications__intro">
          <h2 id="academy-certifications-heading">{copy.certificationsHeading}</h2>
          <p>{copy.certificationsSubtitle}</p>
        </div>
        <div className="academy-certifications__grid">
          {copy.certifications.map((certification, index) => (
            <article key={certification.id} className="academy-certification" data-index={index}>
              <span className="academy-certification__badge">{certification.badgeLabel}</span>
              <h3>{certification.title}</h3>
              <p className="academy-certification__description">{certification.description}</p>
              <p className="academy-certification__validation">
                <strong>{copy.certificationValidationLabel}:</strong> {certification.validation}
              </p>
              <div className="academy-certification__requirements">
                <h4>{copy.certificationRequirementsLabel}</h4>
                <ul>
                  {certification.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
              </div>
              <p className="academy-certification__renewal">
                <strong>{copy.certificationRenewalLabel}:</strong> {certification.renewal}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="academy-scholarships" aria-labelledby="academy-scholarships-heading">
        <div className="academy-scholarships__intro">
          <h2 id="academy-scholarships-heading">{copy.scholarshipsHeading}</h2>
          <p>{copy.scholarshipsSubtitle}</p>
        </div>
        <div className="academy-scholarships__grid">
          {copy.scholarships.map((scholarship, index) => (
            <article key={scholarship.id} className="academy-scholarship" data-index={index}>
              <header className="academy-scholarship__header">
                <h3>{scholarship.title}</h3>
                <p>{scholarship.description}</p>
                <div className="academy-scholarship__value">
                  <span className="academy-scholarship__value-label">{copy.scholarshipValueLabel}</span>
                  <span className="academy-scholarship__value-amount">{scholarship.value}</span>
                </div>
              </header>
              <div className="academy-scholarship__lists">
                <div className="academy-scholarship__list">
                  <h4>{copy.scholarshipEligibilityLabel}</h4>
                  <ul>
                    {scholarship.eligibility.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="academy-scholarship__list">
                  <h4>{copy.scholarshipSupportLabel}</h4>
                  <ul>
                    {scholarship.support.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link className="button secondary" to={getContactPath(language)}>
                {scholarship.cta || copy.scholarshipActionLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="academy-community" aria-labelledby="academy-community-heading">
        <div className="academy-community__intro">
          <h2 id="academy-community-heading">{copy.communityHeading}</h2>
          <p>{copy.communitySubtitle}</p>
        </div>
        <div className="academy-community__grid">
          {copy.communityHighlights.map((highlight, index) => (
            <article key={highlight.label} className="academy-community__card" data-index={index}>
              <h3>{highlight.label}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="academy-toolkits" aria-labelledby="academy-toolkits-heading">
        <div className="academy-toolkits__intro">
          <h2 id="academy-toolkits-heading">{copy.toolkitHeading}</h2>
          <p>{copy.toolkitSubtitle}</p>
        </div>
        <div className="academy-toolkits__grid">
          {copy.toolkit.map((kit, index) => (
            <article key={kit.id} className="academy-toolkit" data-index={index}>
              <header className="academy-toolkit__header">
                <h3>{kit.title}</h3>
                <p>{kit.description}</p>
              </header>
              <div className="academy-toolkit__content">
                <div className="academy-toolkit__list">
                  <h4>{copy.toolkitResourcesLabel}</h4>
                  <ul>
                    {kit.artifacts.map((artifact) => (
                      <li key={artifact}>{artifact}</li>
                    ))}
                  </ul>
                </div>
                <p className="academy-toolkit__impact">
                  <strong>{copy.toolkitImpactLabel}:</strong> {kit.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="academy-alumni" aria-labelledby="academy-alumni-heading">
        <div className="academy-alumni__intro">
          <h2 id="academy-alumni-heading">{copy.alumniHeading}</h2>
          <p>{copy.alumniSubtitle}</p>
        </div>
        <div className="academy-alumni__grid">
          {copy.alumni.map((alum, index) => (
            <article key={alum.id} className="academy-alumni__story" data-index={index}>
              <header className="academy-alumni__meta">
                <h3>{alum.name}</h3>
                <p className="academy-alumni__role">
                  {alum.role} · {alum.organization}
                </p>
                <p className="academy-alumni__focus">{alum.focus}</p>
              </header>
              <blockquote>{alum.quote}</blockquote>
              <p className="academy-alumni__outcome">{alum.outcome}</p>
            </article>
          ))}
        </div>
        <div className="academy-alumni__actions">
          <Link className="button tertiary" to={getContactPath(language)}>
            {copy.alumniCtaLabel}
          </Link>
        </div>
      </section>

      <section className="academy-testimonials" aria-labelledby="academy-testimonials-heading">
        <div className="academy-testimonials__intro">
          <h2 id="academy-testimonials-heading">{copy.testimonialsHeading}</h2>
          <GrowthSpark variant="light" size="md" className="academy-testimonials__spark" />
        </div>
        <div className="academy-testimonials__grid">
          {copy.testimonials.map((testimonial, index) => (
            <figure key={testimonial.name} className="academy-testimonial" data-index={index}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <span className="academy-testimonial__name">{testimonial.name}</span>
                <span className="academy-testimonial__role">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="academy-cta" aria-labelledby="academy-cta-heading">
        <div className="academy-cta__content">
          <h2 id="academy-cta-heading">{copy.cta.title}</h2>
          <p>{copy.cta.subtitle}</p>
        </div>
        <div className="academy-cta__actions">
          <Link className="button primary" to={getContactPath(language)}>
            {copy.cta.primary}
          </Link>
          <Link className="button tertiary" to={getServicesPricingPath(language)}>
            {copy.cta.secondary}
          </Link>
        </div>
      </section>
    </article>
  )
}

const ResourceLibraryPage = () => {
  const language = useCurrentLanguage()
  const copy = resourceLibraryCopy[language]

  return (
    <article className="resource-page">
      <header className="resource-hero">
        <div className="resource-hero__content">
          <p className="resource-hero__eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="resource-hero__subtitle">{copy.hero.subtitle}</p>
          <div className="resource-hero__actions">
            <Link className="button primary" to={getContactPath(language)}>
              {copy.hero.ctaPrimary}
            </Link>
            <Link className="button secondary" to={copy.hero.ctaSecondaryHref}>
              {copy.hero.ctaSecondary}
            </Link>
          </div>
          <p className="resource-hero__note">{copy.hero.visualCaption}</p>
        </div>
        <div className="resource-hero__deck">
          <div className="resource-hero__spark">
            <GrowthSpark variant="light" size="lg" ariaLabel={copy.hero.visualCaption} />
            <span className="resource-hero__spark-label">{copy.hero.eyebrow}</span>
          </div>
          <ul className="resource-hero__metrics">
            {copy.hero.metrics.map((metric, index) => (
              <li key={metric.label} className="resource-metric" data-index={index}>
                <span className="resource-metric__value">{metric.value}</span>
                <span className="resource-metric__label">{metric.label}</span>
                <p>{metric.annotation}</p>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <MomentumTicker variant="light" />

      <section className="resource-highlight" aria-labelledby="resource-highlight-heading">
        <div className="resource-highlight__intro">
          <p className="resource-highlight__eyebrow">{copy.highlight.eyebrow}</p>
          <h2 id="resource-highlight-heading">{copy.highlight.heading}</h2>
          <p>{copy.highlight.description}</p>
        </div>
        <div className="resource-highlight__stats">
          {copy.highlight.stats.map((stat, index) => (
            <div key={stat.caption} className="resource-highlight__stat" data-index={index}>
              <span className="resource-highlight__value">{stat.value}</span>
              <span className="resource-highlight__caption">{stat.caption}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="resource-categories" aria-labelledby="resource-categories-heading">
        <div className="resource-categories__intro">
          <h2 id="resource-categories-heading">{copy.hero.eyebrow}</h2>
          <p>{copy.hero.subtitle}</p>
        </div>
        {copy.categories.map((category, index) => (
          <article key={category.id} className="resource-category" data-index={index}>
            <header className="resource-category__header">
              <p className="resource-category__eyebrow">{category.eyebrow}</p>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className="resource-category__metric">
                <div>
                  <span className="resource-category__metric-label">{category.metricLabel}</span>
                  <div className="resource-category__metric-values">
                    <span className="resource-category__metric-value">{category.metricValue}</span>
                    <span className="resource-category__metric-delta">{category.metricDelta}</span>
                  </div>
                </div>
                <p>{category.metricDescription}</p>
              </div>
            </header>
            <div className="resource-category__visual" aria-hidden="true">
              <GrowthSpark
                variant={index % 2 === 0 ? 'light' : 'dark'}
                size="md"
                ariaLabel={category.visualLabel}
              />
              <span className="resource-category__visual-label">{category.visualLabel}</span>
            </div>
            <ul className="resource-category__list">
              {category.resources.map((resource) => (
                <li key={resource.id} className="resource-asset">
                  <div className="resource-asset__heading">
                    <span className="resource-asset__format">{resource.format}</span>
                    <h4>{resource.title}</h4>
                  </div>
                  <p className="resource-asset__summary">{resource.summary}</p>
                  <div className="resource-asset__meta">
                    <span>{resource.length}</span>
                    <span>{resource.callout}</span>
                  </div>
                  <Link className="resource-asset__action" to={getContactPath(language)}>
                    {copy.assetCta}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="resource-workflow" aria-labelledby="resource-workflow-heading">
        <div className="resource-workflow__intro">
          <h2 id="resource-workflow-heading">{copy.workflow.title}</h2>
          <p>{copy.workflow.description}</p>
        </div>
        <ol className="resource-workflow__steps">
          {copy.workflow.steps.map((step, index) => (
            <li key={step.title} className="resource-workflow__step" data-index={index}>
              <span className="resource-workflow__index">{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="resource-testimonials" aria-labelledby="resource-testimonials-heading">
        <div className="resource-testimonials__intro">
          <h2 id="resource-testimonials-heading">{copy.testimonialsHeading}</h2>
        </div>
        <div className="resource-testimonials__grid">
          {copy.testimonials.map((testimonial, index) => (
            <figure key={testimonial.attribution} className="resource-testimonial" data-index={index}>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <span className="resource-testimonial__name">{testimonial.attribution}</span>
                <span className="resource-testimonial__role">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="resource-cta">
        <div>
          <h2>{copy.cta.title}</h2>
          <p>{copy.cta.subtitle}</p>
        </div>
        <div className="resource-cta__actions">
          <Link className="button primary" to={getContactPath(language)}>
            {copy.cta.primary}
          </Link>
          <Link className="button tertiary" to={getCaseStudiesPath(language)}>
            {copy.cta.secondary}
          </Link>
        </div>
      </section>

      <section className="resource-faq" aria-labelledby="resource-faq-heading">
        <h2 id="resource-faq-heading">{copy.faqHeading}</h2>
        <dl className="resource-faq__list">
          {copy.faq.map((item, index) => (
            <div key={item.question} className="resource-faq__item" data-index={index}>
              <dt>{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  )
}

const resolveGuideHref = (target: FaqGuideTarget, language: Language) => {
  switch (target) {
    case 'resources':
      return getResourcesPath(language)
    case 'caseStudies':
      return getCaseStudiesPath(language)
    case 'blog':
      return getBlogBasePath(language)
    case 'contact':
    default:
      return getContactPath(language)
  }
}

const resolveAcademySecondaryHref = (
  target: AcademyHeroSecondaryTarget,
  language: Language
) => {
  switch (target) {
    case 'resources':
      return getResourcesPath(language)
    case 'servicesPricing':
      return getServicesPricingPath(language)
    case 'caseStudies':
    default:
      return getCaseStudiesPath(language)
  }
}

const FaqPage = () => {
  const language = useCurrentLanguage()
  const copy = faqCopy[language]
  const firstCategoryId = copy.categories[0]?.id ?? ''
  const [activeCategoryId, setActiveCategoryId] = useState(firstCategoryId)

  useEffect(() => {
    if (!firstCategoryId) {
      return
    }
    setActiveCategoryId(firstCategoryId)
  }, [firstCategoryId, language])

  return (
    <article className="faq-page">
      <header className="faq-hero">
        <div className="faq-hero__content">
          <p className="faq-hero__eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="faq-hero__subtitle">{copy.hero.subtitle}</p>
          <p>{copy.hero.description}</p>
          <div className="faq-hero__actions">
            <Link className="button primary" to={getContactPath(language)}>
              {copy.hero.primaryCta}
            </Link>
            <a className="button secondary" href={copy.hero.secondaryHref}>
              {copy.hero.secondaryCta}
            </a>
          </div>
          <p className="faq-hero__assurance">{copy.hero.assurance}</p>
        </div>
        <div className="faq-hero__visual">
          <GrowthSpark
            variant="light"
            size="lg"
            className="faq-hero__spark"
            ariaLabel={copy.hero.visualLabel}
          />
          <ul className="faq-hero__metrics">
            {copy.hero.metrics.map((metric, index) => (
              <li key={metric.label} className="faq-hero__metric" data-index={index}>
                <span className="faq-hero__metric-value">{metric.value}</span>
                <span className="faq-hero__metric-label">{metric.label}</span>
                <p>{metric.annotation}</p>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <MomentumTicker variant="light" />

      <section className="faq-categories" aria-labelledby="faq-categories-heading">
        <div className="faq-categories__nav" role="tablist" aria-orientation="vertical">
          <div className="faq-categories__intro">
            <h2 id="faq-categories-heading">{copy.categoriesHeading}</h2>
            <p>{copy.categoriesDescription}</p>
          </div>
          <ul>
            {copy.categories.map((category) => {
              const isActive = category.id === activeCategoryId
              return (
                <li key={category.id}>
                  <button
                    type="button"
                    id={`faq-tab-${category.id}`}
                    className={`faq-tab${isActive ? ' is-active' : ''}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`faq-panel-${category.id}`}
                    onClick={() => setActiveCategoryId(category.id)}
                  >
                    <span className="faq-tab__eyebrow">{category.eyebrow}</span>
                    <span className="faq-tab__title">{category.title}</span>
                    <span className="faq-tab__indicator" aria-hidden="true" />
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="faq-categories__panel">
          {copy.categories.map((category) => {
            const isActive = category.id === activeCategoryId
            return (
              <article
                key={category.id}
                id={`faq-panel-${category.id}`}
                className={`faq-category${isActive ? ' is-active' : ''}`}
                role="tabpanel"
                aria-labelledby={`faq-tab-${category.id}`}
                hidden={!isActive}
              >
                <header className="faq-category__header">
                  <p className="faq-category__eyebrow">{category.eyebrow}</p>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                  <div className="faq-category__signal">
                    <span className="faq-category__signal-label">{category.signalLabel}</span>
                    <span className="faq-category__signal-value">{category.signalValue}</span>
                    <p>{category.signalDetail}</p>
                  </div>
                </header>
                <dl className="faq-category__list">
                  {category.items.map((item, index) => (
                    <div key={item.question} className="faq-item" data-index={index}>
                      <dt>{item.question}</dt>
                      <dd>
                        {item.answer.map((paragraph, paragraphIndex) => (
                          <p key={`${category.id}-${index}-${paragraphIndex}`}>{paragraph}</p>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            )
          })}
        </div>
      </section>

      <section className="faq-guides" aria-labelledby="faq-guides-heading">
        <div className="faq-guides__intro">
          <h2 id="faq-guides-heading">{copy.guidesHeading}</h2>
          <p>{copy.guidesDescription}</p>
        </div>
        <div className="faq-guides__grid">
          {copy.guides.map((guide, index) => (
            <article key={guide.id} className="faq-guide" data-index={index}>
              <p className="faq-guide__eyebrow">{guide.eyebrow}</p>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              <Link className="faq-guide__cta" to={resolveGuideHref(guide.target, language)}>
                {guide.ctaLabel}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-support" aria-labelledby="faq-support-heading">
        <div className="faq-support__content">
          <h2 id="faq-support-heading">{copy.support.title}</h2>
          <p className="faq-support__subtitle">{copy.support.subtitle}</p>
          <ul className="faq-support__notes">
            {copy.support.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
          <div className="faq-support__actions">
            <Link className="button primary" to={getContactPath(language)}>
              {copy.support.ctaLabel}
            </Link>
            <a className="button ghost" href={copy.support.ctaSecondaryHref} target="_blank" rel="noreferrer">
              {copy.support.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="faq-support__channels">
          <GrowthSpark variant="light" size="sm" className="faq-support__spark" />
          <ul>
            {copy.support.channels.map((channel, index) => (
              <li key={channel.label} data-index={index}>
                <span className="faq-support__channel-label">{channel.label}</span>
                <span className="faq-support__channel-detail">{channel.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  )
}

const MediaPage = () => {
  const language = useCurrentLanguage()
  const copy = mediaCenterCopy[language]

  return (
    <article className="media-page">
      <header className="media-hero">
        <div className="media-hero__content">
          <p className="media-hero__eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="media-hero__subtitle">{copy.hero.subtitle}</p>
          <div className="media-hero__actions">
            <Link className="button primary" to={getContactPath(language)}>
              {copy.hero.primaryCta}
            </Link>
            <a className="button secondary" href={copy.hero.secondaryHref}>
              {copy.hero.secondaryCta}
            </a>
          </div>
          <p className="media-hero__note">{copy.hero.mediaNote}</p>
        </div>
        <div className="media-hero__visual" aria-hidden="true">
          <GrowthSpark variant="light" size="lg" className="media-hero__spark" />
          <span className="media-hero__caption">{copy.hero.visualCaption}</span>
        </div>
        <ul className="media-hero__metrics">
          {copy.hero.metrics.map((metric, index) => (
            <li
              key={metric.label}
              className="media-hero__metric"
              data-index={index}
              style={{ animationDelay: `${index * 0.12}s` } as CSSProperties}
            >
              <span className="media-hero__metric-value">{metric.value}</span>
              <span className="media-hero__metric-label">{metric.label}</span>
              <p>{metric.description}</p>
            </li>
          ))}
        </ul>
      </header>

      <MomentumTicker variant="light" />

      <section className="media-coverage" aria-labelledby="media-coverage-heading">
        <div className="media-section__intro">
          <h2 id="media-coverage-heading">{copy.coverage.heading}</h2>
          <p>{copy.coverage.description}</p>
        </div>
        <div className="media-coverage__grid">
          {copy.coverage.outlets.map((outlet, index) => (
            <article
              key={outlet.name}
              className="media-coverage__card"
              data-index={index}
              style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
            >
              <span className="media-coverage__region">{outlet.region}</span>
              <h3>{outlet.name}</h3>
              <p>{outlet.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="media-releases" aria-labelledby="media-releases-heading">
        <div className="media-section__intro">
          <h2 id="media-releases-heading">{copy.releases.heading}</h2>
          <p>{copy.releases.description}</p>
        </div>
        <ol className="media-releases__list">
          {copy.releases.items.map((item, index) => (
            <li
              key={item.id}
              className="media-release"
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <span className="media-release__date">{item.date}</span>
              <div className="media-release__body">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p className="media-release__highlight">{item.highlight}</p>
                <Link className="media-release__cta" to={getBlogBasePath(language)}>
                  {copy.releases.ctaLabel}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="media-kit" className="media-kit" aria-labelledby="media-kit-heading">
        <div className="media-section__intro">
          <h2 id="media-kit-heading">{copy.kit.heading}</h2>
          <p>{copy.kit.description}</p>
          <p className="media-kit__note">{copy.kit.usageNote}</p>
        </div>
        <div className="media-kit__grid">
          {copy.kit.assets.map((asset, index) => (
            <article
              key={asset.id}
              className="media-asset"
              data-index={index}
              style={{ animationDelay: `${index * 0.08}s` } as CSSProperties}
            >
              <div className="media-asset__meta">
                <span className="media-asset__format">{asset.format}</span>
                <span className="media-asset__size">{asset.size}</span>
              </div>
              <h3>{asset.title}</h3>
              <p>{asset.usage}</p>
              <a className="media-asset__download" href={copy.hero.secondaryHref}>
                {copy.kit.downloadLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="media-spokespeople" aria-labelledby="media-spokespeople-heading">
        <div className="media-section__intro">
          <h2 id="media-spokespeople-heading">{copy.spokespeople.heading}</h2>
          <p>{copy.spokespeople.description}</p>
        </div>
        <div className="media-spokespeople__grid">
          {copy.spokespeople.people.map((person, index) => (
            <article
              key={person.id}
              className="media-spokesperson"
              data-index={index}
              style={{ animationDelay: `${index * 0.1}s` } as CSSProperties}
            >
              <div className="media-spokesperson__header">
                <h3>{person.name}</h3>
                <span className="media-spokesperson__role">{person.role}</span>
              </div>
              <p>{person.bio}</p>
              <dl className="media-spokesperson__details">
                <div>
                  <dt>{copy.spokespeople.focusLabel}</dt>
                  <dd>{person.topics}</dd>
                </div>
                <div>
                  <dt>{copy.spokespeople.languagesLabel}</dt>
                  <dd>{person.languages}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="media-contact" aria-labelledby="media-contact-heading">
        <div className="media-contact__content">
          <h2 id="media-contact-heading">{copy.contact.heading}</h2>
          <p className="media-contact__subtitle">{copy.contact.subtitle}</p>
          <ul className="media-contact__list">
            {copy.contact.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className="media-contact__actions">
            <a className="button primary" href={copy.contact.emailHref}>
              {copy.contact.emailLabel}
            </a>
            <a className="button tertiary" href={copy.contact.phoneHref}>
              {copy.contact.phoneLabel}
            </a>
            <Link className="button ghost" to={getContactPath(language)}>
              {copy.hero.primaryCta}
            </Link>
          </div>
          <p className="media-contact__note">{copy.contact.note}</p>
        </div>
        <div className="media-contact__visual" aria-hidden="true">
          <GrowthSpark variant="dark" size="md" />
        </div>
      </section>
    </article>
  )
}

const PartnersPage = () => {
  const language = useCurrentLanguage()
  const copy = partnersCopy[language]

  return (
    <article className="partners-page">
      <header className="partners-hero">
        <div className="partners-hero__copy">
          <p className="partners-kicker">Alliances</p>
          <h1>{copy.title}</h1>
          <p className="partners-hero__subtitle">{copy.subtitle}</p>
          <p>{copy.description}</p>
        </div>
        <div className="partners-hero__card" aria-hidden="true">
          <GrowthSpark variant="light" size="sm" className="partners-hero-graph" />
          <p className="partners-hero__tag">EN · FR · ES</p>
          <h2>Co-create velocity</h2>
          <p>Growth operating partners for founders, agencies, and platforms.</p>
        </div>
      </header>

      <MomentumTicker variant="dark" />

      <section className="partners-section">
        <h2>{copy.segmentsHeading}</h2>
        <div className="partners-grid">
          {copy.segments.map((segment) => (
            <article key={segment.title} className="partners-card">
              <h3>{segment.title}</h3>
              <p>{segment.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partners-section">
        <h2>{copy.benefitsHeading}</h2>
        <ul className="partners-benefits">
          {copy.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>

      <section className="partners-section">
        <h2>{copy.programsHeading}</h2>
        <div className="partners-programs">
          {copy.programs.map((program) => (
            <article key={program.title} className="partners-program">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partners-cta">
        <div>
          <h2>{copy.ctaHeading}</h2>
          <p>{copy.ctaBody}</p>
        </div>
        <div className="partners-cta__actions">
          <a className="button primary" href="mailto:support@traceremove.com?subject=Partnership inquiry">
            support@traceremove.com
          </a>
          <a className="button secondary" href="tel:+16063022958">
            +1 (472) 248 0235
          </a>
        </div>
      </section>
    </article>
  )
}

const JoinPage = () => {
  const language = useCurrentLanguage()
  const copy = joinCopy[language]

  return (
    <article className="join-page">
      <header className="join-hero">
        <div className="join-hero__copy">
          <p className="join-kicker">Careers</p>
          <h1>{copy.title}</h1>
          <p className="join-hero__subtitle">{copy.subtitle}</p>
          <p>{copy.description}</p>
        </div>
        <div className="join-hero__card" aria-hidden="true">
          <GrowthSpark variant="light" size="sm" className="join-hero-graph" />
          <p>Remote · Multilingual</p>
          <h2>Build with us</h2>
          <p>Growth designers, analysts, storytellers, and operators.</p>
        </div>
      </header>

      <MomentumTicker variant="light" />

      <section className="join-section">
        <h2>{copy.valuesHeading}</h2>
        <div className="join-values">
          {copy.values.map((value) => (
            <article key={value.title} className="join-value">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="join-section">
        <h2>{copy.rolesHeading}</h2>
        <ul className="join-roles">
          {copy.roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      </section>

      <section className="join-section">
        <h2>{copy.perksHeading}</h2>
        <ul className="join-perks">
          {copy.perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </section>

      <section className="join-cta">
        <div>
          <h2>{copy.ctaHeading}</h2>
          <p>{copy.ctaBody}</p>
        </div>
        <div className="join-cta__actions">
          <a className="button primary" href="mailto:join@traceremove.com">
            join@traceremove.com
          </a>
          <a className="button ghost" href="https://www.linkedin.com/company/traceremove/jobs/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </article>
  )
}

const contactCopy: Record<
  Language,
  {
    kicker: string
    title: string
    subtitle: string
    intro: string
    formTitle: string
    detailTitle: string
    detailPoints: string[]
    successTitle: string
    successMessage: string
    submit: string
    legal: string
    fields: {
      name: { label: string; placeholder: string }
      email: { label: string; placeholder: string }
      company: { label: string; placeholder: string }
      phone: { label: string; placeholder: string }
      message: { label: string; placeholder: string }
    }
  }
> = {
  en: {
    kicker: 'Contact Traceremove',
    title: 'We help manage and resolve online data exposure',
    subtitle: 'Share your objectives and we will craft a tailored response within one business day.',
    intro:
      'We help manage and resolve online data exposure',
    formTitle: 'Send us a note',
    detailTitle: 'Prefer a direct line?',
    detailPoints: [
      'Email support@traceremove.com for quick scoping questions and proposals.',
      'Call +1 (472) 248 0235 Monday to Friday, 9am–6pm EST for immediate assistance.',
      'Book a 30-minute strategy session to leave with a prioritised roadmap and next steps.',
    ],
    successTitle: 'Thanks for reaching out',
    successMessage: 'We will review your message and respond within one business day.',
    submit: 'Send message',
    legal: 'By submitting this form you agree to be contacted about Traceremove services. We respect your inbox and privacy.',
    fields: {
      name: { label: 'Full name', placeholder: 'Jane Doe' },
      email: { label: 'Work email', placeholder: 'jane@company.com' },
      company: { label: 'Company or team', placeholder: 'Acme Corp' },
      phone: { label: 'Phone (optional)', placeholder: '+1 555 555 5555' },
      message: { label: 'How can we help?', placeholder: 'We help manage and resolve online data exposure' },
    },
  },
  fr: {
    kicker: 'Contact Traceremove',
    title: 'Imaginez votre prochaine percée de réputation',
    subtitle: 'Partagez vos objectifs et nous vous envoyons une proposition sous 24 h.',
    intro:
      'Parlez-nous de votre feuille de route, de vos indicateurs clés et des défis réputationnels. Notre équipe multilingue bâtira un programme sur mesure.',
    formTitle: 'Écrivez-nous',
    detailTitle: 'Besoin d’un échange direct ?',
    detailPoints: [
      'Écrivez à support@traceremove.com pour un cadrage rapide de votre projet.',
      'Appelez le +1 (472) 248 0235 du lundi au vendredi, 9h–18h EST.',
      'Réservez une session stratégique de 30 minutes pour repartir avec un plan priorisé.',
    ],
    successTitle: 'Merci pour votre message',
    successMessage: 'Nous revenons vers vous sous un jour ouvré.',
    submit: 'Envoyer',
    legal: 'En envoyant ce formulaire, vous acceptez que nous vous contactions au sujet de nos services. Vos données restent confidentielles.',
    fields: {
      name: { label: 'Nom complet', placeholder: 'Jeanne Dupont' },
      email: { label: 'Email professionnel', placeholder: 'jeanne@entreprise.com' },
      company: { label: 'Entreprise ou équipe', placeholder: 'Entreprise Exemple' },
      phone: { label: 'Téléphone (optionnel)', placeholder: '+33 6 12 34 56 78' },
      message: { label: 'Comment pouvons-nous aider ?', placeholder: 'Partagez vos objectifs, délais ou risques réputationnels…' },
    },
  },
  es: {
    kicker: 'Contacto Traceremove',
    title: 'Diseña tu próximo avance de reputación',
    subtitle: 'Comparte tus objetivos y enviaremos una propuesta en menos de 24 horas.',
    intro:
      'Cuéntanos tu hoja de ruta, métricas clave y retos de reputación. Nuestro equipo multilingüe armará un programa hecho a medida.',
    formTitle: 'Escríbenos',
    detailTitle: '¿Prefieres un contacto directo?',
    detailPoints: [
      'Escribe a support@traceremove.com para dudas rápidas sobre alcance y propuestas.',
      'Llama al +1 (472) 248 0235 de lunes a viernes, 9h–18h EST.',
      'Agenda una sesión estratégica de 30 minutos y obtén un plan priorizado.',
    ],
    successTitle: 'Gracias por escribirnos',
    successMessage: 'Revisaremos tu mensaje y responderemos en un día hábil.',
    submit: 'Enviar mensaje',
    legal: 'Al enviar aceptas que te contactemos sobre los servicios de Traceremove. Protegemos tu privacidad.',
    fields: {
      name: { label: 'Nombre completo', placeholder: 'Ana Pérez' },
      email: { label: 'Correo profesional', placeholder: 'ana@empresa.com' },
      company: { label: 'Empresa o equipo', placeholder: 'Empresa Ejemplo' },
      phone: { label: 'Teléfono (opcional)', placeholder: '+34 600 123 456' },
      message: { label: '¿Cómo podemos ayudar?', placeholder: 'Comparte objetivos, plazos o riesgos de reputación…' },
    },
  },
}

const ContactPage = ({ language }: { language: Language }) => {
  const copy = contactCopy[language]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  async function submitToMake(data: {
    name: string; company: string; email: string; message: string;
  }): Promise<boolean> {
    try {
      const res = await fetch(
        'WEBHOOK_PLACEHOLDER', // TODO: replace with actual Make.com webhook URL
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: data.name,
            company: data.company,
            email: data.email,
            message: data.message,
            source: 'traceremove.com',
            timestamp: new Date().toISOString(),
            language: navigator.language,
            page: window.location.pathname,
          }),
        }
      )
      return res.ok
    } catch {
      return false
    }
  }

  const handleChange = (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (submitStatus) {
        setSubmitStatus(null)
      }
      const value = event.target.value
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }))
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const isSubmitted = await submitToMake({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      message: formData.message,
    })

    if (isSubmitted) {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', message: '' })
      return
    }

    setSubmitStatus('error')
  }

  return (
    <section className="contact-page">
      <header className="contact-hero">
        <p className="contact-kicker">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <p className="contact-subtitle">{copy.subtitle}</p>
        <p className="contact-intro">{copy.intro}</p>
      </header>

      <MomentumTicker variant="dark" />

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h2>{copy.formTitle}</h2>
          <div className="contact-form__fields">
            <div className="contact-field">
              <label htmlFor="contact-name">{copy.fields.name.label}</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={copy.fields.name.placeholder}
                value={formData.name}
                onChange={handleChange('name')}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">{copy.fields.email.label}</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={copy.fields.email.placeholder}
                value={formData.email}
                onChange={handleChange('email')}
                required
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-company">{copy.fields.company.label}</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder={copy.fields.company.placeholder}
                value={formData.company}
                onChange={handleChange('company')}
              />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-phone">{copy.fields.phone.label}</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder={copy.fields.phone.placeholder}
                value={formData.phone}
                onChange={handleChange('phone')}
              />
            </div>
            <div className="contact-field contact-field--full">
              <label htmlFor="contact-message">{copy.fields.message.label}</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder={copy.fields.message.placeholder}
                value={formData.message}
                onChange={handleChange('message')}
                required
              />
            </div>
          </div>
          <button type="submit" className="button primary contact-submit">
            {copy.submit}
          </button>
          {submitStatus === 'success' && (
            <div className="contact-success" role="status" aria-live="polite">
              <h3>Assessment request received.</h3>
              <p>Check your email — an NDA will arrive within 5 minutes for your signature before we proceed.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="contact-success" role="alert" aria-live="assertive">
              <p>There was an issue. Please email us directly at support@traceremove.com</p>
            </div>
          )}
          <p className="contact-legal">{copy.legal}</p>
        </form>
        <aside className="contact-details">
          <h2>{copy.detailTitle}</h2>
          <ul>
            {copy.detailPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="contact-direct">
            <a className="button primary" href="mailto:support@traceremove.com">
              support@traceremove.com
            </a>
            <a className="button secondary" href="tel:+16063022958">
              +1 (472) 248 0235
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

const NotFound = () => (
  <section className="service-page">
    <header className="service-hero">
      <div className="service-hero-copy">
        <p className="service-preheading">Traceremove</p>
        <h1>We couldn&apos;t find that page.</h1>
        <p className="service-subheading">Explore our services and choose the program that fits your roadmap.</p>
        <Link className="button primary" to="/">
          Back to overview
        </Link>
      </div>
      <div className="service-hero-visual" aria-hidden="true">
        <img src="/traceremove-orbit.svg" alt="" loading="lazy" />
      </div>
    </header>
  </section>
)

const SimpleContactPage = () => (
  <section style={{ padding: '48px 24px' }}>
    <div style={{ maxWidth: 720, margin: '0 auto', fontSize: '14px', lineHeight: 1.7, opacity: 0.8 }}>
      <div>TRACEREMOVE LLC</div>
      <div>750 Manhattan Ave</div>
      <div>Brooklyn, NY 11222, USA</div>
      <div>support@traceremove.com</div>
    </div>
  </section>
)

const SimpleLegalPage = ({ type }: { type: 'terms' | 'privacy' | 'refund' }) => {
  const copy = {
    terms: {
      title: 'Terms of Service',
      text: 'By using this digital platform, you agree to use our services lawfully and responsibly. We may update or suspend features at any time.',
    },
    privacy: {
      title: 'Privacy Policy',
      text: 'We collect only the data needed to provide and improve our services. We do not sell personal data and apply reasonable safeguards to protect it.',
    },
    refund: {
      title: 'Refund Policy',
      text: 'Refund requests are reviewed case by case for digital services. Contact support within 14 days of purchase for assistance.',
    },
  }[type]

  return (
    <section style={{ padding: '48px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', fontSize: '14px', lineHeight: 1.7, opacity: 0.82 }}>
        <h1 style={{ fontSize: '24px', margin: '0 0 16px' }}>{copy.title}</h1>
        <p style={{ margin: '0 0 16px' }}>{copy.text}</p>
        <p style={{ margin: 0 }}>
          TRACEREMOVE LLC
          <br />
          750 Manhattan Ave
          <br />
          Brooklyn, NY 11222, USA
        </p>
      </div>
    </section>
  )
}

const blogListCopy: Record<
  Language,
  {
    kicker: string
    title: string
    subtitle: string
    intro: string
    readArticle: string
    filtersTitle: string
    filtersDescription: string
    topicsLabel: string
    allTopics: string
    authorsLabel: string
    allAuthors: string
    searchLabel: string
    searchPlaceholder: string
    clearSearch: string
    emptyTitle: string
    emptyDescription: string
    resetFilters: string
    featuredLabel: string
  }
> = {
  en: {
    kicker: 'Traceremove Blog',
    title: 'We help manage and resolve online data exposure',
    subtitle: 'Frameworks across ORM, AI, cybersecurity, SEO, and web design.',
    intro:
      'Explore the operating manuals we use with clients shipping fast. Every article includes actionable workflows, checklists, and measurement rituals you can adapt today.',
    readArticle: 'Read article',
    filtersTitle: 'Refine the insights',
    filtersDescription:
      'Toggle focus areas, spotlight strategists, or search keywords to surface the playbooks that match your growth moment.',
    topicsLabel: 'Filter by topic',
    allTopics: 'All topics',
    authorsLabel: 'Filter by strategist',
    allAuthors: 'All strategists',
    searchLabel: 'Search the library',
    searchPlaceholder: 'Search articles…',
    clearSearch: 'Clear search',
    emptyTitle: 'No articles match yet',
    emptyDescription: 'Try another keyword or reset the filters to explore the full library.',
    resetFilters: 'Reset filters',
    featuredLabel: 'Featured insight',
  },
  fr: {
    kicker: 'Blog Traceremove',
    title: 'Le journal des équipes guidées par la réputation',
    subtitle: 'Cadres sur l’ORM, l’IA, la cybersécurité, le SEO et le design web.',
    intro:
      'Découvrez les modes opératoires que nous activons chez nos clients. Chaque article propose workflows actionnables, checklists et rituels de mesure à adapter dès maintenant.',
    readArticle: 'Lire l’article',
    filtersTitle: 'Affiner les insights',
    filtersDescription:
      'Activez les thématiques, choisissez vos stratèges ou recherchez des mots-clés pour faire émerger les playbooks adaptés.',
    topicsLabel: 'Filtrer par thématique',
    allTopics: 'Toutes les thématiques',
    authorsLabel: 'Filtrer par stratège',
    allAuthors: 'Tous les stratèges',
    searchLabel: 'Rechercher dans la bibliothèque',
    searchPlaceholder: 'Rechercher un article…',
    clearSearch: 'Effacer la recherche',
    emptyTitle: 'Aucun article ne correspond',
    emptyDescription: 'Essayez un autre mot-clé ou réinitialisez les filtres pour parcourir toute la bibliothèque.',
    resetFilters: 'Réinitialiser les filtres',
    featuredLabel: 'Insight mis en avant',
  },
  es: {
    kicker: 'Blog Traceremove',
    title: 'El journal para equipos guiados por la reputación',
    subtitle: 'Frameworks sobre ORM, IA, ciberseguridad, SEO y diseño web.',
    intro:
      'Explora los manuales operativos que usamos con clientes de alto crecimiento. Cada artículo comparte workflows accionables, checklists y rituales de medición listos para adaptar.',
    readArticle: 'Leer artículo',
    filtersTitle: 'Refinar los insights',
    filtersDescription:
      'Activa los focos, elige estrategas o busca palabras clave para encontrar los playbooks que tu equipo necesita.',
    topicsLabel: 'Filtrar por temática',
    allTopics: 'Todas las temáticas',
    authorsLabel: 'Filtrar por estratega',
    allAuthors: 'Todos los estrategas',
    searchLabel: 'Buscar en la biblioteca',
    searchPlaceholder: 'Buscar artículos…',
    clearSearch: 'Borrar búsqueda',
    emptyTitle: 'Ningún artículo coincide',
    emptyDescription: 'Prueba con otra palabra clave o restablece los filtros para explorar toda la biblioteca.',
    resetFilters: 'Restablecer filtros',
    featuredLabel: 'Insight destacado',
  },
}

type BlogListEntry = {
  slug: string
  publishedAt: string
  topic: BlogTopic
  authorId: AuthorId
  translation: BlogArticleTranslation
}

const blogArticleCopy: Record<
  Language,
  {
    backToBlog: string
    publishedOn: string
    shareTitle: string
    shareSubtitle: string
    shareLinkedIn: string
    shareTwitter: string
    shareEmail: string
    copyLink: string
    copied: string
    ctaTitle: string
    ctaBody: string
    ctaButton: string
    tocTitle: string
    tocHint: string
    scrollTop: string
    progressLabel: string
    relatedTitle: string
    relatedSubtitle: string
    relatedCta: string
    authorSpotlight: string
    authorQuoteLabel: string
    authorAvailabilityLabel: string
  }
> = {
  en: {
    backToBlog: 'Back to articles',
    publishedOn: 'Published on',
    shareTitle: 'Share this playbook',
    shareSubtitle: 'Keep your partners and operators aligned with the latest Traceremove guidance.',
    shareLinkedIn: 'Share on LinkedIn',
    shareTwitter: 'Post on X',
    shareEmail: 'Send by email',
    copyLink: 'Copy link',
    copied: 'Link copied',
    ctaTitle: 'Need a rapid response team?',
    ctaBody:
      'We help manage and resolve online data exposure',
    ctaButton: 'Book a strategy call',
    tocTitle: 'Navigate this playbook',
    tocHint: 'Jump to any section while the growth meter tracks your read.',
    scrollTop: 'Back to top',
    progressLabel: 'Reading progress',
    relatedTitle: 'Continue exploring',
    relatedSubtitle: 'Strategic playbooks that keep your brand weeks ahead of the noise.',
    relatedCta: 'Open playbook',
    authorSpotlight: 'Meet your strategist',
    authorQuoteLabel: 'Point of view',
    authorAvailabilityLabel: 'Currently advising:',
  },
  fr: {
    backToBlog: 'Retour aux articles',
    publishedOn: 'Publié le',
    shareTitle: 'Partagez ce playbook',
    shareSubtitle: 'Gardez vos partenaires et vos équipes alignés sur les recommandations Traceremove.',
    shareLinkedIn: 'Partager sur LinkedIn',
    shareTwitter: 'Publier sur X',
    shareEmail: 'Envoyer par e-mail',
    copyLink: 'Copier le lien',
    copied: 'Lien copié',
    ctaTitle: 'Besoin d’une équipe de riposte?',
    ctaBody:
      'Invitez Traceremove à vos comités de marque pour bâtir les contre-récits, supprimer les faux avis et renforcer la confiance sur les moteurs de recherche.',
    ctaButton: 'Planifier un échange',
    tocTitle: 'Parcourir le playbook',
    tocHint: 'Accédez à chaque chapitre pendant que l’indicateur suit votre lecture.',
    scrollTop: 'Revenir en haut',
    progressLabel: 'Progression de lecture',
    relatedTitle: 'Poursuivez l’exploration',
    relatedSubtitle: 'Des plans d’attaque pour garder votre marque plusieurs coups d’avance.',
    relatedCta: 'Découvrir le playbook',
    authorSpotlight: 'Rencontrez votre stratège',
    authorQuoteLabel: 'Point de vue',
    authorAvailabilityLabel: 'Accompagne actuellement :',
  },
  es: {
    backToBlog: 'Volver a los artículos',
    publishedOn: 'Publicado el',
    shareTitle: 'Comparte este playbook',
    shareSubtitle: 'Mantén a tus socios y operadores alineados con las recomendaciones de Traceremove.',
    shareLinkedIn: 'Compartir en LinkedIn',
    shareTwitter: 'Publicar en X',
    shareEmail: 'Enviar por correo',
    copyLink: 'Copiar enlace',
    copied: 'Enlace copiado',
    ctaTitle: '¿Necesitas un equipo de respuesta rápida?',
    ctaBody:
      'Integra a Traceremove en tu war room para diseñar contra-narrativas, eliminar reseñas falsas y blindar la confianza en buscadores.',
    ctaButton: 'Reserva una sesión estratégica',
    tocTitle: 'Recorre el playbook',
    tocHint: 'Salta a cualquier capítulo mientras el indicador sigue tu lectura.',
    scrollTop: 'Volver arriba',
    progressLabel: 'Progreso de lectura',
    relatedTitle: 'Sigue explorando',
    relatedSubtitle: 'Playbooks estratégicos para mantener tu marca pasos delante del ruido.',
    relatedCta: 'Abrir playbook',
    authorSpotlight: 'Conoce a tu estratega',
    authorQuoteLabel: 'Punto de vista',
    authorAvailabilityLabel: 'Actualmente asesora a:',
  },
}


const BlogPage = ({ language }: { language: Language }) => {
  const copy = blogListCopy[language]
  const [topicFilter, setTopicFilter] = useState<'all' | BlogTopic>('all')
  const [authorFilter, setAuthorFilter] = useState<'all' | AuthorId>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([])
  const [mediumStatus, setMediumStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')

  const topics = useMemo(
    () =>
      blogTopics.map((topic) => ({
        key: topic,
        label: blogTopicLabels[language][topic],
      })),
    [language]
  )

  const authorOptions = useMemo(() => {
    const locale = localeMap[language]
    return Object.values(authorProfiles)
      .map((profile) => ({
        id: profile.id,
        label: profile.shortName[language],
        fullLabel: profile.name[language],
      }))
      .sort((a, b) => a.label.localeCompare(b.label, locale))
  }, [language])

  const articles = useMemo(
    () =>
      blogArticles
        .map((article) => {
          const translation = article.translations[language]
          if (!translation) {
            return undefined
          }
          return {
            slug: article.slug,
            publishedAt: article.publishedAt,
            topic: article.topic,
            authorId: article.authorId,
            translation,
          }
        })
        .filter((article): article is BlogListEntry => Boolean(article))
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
    [language],
  )

  const filteredArticles = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase()
    return articles.filter((article) => {
      const matchesTopic = topicFilter === 'all' || article.topic === topicFilter
      const matchesAuthor = authorFilter === 'all' || article.authorId === authorFilter
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [article.translation.title, article.translation.summary].some((value) =>
          value.toLowerCase().includes(normalizedQuery)
        )
      return matchesTopic && matchesAuthor && matchesQuery
    })
  }, [articles, authorFilter, searchTerm, topicFilter])

  const featuredArticle = filteredArticles[0]
  const remainingArticles = filteredArticles.slice(1)

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  const handleResetFilters = () => {
    setTopicFilter('all')
    setAuthorFilter('all')
    setSearchTerm('')
  }

  const topicGroupId = `blog-${language}-topics`
  const authorGroupId = `blog-${language}-authors`

  useEffect(() => {
    let active = true
    const loadMedium = async () => {
      setMediumStatus('loading')
      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@traceremove',
        )
        const data = await response.json()
        if (!active) {
          return
        }
        const items = Array.isArray(data.items) ? data.items.slice(0, 4) : []
        const mapped = items.map((item: { title: string; link: string; pubDate: string; description: string }) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          description: item.description?.replace(/<[^>]*>/g, '').slice(0, 180) ?? '',
        }))
        setMediumPosts(mapped)
        setMediumStatus('ready')
      } catch {
        if (active) {
          setMediumStatus('error')
        }
      }
    }

    loadMedium()
    const refreshTimer = window.setInterval(loadMedium, 1000 * 60 * 10)
    return () => {
      active = false
      window.clearInterval(refreshTimer)
    }
  }, [])

  return (
    <section className="blog-page">
      <header className="blog-hero">
        <p className="blog-hero__kicker">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <p className="blog-hero__subtitle">{copy.subtitle}</p>
        <p className="blog-hero__intro">{copy.intro}</p>
      </header>

      <MomentumTicker variant="light" />

      <div className="blog-filters" role="region" aria-label={copy.filtersTitle}>
        <div className="blog-filters__text">
          <h2>{copy.filtersTitle}</h2>
          <p>{copy.filtersDescription}</p>
        </div>
        <div className="blog-filters__controls">
          <div className="blog-filter-groups">
            <div className="blog-filter-group">
              <p id={topicGroupId} className="blog-filter-group__label">
                {copy.topicsLabel}
              </p>
              <div className="blog-topics" role="group" aria-labelledby={topicGroupId}>
                <button
                  type="button"
                  className={`blog-topic-button ${topicFilter === 'all' ? 'is-active' : ''}`}
                  onClick={() => setTopicFilter('all')}
                  aria-pressed={topicFilter === 'all'}
                >
                  {copy.allTopics}
                </button>
                {topics.map((topic) => (
                  <button
                    key={topic.key}
                    type="button"
                    className={`blog-topic-button ${topicFilter === topic.key ? 'is-active' : ''}`}
                    onClick={() => setTopicFilter(topic.key)}
                    aria-pressed={topicFilter === topic.key}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="blog-filter-group">
              <p id={authorGroupId} className="blog-filter-group__label">
                {copy.authorsLabel}
              </p>
              <div className="blog-authors" role="group" aria-labelledby={authorGroupId}>
                <button
                  type="button"
                  className={`blog-author-button ${authorFilter === 'all' ? 'is-active' : ''}`}
                  onClick={() => setAuthorFilter('all')}
                  aria-pressed={authorFilter === 'all'}
                >
                  {copy.allAuthors}
                </button>
                {authorOptions.map((author) => (
                  <button
                    key={author.id}
                    type="button"
                    className={`blog-author-button ${authorFilter === author.id ? 'is-active' : ''}`}
                    onClick={() => setAuthorFilter(author.id)}
                    aria-pressed={authorFilter === author.id}
                    title={author.fullLabel}
                  >
                    {author.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <label className="blog-search">
            <span>{copy.searchLabel}</span>
            <div className="blog-search__field">
              <input
                type="search"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder={copy.searchPlaceholder}
              />
              {searchTerm ? (
                <button type="button" onClick={() => setSearchTerm('')} aria-label={copy.clearSearch}>
                  <span aria-hidden="true">×</span>
                </button>
              ) : null}
            </div>
          </label>
        </div>
      </div>

      {featuredArticle ? (
        <>
          <article className="blog-featured">
            <span className="blog-featured__badge">{copy.featuredLabel}</span>
            <p className="blog-featured__topic">{featuredArticle.translation.topicLabel}</p>
            <h2>{highlightSearchTerm(featuredArticle.translation.title, searchTerm)}</h2>
            <p className="blog-featured__summary">
              {highlightSearchTerm(featuredArticle.translation.summary, searchTerm)}
            </p>
            <div className="blog-featured__meta">
              <span className="blog-featured__author">{featuredArticle.translation.author}</span>
              <span aria-hidden="true">•</span>
              <span>{formatLocaleDate(language, featuredArticle.publishedAt)}</span>
              <span aria-hidden="true">•</span>
              <span>{featuredArticle.translation.readTime}</span>
            </div>
            <Link
              className="blog-featured__cta button primary"
              to={getBlogArticlePath(language, featuredArticle.slug)}
            >
              {copy.readArticle}
            </Link>
            <div className="blog-featured__spark" aria-hidden="true">
              <GrowthSpark variant="light" size="lg" />
            </div>
          </article>

          {remainingArticles.length > 0 ? (
            <div className="blog-grid">
              {remainingArticles.map((article) => (
                <article key={article.slug} className="blog-card">
                  <p className="blog-card__topic">{article.translation.topicLabel}</p>
                  <h2>{highlightSearchTerm(article.translation.title, searchTerm)}</h2>
                  <p className="blog-card__summary">
                    {highlightSearchTerm(article.translation.summary, searchTerm)}
                  </p>
                  <div className="blog-card__meta">
                    <span className="blog-card__author">{article.translation.author}</span>
                    <span aria-hidden="true">•</span>
                    <span>{formatLocaleDate(language, article.publishedAt)}</span>
                    <span aria-hidden="true">•</span>
                    <span>{article.translation.readTime}</span>
                  </div>
                  <Link className="blog-card__link" to={getBlogArticlePath(language, article.slug)}>
                    {copy.readArticle}
                  </Link>
                </article>
              ))}
            </div>
          ) : null}
        </>
      ) : (
        <div className="blog-empty">
          <h2>{copy.emptyTitle}</h2>
          <p>{copy.emptyDescription}</p>
          <button type="button" className="button secondary" onClick={handleResetFilters}>
            {copy.resetFilters}
          </button>
        </div>
      )}

      <section className="blog-medium" aria-live="polite">
        <div className="blog-medium__header">
          <h2>Live from Medium</h2>
          <a href="https://medium.com/@traceremove" target="_blank" rel="noreferrer">
            Open Medium →
          </a>
        </div>
        {mediumStatus === 'loading' ? <p>Syncing latest publications…</p> : null}
        {mediumStatus === 'error' ? <p>Medium sync is temporarily unavailable. Please check back soon.</p> : null}
        {mediumPosts.length > 0 ? (
          <div className="blog-medium__grid">
            {mediumPosts.map((post) => (
              <article key={post.link} className="blog-medium__card">
                <p>{formatLocaleDate(language, post.pubDate)}</p>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <a href={post.link} target="_blank" rel="noreferrer">
                  Read on Medium
                </a>
              </article>
            ))}
          </div>
        ) : null}
      </section>
    </section>
  )
}
const BlogArticlePage = ({ language }: { language: Language }) => {
  const { slug } = useParams<{ slug: string }>()
  const copy = blogArticleCopy[language]
  const [shareUrl, setShareUrl] = useState('')
  const [copied, setCopied] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const bodyRef = useRef<HTMLDivElement | null>(null)

  if (!slug) {
    return <NotFound />
  }

  const article = blogArticles.find((item) => item.slug === slug)

  if (!article) {
    return <NotFound />
  }

  const translation = article.translations[language]
  const articlePath = getBlogArticlePath(language, article.slug)

  if (!translation) {
    return <NotFound />
  }

  const authorProfile = authorProfiles[article.authorId]
  const authorHeadingId = `${slug}-author`
  const authorBioParagraphs = authorProfile ? authorProfile.bio[language] : []
  const authorFocusItems = authorProfile ? authorProfile.focusAreas[language] : []

  const sections = useMemo(
    () =>
      translation.body.map((section, index) => {
        const base = section.heading ? slugifyHeading(section.heading) : `section-${index + 1}`
        return {
          ...section,
          id: `${slug}-${base}`,
        }
      }),
    [slug, translation.body]
  )

  const tocSections = useMemo(() => sections.filter((section) => Boolean(section.heading)), [sections])
  const defaultActiveSection = tocSections[0]?.id ?? sections[0]?.id ?? ''
  const [activeSection, setActiveSection] = useState(defaultActiveSection)
  const activeSectionRef = useRef(defaultActiveSection)

  const relatedArticles = useMemo(() => {
    const ranked = blogArticles
      .filter((item) => item.slug !== article.slug)
      .map((item) => {
        const localized = item.translations[language]
        if (!localized) {
          return null
        }
        return {
          slug: item.slug,
          topic: item.topic,
          translation: localized,
          publishedAt: item.publishedAt,
        }
      })
      .filter(
        (
          value,
        ): value is {
          slug: string
          topic: BlogTopic
          translation: BlogArticleTranslation
          publishedAt: string
        } => value !== null,
      )

    const prioritized = [
      ...ranked.filter((item) => item.topic === article.topic),
      ...ranked.filter((item) => item.topic !== article.topic),
    ]

    const seen = new Set<string>()
    return prioritized.filter((item) => {
      if (seen.has(item.slug)) {
        return false
      }
      seen.add(item.slug)
      return true
    })
  }, [article.slug, article.topic, language])

  const formattedDate = formatLocaleDate(language, article.publishedAt)

  useEffect(() => {
    setActiveSection(defaultActiveSection)
    activeSectionRef.current = defaultActiveSection
  }, [defaultActiveSection])

  useEffect(() => {
    activeSectionRef.current = activeSection
  }, [activeSection])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}${articlePath}`
      setShareUrl(url)
    } else {
      setShareUrl(articlePath)
    }
  }, [articlePath])

  useEffect(() => {
    if (!copied) {
      return
    }
    const timeout = window.setTimeout(() => {
      setCopied(false)
    }, 3200)
    return () => window.clearTimeout(timeout)
  }, [copied])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    let frameId: number | null = null

    const updateScrollState = () => {
      frameId = null

      if (!sections.length) {
        setReadingProgress(0)
        if (activeSectionRef.current) {
          activeSectionRef.current = ''
          setActiveSection('')
        }
        return
      }

      const bodyElement = bodyRef.current

      if (!bodyElement) {
        setReadingProgress(0)
        return
      }

      const start = bodyElement.getBoundingClientRect().top + window.scrollY
      const viewportHeight = window.innerHeight
      const end = start + bodyElement.scrollHeight - viewportHeight

      if (end <= start) {
        setReadingProgress(1)
      } else {
        const ratio = (window.scrollY - start) / (end - start)
        const clamped = Math.min(1, Math.max(0, ratio))
        setReadingProgress((prev) => {
          if (Math.abs(prev - clamped) < 0.01) {
            return prev
          }
          return clamped
        })
      }

      const threshold = window.scrollY + viewportHeight * 0.28
      let candidateId = sections[0]?.id ?? ''

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (!element) {
          continue
        }
        const elementTop = element.getBoundingClientRect().top + window.scrollY
        if (threshold >= elementTop) {
          candidateId = section.id
        } else {
          break
        }
      }

      if (candidateId !== activeSectionRef.current) {
        activeSectionRef.current = candidateId
        setActiveSection(candidateId)
      }
    }

    const requestUpdate = () => {
      if (frameId !== null) {
        return
      }
      frameId = window.requestAnimationFrame(updateScrollState)
    }

    requestUpdate()

    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [sections])

  const handleCopyLink = () => {
    if (!shareUrl) {
      return
    }

    const writeToClipboard = async () => {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        return
      }

      const textarea = document.createElement('textarea')
      textarea.value = shareUrl
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
    }

    writeToClipboard().catch(() => {
      setCopied(false)
    })
  }

  const handleShare = (network: 'linkedin' | 'twitter' | 'email') => {
    if (!shareUrl || typeof window === 'undefined') {
      return
    }

    const encodedUrl = encodeURIComponent(shareUrl)
    const encodedTitle = encodeURIComponent(translation.title)
    const encodedSummary = encodeURIComponent(translation.summary)
    let url = ''

    switch (network) {
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
        break
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
        break
      case 'email':
        url = `mailto:?subject=${encodedTitle}&body=${encodedSummary}%0A%0A${encodedUrl}`
        break
      default:
        break
    }

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer,width=600,height=600')
    }
  }

  const handleTocLinkClick = (event: ReactMouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()

    if (typeof window === 'undefined') {
      return
    }

    const target = document.getElementById(id)
    if (!target) {
      return
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : ('smooth' as ScrollBehavior),
      block: 'start',
    })

    try {
      const url = new URL(window.location.href)
      url.hash = id
      window.history.replaceState(null, '', url.toString())
    } catch (error) {
      console.warn('Unable to update URL hash', error)
    }
  }

  const handleScrollToTop = () => {
    if (typeof window === 'undefined') {
      return
    }

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  const progressPercentage = Math.round(readingProgress * 100)

  return (
    <article className="blog-article">
      <div
        className="blog-article__progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressPercentage}
        aria-label={copy.progressLabel}
      >
        <span className="blog-article__progress-bar" style={{ transform: `scaleX(${Math.max(0, Math.min(1, readingProgress))})` }} />
      </div>
      <header className="blog-article__hero">
        <div className="blog-article__labels">
          <span>{translation.heroKicker}</span>
          <span aria-hidden="true">•</span>
          <span>{translation.topicLabel}</span>
          <span aria-hidden="true">•</span>
          <span>{translation.readTime}</span>
        </div>
        <h1>{translation.title}</h1>
        <p className="blog-article__summary">{translation.summary}</p>
        <p className="blog-article__meta">
          <span>{copy.publishedOn}</span> {formattedDate}
        </p>
        <p className="blog-article__author">{translation.author}</p>
      <div className="blog-article__hero-visual" role="img" aria-label={translation.heroAlt} />
    </header>

    {authorProfile ? (
      <aside
        className={`blog-article__author-card blog-article__author-card--${authorProfile.accent}`}
        aria-labelledby={authorHeadingId}
      >
        <div className="author-card__visual" aria-hidden="true">
          <span className="author-card__initials">{authorProfile.initials}</span>
        </div>
        <div className="author-card__content">
          <p className="author-card__kicker">{copy.authorSpotlight}</p>
          <h2 id={authorHeadingId}>{authorProfile.name[language]}</h2>
          <p className="author-card__role">{authorProfile.role[language]}</p>
          <p className="author-card__quote-label">{copy.authorQuoteLabel}</p>
          <blockquote className="author-card__quote">
            <p>{authorProfile.quote[language]}</p>
          </blockquote>
          {authorBioParagraphs.map((paragraph, index) => (
            <p key={`${authorHeadingId}-bio-${index}`}>{paragraph}</p>
          ))}
          <div className="author-card__focus">
            <p className="author-card__availability">
              <span>{copy.authorAvailabilityLabel}</span>
              <strong>{authorProfile.availability[language]}</strong>
            </p>
            <ul>
              {authorFocusItems.map((item, index) => (
                <li key={`${authorHeadingId}-focus-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="author-card__actions">
            <Link className="button primary" to={getContactPath(language)}>
              {authorProfile.ctaLabel[language]}
            </Link>
            <a
              className="author-card__secondary"
              href={authorProfile.secondaryHref}
              target="_blank"
              rel="noreferrer noopener"
            >
              {authorProfile.secondaryLabel[language]}
            </a>
          </div>
        </div>
      </aside>
    ) : null}

    {tocSections.length > 0 ? (
      <nav className="blog-article__toc" aria-labelledby="blog-article-toc-heading">
        <div className="blog-article__toc-header">
            <div>
              <h2 id="blog-article-toc-heading">{copy.tocTitle}</h2>
              <p>{copy.tocHint}</p>
            </div>
            <span className="blog-article__toc-progress" aria-hidden="true">
              {copy.progressLabel}
              <strong>{progressPercentage}%</strong>
            </span>
          </div>
          <ol className="blog-article__toc-list">
            {tocSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`blog-article__toc-link ${activeSection === section.id ? 'is-active' : ''}`}
                  onClick={(event) => handleTocLinkClick(event, section.id)}
                >
                  <span>{section.heading}</span>
                  <span className="blog-article__toc-indicator" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ol>
          <button type="button" className="blog-article__toc-scrolltop" onClick={handleScrollToTop}>
            {copy.scrollTop}
          </button>
        </nav>
      ) : null}

      <div className="blog-article__body" ref={bodyRef}>
        {sections.map((section) => (
          <section key={section.id} id={section.id} aria-label={section.heading ?? undefined}>
            {section.heading ? <h2>{section.heading}</h2> : null}
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={`${section.id}-paragraph-${paragraphIndex}`}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((item, bulletIndex) => (
                  <li key={`${section.id}-bullet-${bulletIndex}`}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>

      <aside className="blog-article__share" aria-labelledby="blog-article-share-heading">
        <div className="blog-article__share-text">
          <h2 id="blog-article-share-heading">{copy.shareTitle}</h2>
          <p>{copy.shareSubtitle}</p>
        </div>
        <div className="blog-article__share-actions">
          <button type="button" className="share-button share-button--linkedin" onClick={() => handleShare('linkedin')}>
            <span aria-hidden="true" className="share-button__icon">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                <path d="M5.07 3.5a1.57 1.57 0 1 1-3.14 0 1.57 1.57 0 0 1 3.14 0ZM1.92 8.34h3.16V21H1.92V8.34Zm6.05 0h3.03v1.74h.04c.42-.8 1.45-1.64 2.99-1.64 3.2 0 3.79 2.11 3.79 4.85V21h-3.16v-6.79c0-1.62-.03-3.71-2.26-3.71-2.27 0-2.62 1.77-2.62 3.6V21H7.97V8.34Z" />
              </svg>
            </span>
            {copy.shareLinkedIn}
          </button>
          <button type="button" className="share-button share-button--twitter" onClick={() => handleShare('twitter')}>
            <span aria-hidden="true" className="share-button__icon">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                <path d="M20.98 4.57c-.62.28-1.28.47-1.97.56a3.45 3.45 0 0 0 1.51-1.9 6.76 6.76 0 0 1-2.17.85 3.38 3.38 0 0 0-5.78 3.08 9.6 9.6 0 0 1-6.97-3.54 3.37 3.37 0 0 0 1.05 4.5 3.33 3.33 0 0 1-1.53-.42v.04c0 1.64 1.17 3.01 2.72 3.32-.28.07-.58.11-.89.11-.22 0-.43-.02-.63-.06.43 1.32 1.66 2.28 3.13 2.3A6.79 6.79 0 0 1 3 18.4a9.56 9.56 0 0 0 5.18 1.52c6.22 0 9.63-5.18 9.63-9.67 0-.15-.01-.31-.01-.46a6.9 6.9 0 0 0 1.7-1.77Z" />
              </svg>
            </span>
            {copy.shareTwitter}
          </button>
          <button type="button" className="share-button share-button--email" onClick={() => handleShare('email')}>
            <span aria-hidden="true" className="share-button__icon">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                <path d="M20.5 5h-17A1.5 1.5 0 0 0 2 6.5v11A1.5 1.5 0 0 0 3.5 19h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 5Zm-.37 2L12 12.47 3.87 7h16.26ZM3.5 17.5V8.54l8.04 5.15a1 1 0 0 0 1.08 0l7.88-5.05v8.86h-17Z" />
              </svg>
            </span>
            {copy.shareEmail}
          </button>
          <button type="button" className="share-button share-button--copy" onClick={handleCopyLink}>
            <span aria-hidden="true" className="share-button__icon">
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false">
                <path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h9A1.5 1.5 0 0 1 20 3.5v9A1.5 1.5 0 0 1 18.5 14h-9A1.5 1.5 0 0 1 8 12.5v-9Zm1.5-.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-9ZM5.5 6A1.5 1.5 0 0 0 4 7.5v11A1.5 1.5 0 0 0 5.5 20h11a1.5 1.5 0 0 0 1.5-1.5V16h-1v2.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H8V6H5.5Z" />
              </svg>
            </span>
            {copied ? copy.copied : copy.copyLink}
          </button>
        </div>
      </aside>

      {relatedArticles.length ? (
        <section className="blog-article__related" aria-labelledby="blog-article-related-heading">
          <div className="blog-article__related-header">
            <h2 id="blog-article-related-heading">{copy.relatedTitle}</h2>
            <p>{copy.relatedSubtitle}</p>
          </div>
          <div className="blog-article__related-grid">
            {relatedArticles.slice(0, 3).map((item, index) => (
              <article key={item.slug} className="blog-related-card" data-index={index}>
                <div className="blog-related-card__spark" aria-hidden="true">
                  <GrowthSpark variant="light" size="sm" />
                </div>
                <p className="blog-related-card__topic">{item.translation.topicLabel}</p>
                <h3>{item.translation.title}</h3>
                <p className="blog-related-card__summary">{item.translation.summary}</p>
                <div className="blog-related-card__meta">
                  <span>{formatLocaleDate(language, item.publishedAt)}</span>
                  <span aria-hidden="true">•</span>
                  <span>{item.translation.readTime}</span>
                </div>
                <Link className="blog-related-card__link" to={getBlogArticlePath(language, item.slug)}>
                  {copy.relatedCta}
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="blog-article__cta" aria-labelledby="blog-article-cta-heading">
        <div className="blog-article__cta-content">
          <h2 id="blog-article-cta-heading">{copy.ctaTitle}</h2>
          <p>{copy.ctaBody}</p>
        </div>
        <Link className="button primary" to={getContactPath(language)}>
          {copy.ctaButton}
        </Link>
      </section>

      <footer className="blog-article__footer">
        <Link to={getBlogBasePath(language)} className="blog-article__back">
          ← {copy.backToBlog}
        </Link>
      </footer>
    </article>
  )
}

const Header = ({ currentLanguage }: { currentLanguage: Language }) => {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState('')
  const location = useLocation()
  const copy = navCopy[currentLanguage]
  const groups = navigation[currentLanguage] ?? []
  const headerRef = useRef<HTMLElement | null>(null)
  const mobileCloseRef = useRef<HTMLButtonElement | null>(null)

  const serviceDescriptions = useMemo(
    () => ({
      monitoring: 'Continuous monitoring and exposure alerts across major search surfaces.',
      reviews: 'Structured review response and suppression workflows for key listings.',
      search: 'Escalation-first search cleanup with documented progress and proof of work.',
      social: 'Platform-specific social takedown and impersonation response support.',
      data: 'Personal and company data broker removals with recurring verification sweeps.',
      legal: 'Evidence packs and legal-ready documentation for complex disputes.',
    }),
    []
  )

  const coreServiceLinks = useMemo(
    () =>
      groups
        .filter((group) => group.pages.length > 0)
        .slice(0, 4)
        .map((group) => ({
          title: group.serviceName,
          href: group.pages[0].path,
          description:
            serviceDescriptions[group.serviceKey as keyof typeof serviceDescriptions] ??
            'Managed response workflows built for sensitive online reputation cases.',
        })),
    [groups, serviceDescriptions]
  )

  const caseStudyLinks = useMemo(
    () => [
      {
        title: 'Pipeline recovered in 90 days',
        description: 'Law firm recovery outcome with multi-market issue resolution.',
        href: `${getCaseStudiesPath(currentLanguage)}#case-stories-heading`,
      },
      {
        title: '1,200+ malicious pages deindexed',
        description: 'Coordinated suppression campaign across 14 jurisdictions.',
        href: `${getCaseStudiesPath(currentLanguage)}#case-stats-heading`,
      },
      {
        title: '89% faster resolution cycles',
        description: 'White-label partner delivery acceleration with measured SLA gains.',
        href: `${getCaseStudiesPath(currentLanguage)}#case-method-heading`,
      },
    ],
    [currentLanguage]
  )

  const agencyLinks = useMemo(
    () => [
      {
        title: 'Partner program overview',
        description: 'How white-label delivery works for agency teams.',
        href: getPartnersPath(currentLanguage),
      },
      {
        title: 'Capacity tiers',
        description: 'Silver, Gold, and Platinum partner throughput options.',
        href: '/pricing',
      },
      {
        title: 'Co-branded reporting',
        description: 'Client-ready delivery reports and workflow visibility.',
        href: getCommandCenterPath(currentLanguage),
      },
      {
        title: 'Apply to partner',
        description: 'Start onboarding and get a launch plan for your team.',
        href: getJoinPath(currentLanguage),
      },
    ],
    [currentLanguage]
  )

  const pricingLinks = useMemo(
    () => [
      {
        title: 'Monitor plan',
        description: 'Entry-level monitoring and monthly exposure summaries.',
        href: '/pricing',
      },
      {
        title: 'Protect plan',
        description: 'Monitoring plus recurring workflow credits each quarter.',
        href: '/pricing',
      },
      {
        title: 'Business plan',
        description: 'Team workspace, API reporting, and managed support.',
        href: '/pricing',
      },
    ],
    []
  )

  const topNavLinks = useMemo(
    () => [
      { label: copy.caseStudies, href: getCaseStudiesPath(currentLanguage) },
      { label: 'For Agencies', href: getPartnersPath(currentLanguage) },
      { label: 'Pricing', href: '/pricing' },
    ],
    [copy.caseStudies, currentLanguage]
  )

  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!megaOpen) {
      return
    }

    const handleClickAway = (event: MouseEvent | TouchEvent) => {
      if (!headerRef.current) {
        return
      }

      if (!headerRef.current.contains(event.target as Node)) {
        setMegaOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMegaOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickAway)
    document.addEventListener('touchstart', handleClickAway)
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickAway)
      document.removeEventListener('touchstart', handleClickAway)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [megaOpen])

  useEffect(() => {
    if (!mobileOpen) {
      return
    }

    if (!mobileExpandedGroup && groups[0]?.serviceName) {
      setMobileExpandedGroup(groups[0].serviceName)
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }

    const closeButton = mobileCloseRef.current
    closeButton?.focus({ preventScroll: true })

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [groups, mobileExpandedGroup, mobileOpen])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalOverflow
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMobileOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const languageHomes = useMemo(
    () =>
      languages.reduce<Record<Language, string>>((acc, lang) => {
        acc[lang] = getHomePath(lang)
        return acc
      }, { en: '/', fr: '/fr', es: '/es' }),
    []
  )

  const handleCloseMobile = () => {
    setMobileOpen(false)
    setMegaOpen(false)
  }

  const handleBurgerToggle = () => {
    setMegaOpen(false)
    setMobileOpen((prev) => !prev)
  }

  const handleServiceToggle = () => {
    setMobileOpen(false)
    setMegaOpen((prev) => !prev)
  }

  const handleServiceOpen = () => {
    if (!megaOpen) {
      setMegaOpen(true)
    }
  }

  const handleServiceClose = () => {
    setMegaOpen(false)
  }

  const handleServiceKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (!megaOpen) {
        setMobileOpen(false)
        setMegaOpen(true)
      }
      window.setTimeout(() => {
        const firstLink = document.querySelector('.tr-megamenu__link') as HTMLAnchorElement | null
        firstLink?.focus()
      }, 30)
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleServiceToggle()
      return
    }

    if (event.key === 'Escape') {
      setMegaOpen(false)
    }
  }

  return (
    <header ref={headerRef} className={`tr-header ${mobileOpen ? 'is-mobile-open' : ''}`}>
      <div className="tr-header__inner">
        <div className="tr-header__brand">
          <Link to={getHomePath(currentLanguage)} className="tr-logo" aria-label="Traceremove home">
            <img src="/traceremove-mark.svg" alt="" aria-hidden="true" />
            <span>Traceremove</span>
          </Link>
          <button
            type="button"
            className={`tr-burger ${mobileOpen ? 'is-open' : ''}`}
            onClick={handleBurgerToggle}
            aria-expanded={mobileOpen}
            aria-controls="tr-mobile-menu"
            aria-haspopup="dialog"
            aria-label={mobileOpen ? copy.closeMenu : copy.openMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav className="tr-nav" aria-label="Main">
          <button
            type="button"
            className={`tr-nav__trigger ${megaOpen ? 'is-open' : ''}`}
            onClick={handleServiceToggle}
            onMouseEnter={handleServiceOpen}
            onFocus={handleServiceOpen}
            onKeyDown={handleServiceKeyDown}
            aria-expanded={megaOpen}
            aria-controls="tr-megamenu"
            aria-haspopup="true"
          >
            <span className="tr-nav__label">Services</span>
            <span className="tr-nav__indicator" aria-hidden="true" />
            <span className="tr-nav__chevron" aria-hidden="true" />
          </button>
          {topNavLinks.map((item, index) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }: NavLinkRenderArgs) =>
                `tr-nav__link${isActive ? ' is-active' : ''}` + ` tr-nav__link--${index}`
              }
              onMouseEnter={handleServiceClose}
              onFocus={handleServiceClose}
              onClick={handleServiceClose}
            >
              <span className="tr-nav__label">{item.label}</span>
              <span className="tr-nav__indicator" aria-hidden="true" />
            </NavLink>
          ))}
        </nav>

        <div className="tr-header__cta">
          <NavLink className="button primary" to={getJoinPath(currentLanguage)}>
            Request Assessment
          </NavLink>
          <a className="button ghost" href="tel:+16063022958">
            +1 (472) 248 0235
          </a>
        </div>

        <div className="tr-languages" aria-label={copy.languageSwitcherLabel}>
          {languages.map((language) => (
            <NavLink key={language} to={languageHomes[language]} className={`tr-language ${language === currentLanguage ? 'is-active' : ''}`}>
              {languageLabels[language]}
            </NavLink>
          ))}
        </div>
      </div>

      <div id="tr-megamenu" className={`tr-megamenu ${megaOpen ? 'is-open' : ''}`}>
        <div className="tr-megamenu__inner">
          <section className="tr-megamenu__column" aria-labelledby="mega-services-heading">
            <h3 id="mega-services-heading">Services</h3>
            <ul>
              {coreServiceLinks.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }: NavLinkRenderArgs) => `tr-megamenu__link${isActive ? ' is-active' : ''}`}
                    onClick={handleServiceClose}
                  >
                    <span className="tr-megamenu__link-title">{item.title}</span>
                    <span className="tr-megamenu__link-description">{item.description}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>

          <section className="tr-megamenu__column" aria-labelledby="mega-case-studies-heading">
            <h3 id="mega-case-studies-heading">Case Studies</h3>
            <ul>
              {caseStudyLinks.map((item) => (
                <li key={item.title}>
                  <NavLink to={item.href} className="tr-megamenu__link" onClick={handleServiceClose}>
                    <span className="tr-megamenu__link-title">{item.title}</span>
                    <span className="tr-megamenu__link-description">{item.description}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink to={getCaseStudiesPath(currentLanguage)} className="tr-megamenu__all" onClick={handleServiceClose}>
              View all case studies
            </NavLink>
          </section>

          <section className="tr-megamenu__column" aria-labelledby="mega-agencies-heading">
            <h3 id="mega-agencies-heading">For Agencies</h3>
            <ul>
              {agencyLinks.map((item) => (
                <li key={item.title}>
                  <NavLink to={item.href} className="tr-megamenu__link" onClick={handleServiceClose}>
                    <span className="tr-megamenu__link-title">{item.title}</span>
                    <span className="tr-megamenu__link-description">{item.description}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>

          <section className="tr-megamenu__column" aria-labelledby="mega-pricing-heading">
            <h3 id="mega-pricing-heading">Pricing</h3>
            <ul>
              {pricingLinks.map((item) => (
                <li key={item.title}>
                  <NavLink to={item.href} className="tr-megamenu__link" onClick={handleServiceClose}>
                    <span className="tr-megamenu__link-title">{item.title}</span>
                    <span className="tr-megamenu__link-description">{item.description}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <NavLink to="/pricing" className="tr-megamenu__all" onClick={handleServiceClose}>
              View full pricing
            </NavLink>
          </section>
        </div>
      </div>

      <div id="tr-mobile-menu" className={`tr-mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
        <button
          type="button"
          className="tr-mobile-menu__backdrop"
          aria-hidden="true"
          tabIndex={-1}
          onClick={handleCloseMobile}
        />
        <div
          className="tr-mobile-menu__panel"
          role="dialog"
          aria-modal="true"
          aria-label={`${copy.services} navigation`}
        >
          <div className="tr-mobile-menu__header">
            <span className="tr-mobile-menu__title">Traceremove</span>
            <button
              type="button"
              className="tr-mobile-close"
              aria-label={copy.closeMenu}
              onClick={handleCloseMobile}
              ref={mobileCloseRef}
            >
              <span />
              <span />
            </button>
          </div>
          <div className="tr-mobile-menu__inner">
            <div className="tr-mobile-section">
              <h3>Services</h3>
              {groups.map((group) => {
                const isOpen = mobileExpandedGroup === group.serviceName
                return (
                  <Fragment key={group.serviceName}>
                    <button
                      type="button"
                      className={`tr-mobile-group-toggle${isOpen ? ' is-open' : ''}`}
                      onClick={() =>
                        setMobileExpandedGroup((value) =>
                          value === group.serviceName ? '' : group.serviceName
                        )
                      }
                    >
                      {group.serviceName}
                    </button>
                    <ul className={`tr-mobile-group-list${isOpen ? ' is-open' : ''}`}>
                      {group.pages.map((page) => (
                        <li key={page.path}>
                          <NavLink
                            to={page.path}
                            className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                            onClick={handleCloseMobile}
                          >
                            {page.industryName}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </Fragment>
                )
              })}
            </div>
            <div className="tr-mobile-section">
              <h3>{copy.navigationTitle}</h3>
              <NavLink
                to={getHomePath(currentLanguage)}
                end
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.home}
              </NavLink>
              <NavLink
                to={getCaseStudiesPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.caseStudies}
              </NavLink>
              <NavLink
                to={getPartnersPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                For Agencies
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                Pricing
              </NavLink>
              <NavLink
                to={getContactPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.contact}
              </NavLink>
              <NavLink
                to={getJoinPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) =>
                  `tr-mobile-link tr-mobile-link--cta${isActive ? ' is-active' : ''}`
                }
                onClick={handleCloseMobile}
              >
                {copy.joinUs}
              </NavLink>
              <a className="tr-mobile-link" href="mailto:support@traceremove.com" onClick={handleCloseMobile}>
                support@traceremove.com
              </a>
              <a className="tr-mobile-link" href="tel:+16063022958" onClick={handleCloseMobile}>
                +1 (472) 248 0235
              </a>
            </div>
            <div className="tr-mobile-section">
              <h3>{copy.languages}</h3>
              <div className="tr-mobile-languages" aria-label={copy.languageSwitcherLabel}>
                {languages.map((language) => (
                  <NavLink
                    key={language}
                    to={languageHomes[language]}
                    className={`tr-mobile-language${language === currentLanguage ? ' is-active' : ''}`}
                    onClick={handleCloseMobile}
                  >
                    {languageLabels[language]}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const legalCopy: Record<
  Language,
  Record<
    'privacy' | 'terms',
    {
      kicker: string
      title: string
      subtitle: string
      updated: string
      sections: { heading: string; body: string[] }[]
      contactTitle: string
      contactBody: string[]
      ctaLabel: string
      secondaryLabel: string
      secondaryHref: string
      supportPhone: { label: string; href: string }
    }
  >
> = {
  en: {
    privacy: {
      kicker: 'Legal center',
      title: 'Privacy notice',
      subtitle:
        'We treat your data with the same care we apply to our own products. This page explains how we collect, use, and protect personal information across every market we serve.',
      updated: 'Updated: May 2024',
      sections: [
        {
          heading: 'Information we collect',
          body: [
            'We collect the contact details, company information, and context you share when you request proposals, download resources, register for events, or chat with our team.',
            'We also review aggregate usage analytics and log files through privacy-first tooling so we can improve the experience without storing personal identifiers.',
          ],
        },
        {
          heading: 'How we use your information',
          body: [
            'Your information helps us respond to briefs, configure multilingual squads, deliver the services you select, and keep you informed about operational updates tied to your engagement.',
            'We occasionally send research notes and product announcements when you opt in. Every message includes an instant unsubscribe link.',
          ],
        },
        {
          heading: 'How we share and store data',
          body: [
            'We only share data with infrastructure partners who help operate Traceremove—hosting, CRM, analytics, productivity, and payment vendors that are bound by strict confidentiality.',
            'Data is stored in the United States and European Union with encryption at rest and in transit. Access is limited to senior personnel with audited accounts.',
          ],
        },
        {
          heading: 'Data protection commitments',
          body: [
            'We implement role-based access controls, hardware security keys, and continuous monitoring so only the right people can see the right records at the right time.',
            'We help manage and resolve online data exposure',
          ],
        },
        {
          heading: 'Website and domain safeguards',
          body: [
            'The traceremove.com domain is protected by DNSSEC, registry locks, and automated certificate rotation. We run daily malware and integrity scans across our properties.',
            'We monitor for spoofed domains, phishing attempts, and fake listings, triggering rapid takedown workflows so your engagement with us stays secure.',
          ],
        },
        {
          heading: 'Your rights and choices',
          body: [
            'Email privacy@traceremove.com to request a copy of your data, ask for corrections, or demand deletion. We respond to every verified request within thirty days.',
            'You can opt out of marketing communication at any time, and we respect regulations such as GDPR, LGPD, and CCPA across every engagement.',
          ],
        },
      ],
      contactTitle: 'Need to talk with our privacy team?',
      contactBody: [
        'Tell us what you need to clarify and we will respond within one business day with the documentation or next steps required.',
        'We routinely coordinate with in-house counsel to align compliance expectations before launch.',
        'For urgent data protection or domain security concerns, flag the subject line and we will escalate to our security duty officer immediately.',
      ],
      ctaLabel: 'Open the contact form',
      secondaryLabel: 'Email privacy@traceremove.com',
      secondaryHref: 'mailto:privacy@traceremove.com',
      supportPhone: { label: 'Call +1 (472) 248 0235 to reach our privacy desk.', href: 'tel:+16063022958' },
    },
    terms: {
      kicker: 'Legal center',
      title: 'Terms of service',
      subtitle:
        'These terms describe how we partner with clients around the world, the responsibilities each side carries, and the principles that protect your brand and ours.',
      updated: 'Updated: May 2024',
      sections: [
        {
          heading: 'Scope of engagement',
          body: [
            'Each collaboration begins with an approved proposal or statement of work that defines deliverables, languages, timelines, and success metrics.',
            'Requests outside the agreed scope are estimated separately so we can staff the right specialists without slowing ongoing milestones.',
          ],
        },
        {
          heading: 'Intellectual property and confidentiality',
          body: [
            'Traceremove licenses pre-existing frameworks while granting you full rights to bespoke deliverables once invoices are paid in full.',
            'Campaign data, product roadmaps, and customer information remain confidential. We sign mutual NDAs on request and compartmentalise access internally.',
          ],
        },
        {
          heading: 'Security and data protection',
          body: [
            'We maintain ISO-aligned security controls, segmented environments, and incident response playbooks that keep your projects compliant with global privacy legislation.',
            'You agree to safeguard any shared credentials or staging access we provide and alert us immediately if you suspect unauthorised activity.',
          ],
        },
        {
          heading: 'Website and domain protection',
          body: [
            'Traceremove secures owned domains with registry locks, multifactor administration, and continuous monitoring to prevent hijacking or defacement.',
            'We will collaborate on takedown requests, anti-phishing initiatives, and brand protection escalations whenever threats target your digital assets.',
          ],
        },
        {
          heading: 'Fees, invoicing, and scheduling',
          body: [
            'Unless otherwise stated, engagements require a 30% deposit with remaining invoices due net 14 from the issue date.',
            "Pauses or cancellations need ten business days' notice. Work delivered to date will be invoiced, and retainers can roll into future initiatives within six months.",
          ],
        },
        {
          heading: 'Liability and compliance',
          body: [
            'We design programmes aligned with applicable marketing, advertising, and privacy regulations in the markets where you operate.',
            'Traceremove is not liable for indirect damages. If an issue arises, our total liability is capped at the fees paid for the affected services.',
          ],
        },
      ],
      contactTitle: 'Questions about these terms?',
      contactBody: [
        'We are happy to review clauses with your counsel and adjust engagement structures when compliance requirements evolve.',
        'Send us your redlines or schedule a working session so paperwork never slows your launch.',
        'If a request relates to data protection or domain security, note it in the subject so our legal and security leads respond immediately.',
      ],
      ctaLabel: 'Discuss an engagement',
      secondaryLabel: 'Email legal@traceremove.com',
      secondaryHref: 'mailto:legal@traceremove.com',
      supportPhone: { label: 'Call +1 (472) 248 0235 for urgent contract questions.', href: 'tel:+16063022958' },
    },
  },
  fr: {
    privacy: {
      kicker: 'Espace légal',
      title: 'Politique de confidentialité',
      subtitle:
        'Nous traitons vos données avec la même exigence que nos propres actifs numériques. Découvrez comment nous collectons, utilisons et protégeons vos informations.',
      updated: 'Mise à jour : mai 2024',
      sections: [
        {
          heading: 'Données collectées',
          body: [
            'Nous collectons les coordonnées, informations d’entreprise et éléments de contexte que vous partagez via nos formulaires, réservations de rendez-vous, téléchargements et échanges par email.',
            'Nous analysons également des statistiques d’utilisation agrégées avec des outils respectueux de la vie privée afin d’améliorer l’expérience sans stocker d’identifiants personnels.',
          ],
        },
        {
          heading: 'Utilisation des données',
          body: [
            'Ces informations nous permettent de répondre à vos briefs, de constituer des équipes multilingues, de livrer les services convenus et de vous tenir informé de l’avancement.',
            'Nous envoyons ponctuellement des analyses et actualités lorsque vous y consentez. Chaque message comporte un lien de désinscription immédiate.',
          ],
        },
        {
          heading: 'Partage et hébergement',
          body: [
            'Nous partageons vos données uniquement avec les partenaires d’infrastructure indispensables (hébergement, CRM, analytics, facturation) soumis à des clauses de confidentialité strictes.',
            'Les données sont hébergées aux États-Unis et dans l’Union européenne, chiffrées au repos comme en transit, et l’accès est limité à l’équipe dirigeante disposant de comptes audités.',
          ],
        },
        {
          heading: 'Engagements de protection des données',
          body: [
            'Nous appliquons des contrôles d’accès basés sur les rôles, des clés de sécurité matérielles et un monitoring continu pour que seules les personnes autorisées consultent les informations nécessaires.',
            'Nos politiques de conservation prévoient la suppression ou l’anonymisation des données à la fin des missions ou lorsqu’une réglementation l’exige, et chaque partenaire est audité chaque année.',
          ],
        },
        {
          heading: 'Protection du site et des domaines',
          body: [
            'Le domaine traceremove.com est sécurisé par DNSSEC, des verrous registre et une rotation automatisée des certificats. Des scans quotidiens vérifient l’intégrité et l’absence de malware.',
            'Nous surveillons les domaines usurpés, tentatives de phishing et faux avis afin de déclencher des procédures de retrait rapides et de protéger vos échanges avec nous.',
          ],
        },
        {
          heading: 'Vos droits',
          body: [
            'Écrivez à privacy@traceremove.com pour obtenir une copie, demander une correction ou la suppression de vos données. Chaque demande est traitée sous trente jours.',
            'Vous pouvez vous désinscrire des communications marketing à tout moment. Nous respectons le RGPD, la loi Sapin II, la LOPDGDD et les réglementations locales applicables.',
          ],
        },
      ],
      contactTitle: 'Besoin d’échanger avec notre équipe confidentialité ?',
      contactBody: [
        'Partagez votre demande et nous reviendrons vers vous sous un jour ouvré avec la documentation ou les actions nécessaires.',
        'Nous collaborons volontiers avec vos juristes pour cadrer les exigences de conformité avant vos lancements.',
        'Pour toute urgence liée à la protection des données ou à la sécurité de domaine, précisez-le dans l’objet et nous préviendrons immédiatement notre cellule sécurité.',
      ],
      ctaLabel: 'Accéder au formulaire de contact',
      secondaryLabel: 'Écrire à privacy@traceremove.com',
      secondaryHref: 'mailto:privacy@traceremove.com',
      supportPhone: { label: 'Appelez le +1 (472) 248 0235 pour joindre notre cellule conformité.', href: 'tel:+16063022958' },
    },
    terms: {
      kicker: 'Espace légal',
      title: 'Conditions générales de service',
      subtitle:
        'Ces conditions décrivent notre mode de collaboration, les responsabilités partagées et les garanties qui protègent votre marque comme la nôtre.',
      updated: 'Mise à jour : mai 2024',
      sections: [
        {
          heading: 'Périmètre de la mission',
          body: [
            'Chaque collaboration démarre par une proposition ou un contrat (SOW) validé conjointement qui précise livrables, langues, planning et indicateurs de succès.',
            'Les demandes hors périmètre font l’objet d’un chiffrage complémentaire afin de mobiliser les bons spécialistes sans freiner les jalons en cours.',
          ],
        },
        {
          heading: 'Propriété intellectuelle et confidentialité',
          body: [
            'Traceremove concède ses cadres méthodologiques existants et vous transfère les droits sur les livrables sur mesure une fois les factures réglées.',
            'Les données de campagne, feuilles de route produit et informations clients restent confidentielles. Nous signons des NDA réciproques sur simple demande.',
          ],
        },
        {
          heading: 'Honoraires, facturation et calendrier',
          body: [
            'Sauf mention contraire, un acompte de 30 % est requis et le solde est payable à 14 jours date de facture.',
            'Les pauses ou annulations nécessitent un préavis de dix jours ouvrés. Le travail réalisé est facturé et les retainers peuvent être réaffectés à de futures missions sous six mois.',
          ],
        },
        {
          heading: 'Responsabilité et conformité',
          body: [
            'Nous concevons nos programmes dans le respect des réglementations marketing, publicitaires et de protection des données applicables sur vos marchés.',
            'Traceremove n’est pas responsable des dommages indirects. En cas de litige, notre responsabilité est limitée aux montants réglés pour les services concernés.',
          ],
        },
        {
          heading: 'Sécurité et protection des données',
          body: [
            'Nous maintenons des contrôles de sécurité alignés sur les standards internationaux, des environnements segmentés et des plans de réponse aux incidents pour préserver votre conformité.',
            'Vous vous engagez à protéger les identifiants ou accès provisoires partagés et à nous alerter immédiatement en cas d’activité suspecte.',
          ],
        },
        {
          heading: 'Protection du site et des noms de domaine',
          body: [
            'Traceremove sécurise ses domaines grâce aux verrous registre, à l’authentification multifacteur et à une surveillance continue contre tout détournement ou défiguration.',
            'Nous coopérons avec vous pour traiter les demandes de retrait, lutter contre le phishing et gérer les alertes de protection de marque liées à vos actifs digitaux.',
          ],
        },
      ],
      contactTitle: 'Des questions sur ces conditions ?',
      contactBody: [
        'Nous passons volontiers vos clauses avec vos juristes et adaptons nos modalités lorsque vos obligations de conformité évoluent.',
        'Transmettez-nous vos remarques ou planifions un échange pour finaliser la signature sans retarder votre lancement.',
        'Mentionnez toute urgence data protection ou sécurité de domaine pour que nous mobilisions immédiatement notre référent légal et sécurité.',
      ],
      ctaLabel: 'Discuter d’une collaboration',
      secondaryLabel: 'Écrire à legal@traceremove.com',
      secondaryHref: 'mailto:legal@traceremove.com',
      supportPhone: { label: 'Appelez le +1 (472) 248 0235 pour toute question contractuelle urgente.', href: 'tel:+16063022958' },
    },
  },
  es: {
    privacy: {
      kicker: 'Centro legal',
      title: 'Política de privacidad',
      subtitle:
        'Tratamos tus datos con el mismo rigor que aplicamos a nuestros propios sistemas. Aquí detallamos cómo los recopilamos, utilizamos y protegemos.',
      updated: 'Actualizado: mayo de 2024',
      sections: [
        {
          heading: 'Información que recopilamos',
          body: [
            'Recopilamos los datos de contacto, información de la empresa y contexto que compartes al solicitar propuestas, descargar recursos, registrarte a eventos o conversar con nuestro equipo.',
            'También analizamos métricas agregadas con herramientas de analítica respetuosas con la privacidad para mejorar la experiencia sin almacenar identificadores personales.',
          ],
        },
        {
          heading: 'Cómo utilizamos la información',
          body: [
            'Usamos tus datos para responder a los briefs, formar equipos multilingües, entregar los servicios acordados y mantenerte al tanto de la operación.',
            'Enviamos ocasionalmente investigaciones y novedades cuando lo autorizas, y cada mensaje incluye un enlace para darte de baja de inmediato.',
          ],
        },
        {
          heading: 'Cómo compartimos y almacenamos los datos',
          body: [
            'Solo compartimos información con proveedores esenciales de infraestructura: alojamiento, CRM, analítica, colaboración y pagos bajo acuerdos de confidencialidad estrictos.',
            'Los datos se almacenan en Estados Unidos y la Unión Europea con cifrado en reposo y en tránsito, y el acceso se limita al personal senior con cuentas auditadas.',
          ],
        },
        {
          heading: 'Compromisos de protección de datos',
          body: [
            'Aplicamos controles de acceso basados en roles, llaves de seguridad físicas y monitorización continua para que únicamente el personal autorizado acceda a la información necesaria.',
            'Nuestros calendarios de retención contemplan la eliminación o anonimización al finalizar los contratos o cuando lo exigen las normativas, y auditamos a cada proveedor anualmente.',
          ],
        },
        {
          heading: 'Protección del sitio y del dominio',
          body: [
            'El dominio traceremove.com está protegido con DNSSEC, bloqueos de registro y rotación automática de certificados. Realizamos escaneos diarios de malware e integridad en todos nuestros activos.',
            'Vigilamos dominios fraudulentos, intentos de phishing y listados falsos para activar flujos rápidos de retirada y mantener seguras tus interacciones con nosotros.',
          ],
        },
        {
          heading: 'Tus derechos y opciones',
          body: [
            'Escríbenos a privacy@traceremove.com para solicitar una copia de tus datos, corregir información o pedir su eliminación. Respondemos a todas las solicitudes verificadas en menos de treinta días.',
            'Puedes darte de baja de las comunicaciones en cualquier momento. Cumplimos con GDPR, LGPD, CCPA y la normativa local aplicable en cada región.',
          ],
        },
      ],
      contactTitle: '¿Necesitas hablar con nuestro equipo de privacidad?',
      contactBody: [
        'Cuéntanos tu solicitud y responderemos en un día laborable con la documentación o acciones necesarias.',
        'También coordinamos requisitos regulatorios específicos para tus lanzamientos multinacionales.',
        'Si detectas una urgencia relacionada con protección de datos o seguridad de dominios, indícalo en el asunto y activaremos de inmediato a nuestro responsable de seguridad.',
      ],
      ctaLabel: 'Abrir el formulario de contacto',
      secondaryLabel: 'Escribe a privacy@traceremove.com',
      secondaryHref: 'mailto:privacy@traceremove.com',
      supportPhone: { label: 'Llámanos al +1 (472) 248 0235 y pide hablar con nuestro equipo de privacidad.', href: 'tel:+16063022958' },
    },
    terms: {
      kicker: 'Centro legal',
      title: 'Términos del servicio',
      subtitle:
        'Estas condiciones resumen la forma en la que colaboramos, las responsabilidades de cada parte y las garantías que protegen tu marca y la nuestra.',
      updated: 'Actualizado: mayo de 2024',
      sections: [
        {
          heading: 'Alcance de la colaboración',
          body: [
            'Cada proyecto comienza con una propuesta o statement of work aprobado que define entregables, idiomas, cronograma y métricas clave.',
            'Las solicitudes fuera de alcance se presupuestan aparte para asignar a los especialistas adecuados sin detener los hitos en curso.',
          ],
        },
        {
          heading: 'Propiedad intelectual y confidencialidad',
          body: [
            'Traceremove licencia sus marcos existentes y te concede los derechos sobre los entregables personalizados una vez que las facturas están pagadas.',
            'Los datos de campañas, hojas de ruta de producto e información de clientes permanecen confidenciales. Firmamos acuerdos de confidencialidad recíprocos cuando lo solicitas.',
          ],
        },
        {
          heading: 'Honorarios, facturación y calendarios',
          body: [
            'Salvo indicación contraria, requerimos un anticipo del 30 % y el resto de las facturas se pagan a 14 días fecha de emisión.',
            'Las pausas o cancelaciones requieren un aviso de diez días hábiles. El trabajo ya entregado se facturará y los retainers podrán aplicarse a proyectos futuros dentro de los seis meses.',
          ],
        },
        {
          heading: 'Responsabilidad y cumplimiento',
          body: [
            'Diseñamos programas alineados con las normativas de marketing, publicidad y privacidad de los mercados donde operas.',
            'Traceremove no se hace responsable de daños indirectos. Si surge un problema, nuestra responsabilidad total se limita a los honorarios pagados por los servicios implicados.',
          ],
        },
        {
          heading: 'Seguridad y protección de datos',
          body: [
            'Mantenemos controles de seguridad alineados con estándares internacionales, entornos segmentados y planes de respuesta ante incidentes para salvaguardar tu cumplimiento.',
            'Te comprometes a proteger las credenciales o accesos provisionales que compartamos y a notificarnos de inmediato si detectas actividad no autorizada.',
          ],
        },
        {
          heading: 'Protección del sitio web y los dominios',
          body: [
            'Traceremove asegura sus dominios con bloqueos de registro, administración con multifactor y monitorización continua para evitar secuestros o desfiguraciones.',
            'Colaboraremos contigo en solicitudes de retirada, iniciativas anti-phishing y escalados de protección de marca cuando surjan amenazas contra tus activos digitales.',
          ],
        },
      ],
      contactTitle: '¿Dudas sobre estos términos?',
      contactBody: [
        'Con gusto revisamos las cláusulas con tu equipo legal y adaptamos los acuerdos cuando cambian los requisitos de cumplimiento.',
        'Comparte tus comentarios o agenda una llamada para cerrar la documentación sin retrasar el lanzamiento.',
        'Si la consulta implica protección de datos o seguridad de dominios, avísanos para activar de inmediato a nuestro equipo legal y de seguridad.',
      ],
      ctaLabel: 'Hablar sobre una colaboración',
      secondaryLabel: 'Comparte términos en legal@traceremove.com',
      secondaryHref: 'mailto:legal@traceremove.com',
      supportPhone: { label: 'Habla con nosotros en el +1 (472) 248 0235 para resolver preguntas contractuales urgentes.', href: 'tel:+16063022958' },
    },
  },
}

const LegalPage = ({ language, variant }: { language: Language; variant: 'privacy' | 'terms' }) => {
  const copy = legalCopy[language][variant]

  return (
    <section className={`legal-page legal-page--${variant}`}>
      <header className="legal-hero">
        <p className="legal-kicker">{copy.kicker}</p>
        <h1>{copy.title}</h1>
        <p className="legal-subtitle">{copy.subtitle}</p>
        <p className="legal-updated">{copy.updated}</p>
        <GrowthSpark variant="light" size="md" className="legal-hero__spark" ariaLabel={copy.title} />
      </header>
      {copy.sections.map((section, index) => (
        <article
          key={`${variant}-${section.heading}`}
          className="legal-section"
          style={{ animationDelay: `${index * 0.12}s` } as CSSProperties}
        >
          <h2>{section.heading}</h2>
          {section.body.map((paragraph, paragraphIndex) => (
            <p key={`${section.heading}-${paragraphIndex}`}>{paragraph}</p>
          ))}
        </article>
      ))}
      <section className="legal-cta">
        <div className="legal-cta__text">
          <h2>{copy.contactTitle}</h2>
          {copy.contactBody.map((paragraph, index) => (
            <p key={`${variant}-cta-${index}`}>{paragraph}</p>
          ))}
          <p>
            <a href={copy.supportPhone.href}>{copy.supportPhone.label}</a>
          </p>
        </div>
        <div className="legal-cta__actions">
          <NavLink className="button primary" to={getContactPath(language)}>
            {copy.ctaLabel}
          </NavLink>
          <a className="button ghost" href={copy.secondaryHref}>
            {copy.secondaryLabel}
          </a>
        </div>
      </section>
    </section>
  )
}

const footerCopy: Record<
  Language,
  {
    rights: string
    studio: string
    founder: string
    detailHeading: string
    detailPoints: string[]
    officeHeading: string
    officeLocations: string[]
    hotlineHeading: string
    hotlineBody: string
    servicesPricing: string
    about: string
    caseStudies: string
    team: string
    resources: string
    academy: string
    media: string
    commandCenter: string
    trust: string
    faq: string
    partners: string
    blog: string
    contact: string
    call: string
    join: string
    privacy: string
    terms: string
    refund: string
    subscribeTitle: string
    subscribeSubtitle: string
    subscribePlaceholder: string
    subscribeCta: string
    subscribeSuccess: string
  }
> = {
  en: {
    rights: 'All rights reserved.',
    studio: 'Traceremove is a multilingual digital platform crafting growth systems for bold teams.',
    founder: 'Founder & CEO TraceRemove Advisor',
    detailHeading: 'Rapid protection details',
    detailPoints: [
      '24/7 brand protection hotline across English, French, and Spanish markets.',
      'Real-time monitoring across search, marketplaces, and review networks.',
      'Domain recovery desk coordinating registrars, hosts, and legal partners.',
    ],
    officeHeading: 'Presence hubs',
    officeLocations: ['Montréal · North America HQ', 'Paris · EU lead desk', 'Madrid · Iberia growth pod'],
    hotlineHeading: 'Critical escalation',
    hotlineBody: 'Message or call +1 (472) 248 0235 for structured workflow sprints — priority response SLA.',
    servicesPricing: 'Services & pricing',
    about: 'About us',
    caseStudies: 'Case studies',
    team: 'Team',
    resources: 'Resources',
    academy: 'Academy',
    media: 'Media',
    commandCenter: 'Command center',
    trust: 'Trust center',
    faq: 'FAQ',
    partners: 'Partners',
    blog: 'Blog',
    contact: 'Contact',
    call: 'Call us',
    join: 'Join us',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
    refund: 'Refund policy',
    subscribeTitle: 'Stay in the loop',
    subscribeSubtitle: 'We help manage and resolve online data exposure',
    subscribePlaceholder: 'Your email address',
    subscribeCta: 'Subscribe',
    subscribeSuccess: 'Thanks for subscribing — check your inbox for a confirmation.',
  },
  fr: {
    rights: 'Tous droits réservés.',
    studio:
      "Traceremove est une plateforme digitale multilingue qui conçoit des systèmes de croissance pour les équipes ambitieuses.",
    founder: 'Fondateur & CEO TraceRemove Advisor',
    detailHeading: 'Détails de protection',
    detailPoints: [
      'Hotline brand safety 24/7 en anglais, français et espagnol.',
      'Veille en temps réel sur les moteurs de recherche, marketplaces et plateformes d’avis.',
      'Cellule de récupération de domaines avec registraires, hébergeurs et partenaires juridiques.',
    ],
    officeHeading: 'Pôles de présence',
    officeLocations: ['Montréal · QG Amériques', 'Paris · Hub Europe', 'Madrid · Cellule Ibérie'],
    hotlineHeading: 'Escalade critique',
    hotlineBody: 'Écrivez ou appelez le +1 (472) 248 0235 pour une suppression urgente — réponse sous 60 minutes.',
    servicesPricing: 'Services & tarifs',
    about: 'À propos',
    caseStudies: 'Études de cas',
    team: 'Équipe',
    resources: 'Ressources',
    academy: 'Académie',
    media: 'Presse',
    commandCenter: 'Centre de commandement',
    trust: 'Centre de confiance',
    faq: 'FAQ',
    partners: 'Partenaires',
    blog: 'Blog',
    contact: 'Contact',
    call: 'Appelez-nous',
    join: 'Rejoignez-nous',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales',
    refund: 'Politique de remboursement',
    subscribeTitle: 'Restez informé',
    subscribeSubtitle: 'Recevez frameworks, playbooks et notes de version de notre laboratoire growth & réputation.',
    subscribePlaceholder: 'Votre adresse email',
    subscribeCta: 'S’abonner',
    subscribeSuccess: 'Merci pour votre abonnement — vérifiez votre boîte de réception pour confirmer.',
  },
  es: {
    rights: 'Todos los derechos reservados.',
    studio: 'Traceremove es una plataforma digital multilingüe que crea sistemas de crecimiento para equipos ambiciosos.',
    founder: 'Fundador y CEO TraceRemove Advisor',
    detailHeading: 'Detalles de protección',
    detailPoints: [
      'Línea directa de protección de marca 24/7 en inglés, francés y español.',
      'Monitoreo en tiempo real de buscadores, marketplaces y portales de reseñas.',
      'Mesa de recuperación de dominios con registradores, hosts y aliados legales.',
    ],
    officeHeading: 'Centros de presencia',
    officeLocations: ['Montreal · HQ Norteamérica', 'París · Oficina Europa', 'Madrid · Equipo Iberia'],
    hotlineHeading: 'Escalada crítica',
    hotlineBody: 'Escríbenos o llama al +1 (472) 248 0235 para urgencias — respondemos en menos de 60 minutos.',
    servicesPricing: 'Servicios y precios',
    about: 'Sobre nosotros',
    caseStudies: 'Casos de éxito',
    team: 'Equipo',
    resources: 'Recursos',
    academy: 'Academia',
    media: 'Prensa',
    commandCenter: 'Centro de comando',
    trust: 'Centro de confianza',
    faq: 'FAQ',
    partners: 'Partners',
    blog: 'Blog',
    contact: 'Contacto',
    call: 'Llámanos',
    join: 'Únete',
    privacy: 'Política de privacidad',
    terms: 'Términos del servicio',
    refund: 'Política de reembolso',
    subscribeTitle: 'Mantente al día',
    subscribeSubtitle: 'Recibe frameworks, playbooks y notas de lanzamiento de nuestro laboratorio de crecimiento y reputación.',
    subscribePlaceholder: 'Tu correo electrónico',
    subscribeCta: 'Suscribirme',
    subscribeSuccess: 'Gracias por suscribirte — revisa tu bandeja de entrada para confirmar.',
  },
}

const callWidgetCopy: Record<Language, { label: string; assist: string }> = {
  en: { label: 'Call +1 (472) 248 0235', assist: 'Speak with TraceRemove Advisor' },
  fr: { label: 'Appelez +1 (472) 248 0235', assist: 'Échangez avec TraceRemove Advisor' },
  es: { label: 'Llama al +1 (472) 248 0235', assist: 'Habla con TraceRemove Advisor' },
}

type SocialKey =
  | 'whatsapp'
  | 'instagram'
  | 'facebook'
  | 'medium'
  | 'substack'
  | 'linkedin'
  | 'behance'
  | 'dribbble'

const socialLinks: { key: SocialKey; href: string }[] = [
  { key: 'whatsapp', href: 'https://wa.me/16063022958' },
  { key: 'instagram', href: 'https://www.instagram.com/traceremove' },
  { key: 'facebook', href: 'https://www.facebook.com/traceremove' },
  { key: 'medium', href: 'https://medium.com/@traceremove' },
  { key: 'substack', href: 'https://traceremove.substack.com' },
  { key: 'linkedin', href: 'https://www.linkedin.com/company/traceremove' },
  { key: 'behance', href: 'https://www.behance.net/traceremove' },
  { key: 'dribbble', href: 'https://dribbble.com/traceremove' },
]

const footerSocialLabels: Record<Language, Record<SocialKey, string>> = {
  en: {
    whatsapp: 'Message us on WhatsApp',
    instagram: 'Traceremove on Instagram',
    facebook: 'Traceremove on Facebook',
    medium: 'Traceremove on Medium',
    substack: 'Traceremove on Substack',
    linkedin: 'Traceremove on LinkedIn',
    behance: 'Traceremove portfolio on Behance',
    dribbble: 'Traceremove shots on Dribbble',
  },
  fr: {
    whatsapp: 'Écrivez-nous sur WhatsApp',
    instagram: 'Traceremove sur Instagram',
    facebook: 'Traceremove sur Facebook',
    medium: 'Traceremove sur Medium',
    substack: 'Traceremove sur Substack',
    linkedin: 'Traceremove sur LinkedIn',
    behance: 'Portfolio Traceremove sur Behance',
    dribbble: 'Créations Traceremove sur Dribbble',
  },
  es: {
    whatsapp: 'Escríbenos por WhatsApp',
    instagram: 'Traceremove en Instagram',
    facebook: 'Traceremove en Facebook',
    medium: 'Traceremove en Medium',
    substack: 'Traceremove en Substack',
    linkedin: 'Traceremove en LinkedIn',
    behance: 'Portafolio de Traceremove en Behance',
    dribbble: 'Proyectos de Traceremove en Dribbble',
  },
}

const renderSocialIcon = (key: SocialKey): JSX.Element | null => {
  switch (key) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4.983 3.5A2.484 2.484 0 0 1 7.5 1a2.5 2.5 0 1 1-2.517 2.5Zm.184 4.25h4.667v14.75H5.167Zm6.583 0h4.48v2.017h.064c.623-1.182 2.145-2.43 4.416-2.43 4.723 0 5.6 3.11 5.6 7.157v8.006h-4.667v-7.1c0-1.694-.031-3.873-2.362-3.873-2.366 0-2.729 1.85-2.729 3.756v7.217h-4.802Z" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2a10 10 0 0 0-8.66 15.15L3 22l4.08-1.28A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.07-1.11l-.29-.17-2.42.76.8-2.34-.18-.3A8 8 0 1 1 12 20Zm4.33-5.1c-.24-.12-1.4-.7-1.62-.78s-.38-.12-.54.12-.62.78-.76.94-.28.18-.52.06a6.39 6.39 0 0 1-1.87-1.15 7.07 7.07 0 0 1-1.32-1.64c-.14-.24 0-.37.1-.49.1-.1.24-.28.36-.42s.16-.24.24-.4a.46.46 0 0 0 0-.42c-.06-.12-.54-1.3-.74-1.77s-.4-.4-.54-.4h-.46a.9.9 0 0 0-.66.3 2.79 2.79 0 0 0-.88 2.07 4.82 4.82 0 0 0 1 2.53A10.89 10.89 0 0 0 11 16.7a3.52 3.52 0 0 0 1.95.51 2.84 2.84 0 0 0 1.86-.6 2.19 2.19 0 0 0 .72-1.36c.06-.12 0-.18-.12-.24Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M8 2h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.5a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
        </svg>
      )
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M13.5 21.75v-7.62h2.56l.38-2.96H13.5V9a1.1 1.1 0 0 1 1.24-1.25h1.7V4.99a20.8 20.8 0 0 0-2.5-.14c-2.47 0-4.15 1.5-4.15 4.24v2.08H6.7v2.96h3.09v7.62Z" />
        </svg>
      )
    case 'medium':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 7.25a.75.75 0 0 1 .6-.73l2.88-.6a.75.75 0 0 1 .86.48l2.2 5.92 2.14-5.7a.75.75 0 0 1 .88-.47l2.78.65a.75.75 0 0 1 .57.73v10.34a.75.75 0 0 1-.57.73l-2.46.58a.75.75 0 0 1-.91-.52l-2.43-7.4-2.77 7.52a.75.75 0 0 1-.87.48l-2.88-.6A.75.75 0 0 1 4 18.48Z" />
        </svg>
      )
    case 'substack':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 5.5V3h16v2.5Zm0 2.5h16v2.5L12 14.5 4 10.5Zm0 4.5 8 4 8-4V21L12 17 4 21Z" />
        </svg>
      )
    case 'behance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4.4 5.5h4.9a4 4 0 0 1 4 3.9c0 1.6-.8 2.7-2.3 3.2 1.9.4 3 1.8 3 3.7a4.4 4.4 0 0 1-4.6 4.3H4.4Zm3 6.5h1.9a1.8 1.8 0 0 0 0-3.6H7.4Zm0 6.4h2.1a2 2 0 1 0 0-3.9H7.4Zm12-4.6c0-3.2 1.9-5.5 5-5.5 3.8 0 5 2.8 5 5.7l-.1.8h-6.8c.1 1.6.9 2.6 2.6 2.6a2.6 2.6 0 0 0 2.5-1.2l1.9 1.4a5.1 5.1 0 0 1-4.4 2.2c-3.4 0-5.7-2.2-5.7-5.9Zm2.8-1.3h4.1c-.1-1.4-.9-2.3-2-2.3-1.3 0-2 .8-2.1 2.3Zm-.7-6.2h5.6v1.7h-5.6Z" />
        </svg>
      )
    case 'dribbble':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2a10 10 0 1 1-9.96 10A10 10 0 0 1 12 2Zm5.9 14.8a15.9 15.9 0 0 0-5-1.1 25 25 0 0 1 1.4 5.3 8.4 8.4 0 0 0 3.6-4.2ZM13 21.6a22.6 22.6 0 0 0-1.4-5.5c-3 .9-5.6 2.6-7.5 4.9a8.4 8.4 0 0 0 8.9.6Zm-9.4-2.5c2-2.4 4.8-4.2 8-5.1l-.1-.2a21.7 21.7 0 0 1-2.4-6.2A8.4 8.4 0 0 0 3.6 19.1Zm5-12.9a19 19 0 0 0 2.2 5.8 15.3 15.3 0 0 1 6-1.4 8.3 8.3 0 0 0-8.2-4.4ZM18 12a13 13 0 0 0-6.8 1.6l.2.4a24.1 24.1 0 0 1 1.5 5 8.4 8.4 0 0 0 5.3-7Z" />
        </svg>
      )
    default:
      return null
  }
}

const CallWidget = ({ currentLanguage }: { currentLanguage: Language }) => {
  const copy = callWidgetCopy[currentLanguage]

  return (
    <a className="call-widget" href="tel:+16063022958" aria-label={`${copy.label}. ${copy.assist}`}>
      <span className="call-widget__icon" aria-hidden="true">📞</span>
      <span className="call-widget__text">
        <span className="call-widget__label">{copy.label}</span>
        <span className="call-widget__assist">{copy.assist}</span>
      </span>
    </a>
  )
}

type LeadPayload = {
  source: 'chatbot' | 'contact'
  name: string
  email: string
  company: string
  message: string
  createdAt: string
  page: string
  utmSource: string
  leadScore: number
}

const persistLead = async (lead: LeadPayload) => {
  const existing = localStorage.getItem('traceremove_leads')
  const parsed = existing ? (JSON.parse(existing) as LeadPayload[]) : []
  localStorage.setItem('traceremove_leads', JSON.stringify([lead, ...parsed].slice(0, 100)))

  try {
    await Promise.allSettled([
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      }),
      fetch('/api/crm/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      }),
    ])
  } catch {
    // Offline-safe fallback already handled via localStorage.
  }

  const win = window as Window & { dataLayer?: unknown[] }
  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push({ event: 'lead_capture', payload: lead })
  }
}

const chatbotCopy: Record<Language, { title: string; subtitle: string; placeholder: string; send: string; collect: string; success: string; defaultAnswer: string }> = {
  en: {
    title: 'Live assistant',
    subtitle: 'Replies in real time and logs qualified leads.',
    placeholder: 'Tell us your challenge…',
    send: 'Send',
    collect: 'Share contacts for follow-up',
    success: 'Thanks — we logged your request.',
    defaultAnswer: 'Thanks! Our team can start with a 30-minute response plan. Leave your contact and we will reach out today.',
  },
  fr: {
    title: 'Assistant en direct',
    subtitle: 'Réponses en temps réel et qualification des leads.',
    placeholder: 'Décrivez votre besoin…',
    send: 'Envoyer',
    collect: 'Partagez vos contacts pour un suivi',
    success: 'Merci — votre demande est enregistrée.',
    defaultAnswer: 'Merci ! Nous pouvons démarrer avec un plan de réponse en 30 minutes. Laissez vos coordonnées et nous vous contactons aujourd’hui.',
  },
  es: {
    title: 'Asistente en vivo',
    subtitle: 'Respuestas en tiempo real y captura de leads.',
    placeholder: 'Cuéntanos tu reto…',
    send: 'Enviar',
    collect: 'Comparte tus datos para seguimiento',
    success: 'Gracias — guardamos tu solicitud.',
    defaultAnswer: '¡Gracias! Podemos empezar con un plan de respuesta en 30 minutos. Deja tus datos y te contactamos hoy.',
  },
}

const LiveChatbot = ({ currentLanguage }: { currentLanguage: Language }) => {
  const copy = chatbotCopy[currentLanguage]
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ id: number; role: 'user' | 'bot'; text: string }[]>([])
  const [lead, setLead] = useState({ name: '', email: '', company: '' })
  const [saved, setSaved] = useState(false)

  const pushBotMessage = (text: string) => {
    const id = Date.now()
    const chunks = text.split(' ')
    setMessages((prev) => [...prev, { id, role: 'bot', text: '' }])
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setMessages((prev) => prev.map((message) => (message.id === id ? { ...message, text: chunks.slice(0, index).join(' ') } : message)))
      if (index >= chunks.length) {
        window.clearInterval(timer)
      }
    }, 40)
  }

  const handleSend = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = input.trim()
    if (!value) {
      return
    }
    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: value }])
    setInput('')
    const answer = value.length > 120 ? copy.defaultAnswer : `${copy.defaultAnswer} (${value.slice(0, 48)})`
    window.setTimeout(() => pushBotMessage(answer), 120)
  }

  const handleLeadSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!lead.name || !lead.email) {
      return
    }
    const latestMessage = [...messages].reverse().find((message) => message.role === 'user')?.text ?? ''
    const params = new URLSearchParams(window.location.search)
    await persistLead({
      source: 'chatbot',
      name: lead.name,
      email: lead.email,
      company: lead.company,
      message: latestMessage,
      createdAt: new Date().toISOString(),
      page: window.location.pathname,
      utmSource: params.get('utm_source') ?? 'direct',
      leadScore: Math.min(100, 50 + (latestMessage.length > 40 ? 25 : 0) + (lead.company ? 25 : 0)),
    })
    setSaved(true)
  }

  return (
    <aside className={`live-chat ${open ? 'is-open' : ''}`} aria-live="polite">
      <button type="button" className="live-chat__toggle" onClick={() => setOpen((state) => !state)}>
        💬 {copy.title}
      </button>
      {open && (
        <div className="live-chat__panel">
          <p className="live-chat__subtitle">{copy.subtitle}</p>
          <div className="live-chat__messages">
            {messages.map((message) => (
              <p key={message.id} className={`live-chat__message live-chat__message--${message.role}`}>
                {message.text}
              </p>
            ))}
          </div>
          <form className="live-chat__composer" onSubmit={handleSend}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder={copy.placeholder} />
            <button type="submit">{copy.send}</button>
          </form>
          <form className="live-chat__lead" onSubmit={handleLeadSave}>
            <p>{copy.collect}</p>
            <input placeholder="Name" value={lead.name} onChange={(event) => setLead((prev) => ({ ...prev, name: event.target.value }))} />
            <input placeholder="Email" type="email" value={lead.email} onChange={(event) => setLead((prev) => ({ ...prev, email: event.target.value }))} />
            <input placeholder="Company" value={lead.company} onChange={(event) => setLead((prev) => ({ ...prev, company: event.target.value }))} />
            <button type="submit">OK</button>
            {saved && <span className="live-chat__saved">{copy.success}</span>}
          </form>
        </div>
      )}
    </aside>
  )
}

const Footer = ({ currentLanguage }: { currentLanguage: Language }) => {
  return (
    <footer style={{ background: '#070B16', color: '#fff', padding: '56px 24px 22px' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.35fr 1fr 1fr 1fr',
          gap: '24px',
        }}
      >
        <div>
          <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '30px', color: 'var(--white)' }}>Traceremove</p>
          <p style={{ margin: '12px 0 18px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
            Structured tools and managed workflows to identify, monitor, and resolve online data exposure for
            businesses and agency partners worldwide.
          </p>
          <div style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.82)', fontSize: '13px', lineHeight: 1.7 }}>
            <div>TRACEREMOVE LLC</div>
            <div>750 Manhattan Ave</div>
            <div>Brooklyn, NY 11222, USA</div>
            <div>support@traceremove.com</div>
          </div>
        </div>

        <div>
          <p style={{ margin: '0 0 12px', fontWeight: 700, color: 'var(--white)' }}>Services</p>
          {['Monitoring and Alerts', 'Workflow Credits', 'Managed Programmes', 'Cybersecurity Module'].map((item) => (
            <a
              key={item}
              href="#"
              style={{ display: 'block', marginBottom: '8px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.35)'
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <div>
          <p style={{ margin: '0 0 12px', fontWeight: 700, color: 'var(--white)' }}>Partners</p>
          {['Partner Overview', 'Silver / Gold / Platinum', 'Apply as Partner', 'Partner Portal'].map((item) => (
            <a
              key={item}
              href="#"
              style={{ display: 'block', marginBottom: '8px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.35)'
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <div>
          <p style={{ margin: '0 0 12px', fontWeight: 700, color: 'var(--white)' }}>Company</p>
          {['About', 'Case Studies', 'Trust Center', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              style={{ display: 'block', marginBottom: '8px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.35)'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '28px auto 0',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255,255,255,0.14)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', color: 'rgba(255,255,255,0.7)' }}>
          <span>2025 TraceRemove LLC</span>
          {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((item) => (
            <a
              key={item}
              href="#"
              style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.35)'
              }}
            >
              {item}
            </a>
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.72)' }}>
          New York, NY / Serving clients globally
        </div>
      </div>
    </footer>
  )
}

const AppLayout = ({ children }: { children: ReactNode }) => {
  const currentLanguage = useCurrentLanguage()
  const location = useLocation()
  const [isRouting, setIsRouting] = useState(false)

  useEffect(() => {
    setIsRouting(true)
    const timer = window.setTimeout(() => setIsRouting(false), 360)
    return () => window.clearTimeout(timer)
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    const normalizedPath = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`
    const lookupPath = routeSeo[location.pathname] ? location.pathname : normalizedPath
    const seo = routeSeo[lookupPath] ?? baseSeo
    document.title = seo.title

    const ensureMeta = (name: string, content: string) => {
      let element = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    const ensurePropertyMeta = (property: string, content: string) => {
      let element = document.head.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    ensureMeta('description', seo.description)
    ensureMeta('robots', 'index, follow, max-image-preview:large')
    ensurePropertyMeta('og:title', seo.title)
    ensurePropertyMeta('og:description', seo.description)
    ensurePropertyMeta('og:type', 'website')
    ensurePropertyMeta('og:url', seo.ogUrl ?? `${window.location.origin}${location.pathname}`)

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.href = `${window.location.origin}${location.pathname}`
  }, [currentLanguage, location.pathname])

  useEffect(() => {
    const schemaId = 'traceremove-structured-data'
    const script = (document.getElementById(schemaId) as HTMLScriptElement | null) ?? document.createElement('script')
    script.id = schemaId
    script.type = 'application/ld+json'

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: 'Traceremove',
          url: window.location.origin,
          logo: `${window.location.origin}/traceremove-mark.svg`,
          sameAs: ['https://www.linkedin.com', 'https://medium.com/@traceremove'],
          contactPoint: [{
            '@type': 'ContactPoint',
            telephone: '+1-606-302-2958',
            contactType: 'customer support',
            availableLanguage: ['English', 'French', 'Spanish'],
          }],
        },
        {
          '@type': 'Service',
          name: 'Digital footprint cleanup and information removal',
          provider: {
            '@type': 'Organization',
            name: 'Traceremove',
          },
          areaServed: 'Global',
          serviceType: 'We help manage and resolve online data exposure',
          url: `${window.location.origin}${location.pathname}`,
        },
      ],
    }

    script.text = JSON.stringify(schema)
    if (!script.parentNode) {
      document.head.appendChild(script)
    }
  }, [location.pathname])

  return (
    <div className="app-layout">
      <div className="app-route-progress" aria-hidden="true">
        <span className={isRouting ? 'is-active' : ''} />
      </div>
      <div className="app-visuals" aria-hidden="true">
        <span className="app-visual app-visual--one" />
        <span className="app-visual app-visual--two" />
        <span className="app-visual app-visual--three" />
      </div>
      <Header currentLanguage={currentLanguage} />
      <main className={`content${isRouting ? ' is-routing' : ''}`}>{children}</main>
      <Footer currentLanguage={currentLanguage} />
      <LiveChatbot currentLanguage={currentLanguage} />
      <CallWidget currentLanguage={currentLanguage} />
      <div style={{ fontSize: '11px', opacity: 0.55, padding: '8px 16px 16px' }}>
        <div>TRACEREMOVE LLC</div>
        <div>750 Manhattan Ave</div>
        <div>Brooklyn, NY 11222, USA</div>
        <div>support@traceremove.com</div>
      </div>
    </div>
  )
}

function App() {
  const RouteNoIndex = ({ children }: { children: ReactNode }) => {
    useEffect(() => {
      const m = document.createElement('meta')
      m.name = 'robots'
      m.content = 'noindex, nofollow'
      document.head.appendChild(m)
      return () => document.head.removeChild(m)
    }, [])

    return <>{children}</>
  }

  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="services" element={<ServicesPricingPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="resources" element={<ResourceLibraryPage />} />
        <Route path="academy" element={<AcademyPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="media" element={<MediaPage />} />
        <Route path="command-center" element={<CommandCenterPage />} />
        <Route path="trust" element={<TrustCenterPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="partners" element={<PartnersLandingPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="contact" element={<SimpleContactPage />} />
        <Route path="blog" element={<BlogPage language="en" />} />
        <Route path="blog/:slug" element={<BlogArticlePage language="en" />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="refund" element={<RefundPage />} />
        {languages.map((language) => {
          const withNoIndex = (element: ReactNode) =>
            language === 'ru' ? <RouteNoIndex>{element}</RouteNoIndex> : element

          return (
            <Fragment key={language}>
              <Route path={language} element={withNoIndex(<HomePage />)} />
              <Route path={`${language}/about`} element={withNoIndex(<AboutPage />)} />
              <Route path={`${language}/case-studies`} element={withNoIndex(<CaseStudiesPage />)} />
              <Route path={`${language}/services`} element={withNoIndex(<ServicesPricingPage />)} />
              <Route path={`${language}/resources`} element={withNoIndex(<ResourceLibraryPage />)} />
              <Route path={`${language}/academy`} element={withNoIndex(<AcademyPage />)} />
              <Route path={`${language}/faq`} element={withNoIndex(<FaqPage />)} />
              <Route path={`${language}/media`} element={withNoIndex(<MediaPage />)} />
              <Route path={`${language}/command-center`} element={withNoIndex(<CommandCenterPage />)} />
              <Route path={`${language}/trust`} element={withNoIndex(<TrustCenterPage />)} />
              <Route path={`${language}/team`} element={withNoIndex(<TeamPage />)} />
              <Route path={`${language}/partners`} element={withNoIndex(<PartnersPage />)} />
              <Route path={`${language}/join`} element={withNoIndex(<JoinPage />)} />
              <Route path={`${language}/contact`} element={withNoIndex(<ContactPage language={language} />)} />
              <Route path={`${language}/blog`} element={withNoIndex(<BlogPage language={language} />)} />
              <Route path={`${language}/blog/:slug`} element={withNoIndex(<BlogArticlePage language={language} />)} />
              <Route
                path={`${language}/privacy`}
                element={withNoIndex(<LegalPage language={language} variant="privacy" />)}
              />
              <Route
                path={`${language}/terms`}
                element={withNoIndex(<LegalPage language={language} variant="terms" />)}
              />
            </Fragment>
          )
        })}
        {servicePages.map((page) => (
          <Route key={page.id} path={page.path.slice(1)} element={<ServicePageView page={page} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  )
}

export default App
