import { Link } from 'react-router-dom'
import type { Language } from '../data/pages'

const getHomePath = (language: Language) => (language === 'en' ? '/' : `/${language}`)

export const NotFound = ({ language = 'en' as Language }: { language?: Language }) => (
  <section className="service-page">
    <header className="service-hero">
      <div className="service-hero-copy">
        <p className="service-preheading">Traceremove</p>
        <h1>We couldn&apos;t find that page.</h1>
        <p className="service-subheading">Explore our services and choose the program that fits your roadmap.</p>
        <Link className="button primary" to={getHomePath(language)}>
          Back to overview
        </Link>
      </div>
      <div className="service-hero-visual" aria-hidden="true">
        <img src="/traceremove-orbit.svg" alt="Traceremove orbit illustration" loading="lazy" />
      </div>
    </header>
  </section>
)
