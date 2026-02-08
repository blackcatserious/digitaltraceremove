export type AnalyticsParams = Record<string, unknown>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export const trackEvent = (eventName: string, params?: AnalyticsParams) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }
  window.gtag('event', eventName, params ?? {})
}
