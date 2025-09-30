import { Fragment, type ReactNode, useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import {
  interfaceCopy,
  languageLabels,
  languages,
  servicePages,
  type Language,
  type ServicePageContent,
} from './data/pages'
import './App.css'

const useCurrentLanguage = (): Language => {
  const location = useLocation()
  const match = languages.find((lang) => location.pathname.startsWith(`/${lang}/`))
  return match ?? 'en'
}

const buildNavigation = () => {
  const structure = new Map<
    Language,
    Map<
      string,
      {
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

  const navigation: Record<Language, { serviceName: string; pages: ServicePageContent[] }[]> = {
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
        serviceName: group.serviceName,
        pages: group.pages.sort((a, b) => a.industryName.localeCompare(b.industryName)),
      }))
      .sort((a, b) => a.serviceName.localeCompare(b.serviceName))
  })

  return navigation
}

const navigation = buildNavigation()

const getTeamPath = (language: Language) => (language === 'en' ? '/team' : `/${language}/team`)

const navCopy: Record<
  Language,
  {
    services: string
    team: string
    contact: string
    callToAction: string
    tagline: string
  }
> = {
  en: {
    services: 'Services',
    team: 'Team',
    contact: 'Contact',
    callToAction: 'Book a strategy call',
    tagline: 'Growth marketing, revenue design, and product storytelling for teams shipping fast.',
  },
  fr: {
    services: 'Services',
    team: 'Équipe',
    contact: 'Contact',
    callToAction: 'Planifier un échange',
    tagline: 'Marketing growth, modèles de revenus et narration produit pour les équipes ambitieuses.',
  },
  es: {
    services: 'Servicios',
    team: 'Equipo',
    contact: 'Contacto',
    callToAction: 'Reserva una sesión estratégica',
    tagline: 'Marketing de crecimiento, diseño de ingresos y storytelling de producto para equipos ágiles.',
  },
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
    subtitle: 'A multilingual collective led by Founder & CEO Artur Ziganshin',
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
    subtitle: 'Un collectif multilingue dirigé par le fondateur et CEO Artur Ziganshin',
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
    subtitle: 'Un colectivo multilingüe liderado por el fundador y CEO Artur Ziganshin',
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
    name: 'Artur Ziganshin',
    role: 'Founder & CEO',
    location: 'Toronto · Montréal',
    bio: {
      en: 'Artur steers brand, lifecycle, and product GTM initiatives for venture-backed SaaS and commerce teams. He leads multilingual strategy rooms and keeps every engagement grounded in measurable impact.',
      fr: 'Artur pilote les initiatives de marque, lifecycle et go-to-market produit pour des équipes SaaS et e-commerce financées. Il orchestre des workshops multilingues et relie chaque programme à des métriques tangibles.',
      es: 'Artur dirige iniciativas de marca, lifecycle y go-to-market de producto para equipos SaaS y comercio respaldados por venture capital. Conduce workshops multilingües y ancla cada programa en métricas claras.',
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

const HomePage = () => {
  const currentLanguage = useCurrentLanguage()
  const totalPages = servicePages.length
  const summaries = languages.map((language) => {
    const count = servicePages.filter((page) => page.language === language).length
    return { language, count }
  })

  const heroCta = navCopy[currentLanguage].callToAction

  return (
    <section className="home">
      <div className="home-hero">
        <div className="home-hero-copy">
          <span className="home-badge">Traceremove · Digital Agency</span>
          <h1>{totalPages} multilingual service blueprints engineered for momentum.</h1>
          <p>{navCopy[currentLanguage].tagline}</p>
          <div className="home-cta">
            <a className="button primary" href="mailto:contact@traceremove.com">
              contact@traceremove.com
            </a>
            <a className="button secondary" href="tel:+16063022958">
              +1 606 302 2958
            </a>
          </div>
          <div className="home-contact">
            <p>
              Founder &amp; CEO <strong>Artur Ziganshin</strong> leads every engagement with a senior core team operating
              across English, French, and Spanish markets.
            </p>
            <Link className="button ghost" to={getTeamPath(currentLanguage)}>
              Meet the team
            </Link>
          </div>
        </div>
        <div className="home-hero-visual" aria-hidden="true">
          <img src="/traceremove-orbit.svg" alt="" loading="lazy" />
        </div>
      </div>

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
            You work directly with Artur Ziganshin and our senior partners—no hand-offs, just outcomes delivered with
            precision.
          </p>
        </article>
      </div>

      <div className="home-banner">
        <p>
          {heroCta} — <a href="mailto:contact@traceremove.com">contact@traceremove.com</a> ·{' '}
          <a href="tel:+16063022958">+1 606 302 2958</a>
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
          <a className="button primary" href="mailto:contact@traceremove.com">
            contact@traceremove.com
          </a>
          <a className="button secondary" href="tel:+16063022958">
            +1 606 302 2958
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
            <a className="button primary" href="mailto:contact@traceremove.com">
              contact@traceremove.com
            </a>
            <a className="button secondary" href="tel:+16063022958">
              +1 606 302 2958
            </a>
          </div>
        </div>
      </section>
    </article>
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

const Header = ({ currentLanguage }: { currentLanguage: Language }) => {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const copy = navCopy[currentLanguage]
  const groups = navigation[currentLanguage] ?? []

  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
  }, [location.pathname])

  const firstPages = useMemo(
    () =>
      languages.reduce<Record<Language, string>>((acc, lang) => {
        if (lang === 'en') {
          acc[lang] = '/'
        } else {
          acc[lang] = navigation[lang][0]?.pages[0]?.path ?? '/'
        }
        return acc
      }, { en: '/', fr: '/', es: '/' }),
    []
  )

  return (
    <header className="tr-header">
      <div className="tr-header__inner">
        <div className="tr-header__brand">
          <Link to="/" className="tr-logo" aria-label="Traceremove home">
            <img src="/traceremove-mark.svg" alt="" aria-hidden="true" />
            <span>Traceremove</span>
          </Link>
          <button
            type="button"
            className={`tr-burger ${mobileOpen ? 'is-open' : ''}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="tr-mobile-menu"
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
            onClick={() => setMegaOpen((prev) => !prev)}
            aria-expanded={megaOpen}
            aria-controls="tr-megamenu"
          >
            {copy.services}
            <span className="tr-nav__chevron" aria-hidden="true" />
          </button>
          <NavLink className="tr-nav__link" to={getTeamPath(currentLanguage)}>
            {copy.team}
          </NavLink>
          <a className="tr-nav__link" href="mailto:contact@traceremove.com">
            {copy.contact}
          </a>
        </nav>

        <div className="tr-header__cta">
          <a className="button ghost" href="tel:+16063022958">
            +1 606 302 2958
          </a>
        </div>

        <div className="tr-languages" aria-label="Language switcher">
          {languages.map((language) => (
            <NavLink key={language} to={firstPages[language]} className={`tr-language ${language === currentLanguage ? 'is-active' : ''}`}>
              {languageLabels[language]}
            </NavLink>
          ))}
        </div>
      </div>

      <div id="tr-megamenu" className={`tr-megamenu ${megaOpen ? 'is-open' : ''}`}>
        <div className="tr-megamenu__inner">
          {groups.map((group) => (
            <div key={group.serviceName} className="tr-megamenu__column">
              <h3>{group.serviceName}</h3>
              <ul>
                {group.pages.map((page) => (
                  <li key={page.path}>
                    <NavLink to={page.path}>{page.industryName}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div id="tr-mobile-menu" className={`tr-mobile-menu ${mobileOpen ? 'is-open' : ''}`}>
        <div className="tr-mobile-menu__inner">
          <div className="tr-mobile-section">
            <h3>{copy.services}</h3>
            {groups.map((group) => (
              <Fragment key={group.serviceName}>
                <p className="tr-mobile-group-title">{group.serviceName}</p>
                <ul>
                  {group.pages.map((page) => (
                    <li key={page.path}>
                      <NavLink to={page.path}>{page.industryName}</NavLink>
                    </li>
                  ))}
                </ul>
              </Fragment>
            ))}
          </div>
          <div className="tr-mobile-section">
            <h3>{copy.team}</h3>
            <NavLink to={getTeamPath(currentLanguage)} className="tr-mobile-link">
              {copy.team}
            </NavLink>
            <a className="tr-mobile-link" href="mailto:contact@traceremove.com">
              contact@traceremove.com
            </a>
            <a className="tr-mobile-link" href="tel:+16063022958">
              +1 606 302 2958
            </a>
          </div>
          <div className="tr-mobile-section">
            <h3>Languages</h3>
            <div className="tr-mobile-languages">
              {languages.map((language) => (
                <NavLink key={language} to={firstPages[language]} className={language === currentLanguage ? 'is-active' : undefined}>
                  {languageLabels[language]}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const footerCopy: Record<
  Language,
  {
    rights: string
    studio: string
    founder: string
  }
> = {
  en: {
    rights: 'All rights reserved.',
    studio: 'Traceremove is a multilingual digital agency crafting growth systems for bold teams.',
    founder: 'Founder & CEO Artur Ziganshin',
  },
  fr: {
    rights: 'Tous droits réservés.',
    studio: "Traceremove est une agence digitale multilingue qui conçoit des systèmes de croissance pour les équipes ambitieuses.",
    founder: 'Fondateur & CEO Artur Ziganshin',
  },
  es: {
    rights: 'Todos los derechos reservados.',
    studio: 'Traceremove es una agencia digital multilingüe que crea sistemas de crecimiento para equipos ambiciosos.',
    founder: 'Fundador y CEO Artur Ziganshin',
  },
}

const Footer = ({ currentLanguage }: { currentLanguage: Language }) => {
  const copy = footerCopy[currentLanguage]

  return (
    <footer className="tr-footer">
      <div className="tr-footer__inner">
        <div className="tr-footer__brand">
          <img src="/traceremove-mark.svg" alt="" aria-hidden="true" />
          <div>
            <p className="tr-footer__title">Traceremove</p>
            <p className="tr-footer__tagline">{copy.studio}</p>
          </div>
        </div>
        <div className="tr-footer__contact">
          <a href="mailto:contact@traceremove.com">contact@traceremove.com</a>
          <a href="tel:+16063022958">+1 606 302 2958</a>
          <p>{copy.founder}</p>
        </div>
        <div className="tr-footer__links">
          <NavLink to={getTeamPath(currentLanguage)}>Team</NavLink>
          <a href="mailto:contact@traceremove.com">Contact</a>
          <a href="tel:+16063022958">Call us</a>
        </div>
      </div>
      <p className="tr-footer__rights">© {new Date().getFullYear()} Traceremove. {copy.rights}</p>
    </footer>
  )
}

const AppLayout = ({ children }: { children: ReactNode }) => {
  const currentLanguage = useCurrentLanguage()

  return (
    <div className="app-layout">
      <Header currentLanguage={currentLanguage} />
      <main className="content">{children}</main>
      <Footer currentLanguage={currentLanguage} />
    </div>
  )
}

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="team" element={<TeamPage />} />
        {languages.map((language) => (
          <Route key={language} path={`${language}/team`} element={<TeamPage />} />
        ))}
        {servicePages.map((page) => (
          <Route key={page.id} path={page.path.slice(1)} element={<ServicePageView page={page} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  )
}

export default App
