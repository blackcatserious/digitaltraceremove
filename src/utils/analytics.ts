export type AnalyticsParams = Record<string, unknown>

export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

const UTM_STORAGE_KEY = 'tr_utm_params'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

const safeJsonParse = (value: string | null): Record<string, unknown> => {
  if (!value) return {}
  try {
    return JSON.parse(value) as Record<string, unknown>
  } catch {
    return {}
  }
}

export const getStoredUtmParams = (): UTMParams => {
  if (typeof window === 'undefined') return {}
  const stored = safeJsonParse(window.sessionStorage.getItem(UTM_STORAGE_KEY))
  return UTM_KEYS.reduce<UTMParams>((acc, key) => {
    const value = stored[key]
    if (typeof value === 'string' && value.trim()) {
      acc[key] = value
    }
    return acc
  }, {})
}

export const captureUtmParamsFromUrl = () => {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const existing = getStoredUtmParams()
  const merged: UTMParams = { ...existing }

  UTM_KEYS.forEach((key) => {
    const value = params.get(key)
    if (value) {
      merged[key] = value
    }
  })

  window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged))
}

export const trackEvent = (eventName: string, params?: AnalyticsParams) => {
  if (typeof window === 'undefined') {
    return
  }
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: eventName,
    ...getStoredUtmParams(),
    ...(params ?? {}),
  })
}
