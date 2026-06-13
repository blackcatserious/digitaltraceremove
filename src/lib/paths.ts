import type { Language } from '../data/pages'

// Locale-aware path helpers. EN is unprefixed; FR/ES are prefixed so that
// navigation never drops a visitor out of their active locale.
const prefixed = (segment: string) => (language: Language) =>
  language === 'en' ? `/${segment}` : `/${language}/${segment}`

export const getHomePath = (language: Language): string => (language === 'en' ? '/' : `/${language}`)
export const getContactPath = prefixed('contact')
export const getPricingPath = prefixed('pricing')
export const getServicesPath = prefixed('services')
