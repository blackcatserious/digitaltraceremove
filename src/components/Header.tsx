import { NavLink } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const { language, t } = useI18n()
  const base = `/${language}`

  return (
    <header className="container nav" aria-label="Primary">
      <div className="nav-brand">DigitalTrace Remove</div>
      <nav className="nav-links" aria-label="Primary navigation">
        <NavLink to={`${base}/services`} aria-label={t.nav.services}>
          {t.nav.services}
        </NavLink>
        <NavLink to={`${base}/case-studies`} aria-label={t.nav.caseStudies}>
          {t.nav.caseStudies}
        </NavLink>
        <NavLink to={`${base}/resources`} aria-label={t.nav.resources}>
          {t.nav.resources}
        </NavLink>
        <NavLink to={`${base}/contact`} aria-label={t.nav.contact}>
          {t.nav.contact}
        </NavLink>
      </nav>
      <LanguageSwitcher />
    </header>
  )
}
