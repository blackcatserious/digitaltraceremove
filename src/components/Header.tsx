import { Fragment, type KeyboardEvent as ReactKeyboardEvent, useEffect, useMemo, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { getBlogBasePath } from '../data/blog'
import { languageLabels, languages, type Language, type ServicePageContent } from '../data/pages'

type NavLinkRenderArgs = { isActive: boolean }

type HeaderCopy = {
  caseStudies: string
  closeMenu: string
  openMenu: string
  services: string
  languageSwitcherLabel: string
  navigationTitle: string
  home: string
  about: string
  servicesPricing: string
  resources: string
  academy: string
  media: string
  commandCenter: string
  trust: string
  team: string
  partners: string
  blog: string
  faq: string
  contact: string
  joinUs: string
  languages: string
}

type HeaderProps = {
  currentLanguage: Language
  copy: HeaderCopy
  groups: {
    serviceName: string
    pages: ServicePageContent[]
  }[]
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
const getPartnersPath = (language: Language) =>
  language === 'en' ? '/partners' : `/${language}/partners`
const getJoinPath = (language: Language) => (language === 'en' ? '/join' : `/${language}/join`)
const getContactPath = (language: Language) =>
  language === 'en' ? '/contact' : `/${language}/contact`

const Header = ({ currentLanguage, copy, groups }: HeaderProps) => {
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaSearch, setMegaSearch] = useState('')
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState('')
  const location = useLocation()
  const filteredGroups = useMemo(() => {
    const query = megaSearch.trim().toLowerCase()
    if (!query) return groups
    return groups
      .map((group) => ({
        ...group,
        pages: group.pages.filter((page) =>
          `${group.serviceName} ${page.industryName}`.toLowerCase().includes(query)
        ),
      }))
      .filter((group) => group.pages.length > 0)
  }, [groups, megaSearch])
  const headerRef = useRef<HTMLElement | null>(null)
  const mobileCloseRef = useRef<HTMLButtonElement | null>(null)

  const navLinks = useMemo(
    () => [
      { label: copy.caseStudies, href: getCaseStudiesPath(currentLanguage) },
      { label: 'For Agencies', href: getPartnersPath(currentLanguage) },
      { label: 'Pricing', href: '/pricing' },
    ],
    [copy, currentLanguage]
  )

  useEffect(() => {
    setMegaOpen(false)
    setMobileOpen(false)
    setMegaSearch('')
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
    setMegaSearch('')
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
            <span className="tr-nav__label">{copy.services}</span>
            <span className="tr-nav__indicator" aria-hidden="true" />
            <span className="tr-nav__chevron" aria-hidden="true" />
          </button>
          {navLinks.map((item, index) => (
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
        <div className="tr-megamenu__tools">
          <input
            type="search"
            value={megaSearch}
            onChange={(event) => setMegaSearch(event.target.value)}
            placeholder="Search service or industry…"
            aria-label="Search services"
          />
          <p>Live reputation response playbooks, updated for 2026 channels.</p>
        </div>
        <div className="tr-megamenu__inner">
          {filteredGroups.map((group) => (
            <div key={group.serviceName} className="tr-megamenu__column">
              <h3>{group.serviceName}</h3>
              <ul>
                {group.pages.map((page) => (
                  <li key={page.path}>
                    <NavLink
                      to={page.path}
                      className={({ isActive }: NavLinkRenderArgs) => `tr-megamenu__link${isActive ? ' is-active' : ''}`}
                      onClick={handleServiceClose}
                    >
                      {page.industryName}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {filteredGroups.length === 0 ? (
            <div className="tr-megamenu__empty">
              <h3>No matching services</h3>
              <p>Try another keyword or open our full services overview.</p>
              <NavLink to={getServicesPricingPath(currentLanguage)} className="button secondary" onClick={handleServiceClose}>
                Open services page
              </NavLink>
            </div>
          ) : null}
          <aside className="tr-megamenu__insight">
            <h3>Reputation pulse</h3>
            <p>Track removals, reviews, and sentiment risks in one live command layer.</p>
            <Link className="button ghost" to={getCommandCenterPath(currentLanguage)} onClick={handleServiceClose}>
              Open command center
            </Link>
          </aside>
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
              <h3>{copy.services}</h3>
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
                to={getAboutPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.about}
              </NavLink>
              <NavLink
                to={getCaseStudiesPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.caseStudies}
              </NavLink>
              <NavLink
                to={getServicesPricingPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.servicesPricing}
              </NavLink>
              <NavLink
                to={getResourcesPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.resources}
              </NavLink>
              <NavLink
                to={getAcademyPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.academy}
              </NavLink>
              <NavLink
                to={getMediaPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.media}
              </NavLink>
              <NavLink
                to={getCommandCenterPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.commandCenter}
              </NavLink>
              <NavLink
                to={getTrustPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.trust}
              </NavLink>
              <NavLink
                to={getTeamPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.team}
              </NavLink>
              <NavLink
                to={getPartnersPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.partners}
              </NavLink>
              <NavLink
                to={getBlogBasePath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.blog}
              </NavLink>
              <NavLink
                to={getFaqPath(currentLanguage)}
                className={({ isActive }: NavLinkRenderArgs) => `tr-mobile-link${isActive ? ' is-active' : ''}`}
                onClick={handleCloseMobile}
              >
                {copy.faq}
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

export default Header
