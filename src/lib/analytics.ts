// Consent-gated analytics + conversion tracking.
//
// All IDs are pulled from Netlify build-time environment variables (VITE_*),
// never hardcoded. Nothing here loads until the visitor accepts cookies via
// the consent banner — initAnalytics() is what wires up GA4, the Google Ads
// conversion tag, and the Meta Pixel.
//
// Required Netlify env vars (set in the Netlify UI, see PR notes):
//   VITE_GA4_MEASUREMENT_ID       e.g. G-XXXXXXXXXX
//   VITE_GOOGLE_ADS_ID            e.g. AW-000000000
//   VITE_META_PIXEL_ID            e.g. 000000000000000
//   VITE_GOOGLE_ADS_LABEL_AUDIT       per-action conversion labels
//   VITE_GOOGLE_ADS_LABEL_CONTACT
//   VITE_GOOGLE_ADS_LABEL_CHECKLIST
//   VITE_GOOGLE_ADS_LABEL_WAITLIST
//   VITE_GOOGLE_ADS_LABEL_PHONE

type GtagArgs = [string, ...unknown[]]

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: GtagArgs) => void
    fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean }
    _fbq?: unknown
  }
}

const GA4_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID as string | undefined
const GOOGLE_ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined

export type ConversionAction =
  | 'audit_request'
  | 'contact'
  | 'checklist'
  | 'waitlist'
  | 'phone_click'

// Each action maps to a distinct Google Ads conversion label and a Meta event,
// so they can be imported as separate conversions.
const ADS_LABELS: Record<ConversionAction, string | undefined> = {
  audit_request: import.meta.env.VITE_GOOGLE_ADS_LABEL_AUDIT as string | undefined,
  contact: import.meta.env.VITE_GOOGLE_ADS_LABEL_CONTACT as string | undefined,
  checklist: import.meta.env.VITE_GOOGLE_ADS_LABEL_CHECKLIST as string | undefined,
  waitlist: import.meta.env.VITE_GOOGLE_ADS_LABEL_WAITLIST as string | undefined,
  phone_click: import.meta.env.VITE_GOOGLE_ADS_LABEL_PHONE as string | undefined,
}

const META_EVENTS: Record<ConversionAction, string> = {
  audit_request: 'Lead',
  contact: 'Contact',
  checklist: 'Lead',
  waitlist: 'Lead',
  phone_click: 'Contact',
}

const CONSENT_KEY = 'tr-consent'
let initialized = false

export const hasStoredConsent = (): boolean => {
  try {
    return window.localStorage.getItem(CONSENT_KEY) === 'granted'
  } catch {
    return false
  }
}

export const storeConsent = (granted: boolean): void => {
  try {
    window.localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied')
  } catch {
    /* storage unavailable — consent simply won't persist */
  }
}

const loadScript = (src: string): void => {
  const script = document.createElement('script')
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

// Loads GA4, Google Ads, and the Meta Pixel. Safe to call more than once.
// Only call this AFTER the visitor has granted consent.
export const initAnalytics = (): void => {
  if (initialized || typeof window === 'undefined') {
    return
  }
  initialized = true

  const hasGoogle = Boolean(GA4_ID || GOOGLE_ADS_ID)

  if (hasGoogle) {
    window.dataLayer = window.dataLayer || []
    const gtag: (...args: GtagArgs) => void = (...args) => {
      window.dataLayer!.push(args)
    }
    window.gtag = gtag
    gtag('js', new Date())

    const bootId = GA4_ID ?? GOOGLE_ADS_ID!
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${bootId}`)

    if (GA4_ID) {
      gtag('config', GA4_ID)
    }
    if (GOOGLE_ADS_ID) {
      gtag('config', GOOGLE_ADS_ID)
    }
  }

  if (META_PIXEL_ID) {
    /* Standard Meta Pixel bootstrap. */
    const fbq: Window['fbq'] = function (...args: unknown[]) {
      const f = fbq as NonNullable<Window['fbq']>
      // @ts-expect-error callMethod is injected by the Meta loader at runtime
      if (f.callMethod) f.callMethod(...args)
      else (f.queue = f.queue || []).push(args)
    } as NonNullable<Window['fbq']>
    if (!window.fbq) window.fbq = fbq
    window._fbq = window._fbq || window.fbq
    const f = window.fbq as NonNullable<Window['fbq']>
    f.queue = f.queue || []
    f.loaded = true
    loadScript('https://connect.facebook.net/en_US/fbevents.js')
    window.fbq('init', META_PIXEL_ID)
    window.fbq('track', 'PageView')
  }
}

// Fire a distinct conversion event per action across GA4, Google Ads, and Meta.
export const trackConversion = (
  action: ConversionAction,
  detail: Record<string, unknown> = {}
): void => {
  if (typeof window === 'undefined' || !hasStoredConsent()) {
    return
  }

  // Ensure tags are present even if this fires before a re-init.
  if (!initialized) {
    initAnalytics()
  }

  // GA4 / dataLayer event.
  window.gtag?.('event', action, detail)

  // Google Ads conversion (distinct label per action).
  const label = ADS_LABELS[action]
  if (GOOGLE_ADS_ID && label) {
    window.gtag?.('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${label}`,
      ...detail,
    })
  }

  // Meta Pixel standard event.
  window.fbq?.('track', META_EVENTS[action], detail)
}
