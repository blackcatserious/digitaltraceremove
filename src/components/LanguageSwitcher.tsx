import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { supportedLanguages } from '../i18n/translations'
import { useI18n } from '../i18n/I18nProvider'

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const { language } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  function switchLanguage(nextLanguage: string) {
    const path = location.pathname.replace(/^\/(en|fr|es|ru)/, '')
    navigate(`/${nextLanguage}${path}${location.search}`)
    setOpen(false)
  }

  return (
    <div className="language-switcher" ref={menuRef}>
      <button
        className="language-button"
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Select language"
        onClick={() => setOpen((prev) => !prev)}
      >
        {language.toUpperCase()}
      </button>
      {open ? (
        <div className="language-menu" role="menu">
          {supportedLanguages.map((option) => (
            <button
              key={option}
              type="button"
              role="menuitem"
              onClick={() => switchLanguage(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
