import { useMemo, useState } from 'react'
import './App.css'

type Locale = 'en' | 'es' | 'fr'

type ServicePage = {
  id: string
  locale: Locale
  title: string
}

const generateServicePages = (locale: Locale, count: number): ServicePage[] =>
  Array.from({ length: count }, (_, index) => ({
    id: `${locale}-service-${index + 1}`,
    locale,
    title: `Service ${index + 1}`,
  }))

const servicePagesByLocale: Record<Locale, ServicePage[]> = {
  en: generateServicePages('en', 90),
  es: generateServicePages('es', 70),
  fr: generateServicePages('fr', 52),
}

const servicePages: ServicePage[] = Object.values(servicePagesByLocale).flat()

const copy: Record<
  Locale,
  {
    label: string
    headline: (total: number) => string
    description: (visibleCount: number) => string
  }
> = {
  en: {
    label: 'English',
    headline: (total) => `Explore all ${total} services`,
    description: (visibleCount) =>
      `Showing ${visibleCount} services available in English.`,
  },
  es: {
    label: 'Español',
    headline: (total) => `Explora las ${total} páginas de servicios`,
    description: (visibleCount) =>
      `Se muestran ${visibleCount} servicios disponibles en español.`,
  },
  fr: {
    label: 'Français',
    headline: (total) => `Découvrez les ${total} pages de services`,
    description: (visibleCount) =>
      `Affichage de ${visibleCount} services disponibles en français.`,
  },
}

const LocaleSwitcher = ({
  activeLocale,
  onChange,
}: {
  activeLocale: Locale
  onChange: (locale: Locale) => void
}) => (
  <div className="locale-switcher">
    {Object.entries(copy).map(([locale, localeCopy]) => (
      <button
        key={localeCopy.label}
        type="button"
        className={
          activeLocale === (locale as Locale)
            ? 'locale-switcher__button locale-switcher__button--active'
            : 'locale-switcher__button'
        }
        onClick={() => onChange(locale as Locale)}
      >
        {localeCopy.label}
      </button>
    ))}
  </div>
)

const HomePage = () => {
  const [locale, setLocale] = useState<Locale>('en')

  const localizedPages = useMemo(
    () => servicePages.filter((page) => page.locale === locale),
    [locale],
  )

  const totalPages = servicePages.length

  const localeCopy = copy[locale]

  return (
    <main className="homepage">
      <LocaleSwitcher activeLocale={locale} onChange={setLocale} />
      <header className="homepage__hero">
        <h1>{localeCopy.headline(totalPages)}</h1>
        <p>{localeCopy.description(localizedPages.length)}</p>
      </header>
      <section className="homepage__grid">
        {localizedPages.slice(0, 9).map((page) => (
          <article key={page.id} className="service-card">
            <h2>{page.title}</h2>
            <p>{`Locale: ${page.locale.toUpperCase()}`}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

function App() {
  return <HomePage />
}

export default App
