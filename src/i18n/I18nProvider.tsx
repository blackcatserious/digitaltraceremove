import { createContext, ReactNode, useContext, useMemo } from 'react'
import { SupportedLanguage, supportedLanguages, translations } from './translations'

type I18nContextValue = {
  language: SupportedLanguage
  t: typeof translations.en
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined)

type I18nProviderProps = {
  language: SupportedLanguage
  children: ReactNode
}

export function I18nProvider({ language, children }: I18nProviderProps) {
  const value = useMemo(
    () => ({
      language,
      t: translations[language],
    }),
    [language],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}

export function isSupportedLanguage(language: string | undefined): language is SupportedLanguage {
  return !!language && supportedLanguages.includes(language as SupportedLanguage)
}
