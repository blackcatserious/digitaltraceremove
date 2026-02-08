import { useEffect } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { I18nProvider, isSupportedLanguage } from '../i18n/I18nProvider'
import { supportedLanguages } from '../i18n/translations'
import { Layout } from './Layout'
import { Home } from '../pages/Home'
import { Services } from '../pages/Services'
import { ServiceDetail } from '../pages/ServiceDetail'
import { BlogIndex } from '../pages/BlogIndex'
import { BlogPost } from '../pages/BlogPost'
import { CaseStudies } from '../pages/CaseStudies'
import { Resources } from '../pages/Resources'
import { Contact } from '../pages/Contact'
import { NotFound } from '../pages/NotFound'

export function LanguageLayout() {
  const params = useParams()
  const lang = params.lang

  if (!isSupportedLanguage(lang)) {
    return <Navigate to="/en" replace />
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <I18nProvider language={lang}>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </I18nProvider>
  )
}

export function useLanguagePaths(pathname: string) {
  return supportedLanguages.map((language) => ({
    language,
    href: `/${language}${pathname.replace(/^\/(en|fr|es|ru)/, '')}`,
  }))
}
