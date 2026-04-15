import { Link } from 'react-router-dom'
import type { Language } from '../data/pages'
import type { ReactNode } from 'react'

type PrimaryService = {
  key: string
  accent: string
  badge: Record<Language, string>
  title: Record<Language, string>
  description: Record<Language, string>
  price: Record<Language, string>
  bullets: Record<Language, string[]>
}

type HomePageProps = {
  useCurrentLanguage: () => Language
  languages: Language[]
  servicePages: { language: Language }[]
  navCopy: Record<Language, { callToAction: string }>
  primaryServices: PrimaryService[]
  getContactPath: (language: Language) => string
  HeroCanvas: () => ReactNode
  ClientsStrip: () => ReactNode
  PlatformsSection: () => ReactNode
  AgenciesSection: () => ReactNode
  ProcessSection: () => ReactNode
  PricingSection: () => ReactNode
  ROICalculator: () => ReactNode
  ScanSection: () => ReactNode
  CaseStudiesSection: () => ReactNode
  FAQSection: () => ReactNode
  FinalCTA: () => ReactNode
  MomentumTicker: ({ variant }: { variant: 'light' | 'dark' }) => ReactNode
  getCaseStudiesPath: (language: Language) => string
  languageLabels: Record<Language, string>
  navigation: Record<Language, { pages: { path: string }[] }[]>
  InsightShowcase: () => ReactNode
}

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

const HomePage = ({
  useCurrentLanguage,
  languages,
  servicePages,
  navCopy,
  primaryServices,
  getContactPath,
  HeroCanvas,
  ClientsStrip,
  PlatformsSection,
  AgenciesSection,
  ProcessSection,
  PricingSection,
  ROICalculator,
  ScanSection,
  CaseStudiesSection,
  FAQSection,
  FinalCTA,
  MomentumTicker,
  getCaseStudiesPath,
  languageLabels,
  navigation,
  InsightShowcase,
}: HomePageProps) => {
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

export default HomePage
