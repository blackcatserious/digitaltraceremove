import { getStoredUtmParams } from './analytics'

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

const CALENDLY_SCRIPT_ID = 'calendly-widget-script'

export const getCalendlyBaseUrl = () =>
  (import.meta.env.VITE_CALENDLY_URL as string | undefined) || 'https://calendly.com/traceremove/free-consultation'

const buildCalendlyUrl = (extra?: Record<string, string | undefined>) => {
  const url = new URL(getCalendlyBaseUrl())
  const utm = getStoredUtmParams()
  Object.entries(utm).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value)
  })
  if (extra) {
    Object.entries(extra).forEach(([key, value]) => {
      if (value) url.searchParams.set(key, value)
    })
  }
  return url.toString()
}

export const loadCalendlyScript = async () => {
  if (typeof window === 'undefined') return
  if (window.Calendly?.initPopupWidget) return
  if (document.getElementById(CALENDLY_SCRIPT_ID)) return

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.id = CALENDLY_SCRIPT_ID
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Calendly script failed to load'))
    document.body.appendChild(script)
  })
}

export const openCalendlyPopup = async (extra?: Record<string, string | undefined>) => {
  if (typeof window === 'undefined') return
  await loadCalendlyScript()
  const url = buildCalendlyUrl(extra)
  if (window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url })
    return
  }
  window.open(url, '_blank', 'noopener,noreferrer')
}

export const getCalendlyLink = (extra?: Record<string, string | undefined>) => buildCalendlyUrl(extra)
