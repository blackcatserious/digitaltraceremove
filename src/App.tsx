import { type ReactNode, useMemo, useState } from 'react'
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

const HomePage = () => {
  const totalPages = servicePages.length
  const summaries = languages.map((language) => {
    const count = servicePages.filter((page) => page.language === language).length
    return { language, count }
  })

  return (
    <section className="home">
      <div className="home-hero">
        <span className="home-badge">Traceremove · Digital Agency</span>
        <h1>Data-led growth programs, crafted in three languages.</h1>
        <p>
          Traceremove orchestrates brand, revenue, and product marketing for ambitious teams across SaaS, commerce,
          healthcare, finance, and manufacturing. Explore {totalPages} specialised service pages detailing deliverables,
          pricing, and collaboration models.
        </p>
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
            <Link className="button" to={navigation[language][0]?.pages[0]?.path ?? '/'}>
              {language === 'en' && 'Browse English services'}
              {language === 'fr' && 'Découvrir les services'}
              {language === 'es' && 'Explorar servicios'}
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

const ServicePageView = ({ page }: { page: ServicePageContent }) => {
  const labels = interfaceCopy[page.language]
  return (
    <article className="service-page">
      <header className="service-hero">
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
        <a className="button primary" href="mailto:hello@traceremove.com">
          hello@traceremove.com
        </a>
      </section>
    </article>
  )
}

const NotFound = () => (
  <section className="service-page">
    <header className="service-hero">
      <p className="service-preheading">Traceremove</p>
      <h1>We couldn&apos;t find that page.</h1>
      <p className="service-subheading">Explore our services and choose the program that fits your roadmap.</p>
      <Link className="button primary" to="/">
        Back to overview
      </Link>
    </header>
  </section>
)

const Sidebar = ({ currentLanguage }: { currentLanguage: Language }) => {
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()
  const copy = interfaceCopy[currentLanguage]

  const searchResults = useMemo(() => {
    if (!normalizedQuery) {
      return []
    }

    return servicePages
      .filter((page) => page.language === currentLanguage)
      .filter((page) => {
        const text = `${page.serviceName} ${page.industryName} ${page.metaDescription}`.toLowerCase()
        return text.includes(normalizedQuery)
      })
      .slice(0, 20)
  }, [normalizedQuery, currentLanguage])

  const groups = navigation[currentLanguage] ?? []

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Link to="/">Traceremove</Link>
        <span className="sidebar-language">{languageLabels[currentLanguage]}</span>
      </div>
      <div className="sidebar-search">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={copy.searchPlaceholder}
        />
      </div>
      {normalizedQuery && (
        <div className="sidebar-section">
          <h2>{copy.searchResults}</h2>
          <ul>
            {searchResults.map((page) => (
              <li key={page.id}>
                <NavLink to={page.path}>{page.serviceName}</NavLink>
                <small>{page.industryName}</small>
              </li>
            ))}
            {!searchResults.length && <li className="empty">{copy.noMatches}</li>}
          </ul>
        </div>
      )}
      <div className="sidebar-section">
        <h2>{copy.languages}</h2>
        <ul>
          {languages.map((language) => (
            <li key={language} className={currentLanguage === language ? 'active' : undefined}>
              <NavLink to={navigation[language][0]?.pages[0]?.path ?? '/'}>
                {languageLabels[language]}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-section">
        <h2>{copy.services}</h2>
        {groups.map((group) => (
          <div key={group.serviceName} className="sidebar-service-group">
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
    </aside>
  )
}

const AppLayout = ({ children }: { children: ReactNode }) => {
  const currentLanguage = useCurrentLanguage()

  return (
    <div className="app-layout">
      <Sidebar currentLanguage={currentLanguage} />
      <main className="content">{children}</main>
    </div>
  )
}

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {servicePages.map((page) => (
          <Route key={page.id} path={page.path.slice(1)} element={<ServicePageView page={page} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  )
}

export default App
