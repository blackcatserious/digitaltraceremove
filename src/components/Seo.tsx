import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { supportedLanguages } from '../i18n/translations'

type SeoProps = {
  title: string
  description: string
  schema?: Record<string, unknown>
}

export function Seo({ title, description, schema }: SeoProps) {
  const location = useLocation()
  const canonicalPath = location.pathname.replace(/^\/(en|fr|es|ru)/, '')
  const canonicalUrl = `https://digitaltraceremove.com${location.pathname}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {supportedLanguages.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`https://digitaltraceremove.com/${lang}${canonicalPath}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href="https://digitaltraceremove.com/en" />
      {schema ? (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      ) : null}
    </Helmet>
  )
}
