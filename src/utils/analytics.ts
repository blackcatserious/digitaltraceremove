declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

const GTM_CONTAINER_ID = 'GTM-XXXXXXX'
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'
const META_PIXEL_ID = '000000000000000'

const appendScript = (source: string) => {
  const script = document.createElement('script')
  script.async = true
  script.src = source
  document.head.appendChild(script)
}

export const loadTagManagers = () => {
  window.setTimeout(() => {
    window.dataLayer = window.dataLayer || []
    appendScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`)
    appendScript(`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`)

    if (!window.gtag) {
      window.gtag = (...args) => {
        window.dataLayer?.push({ gtag: args })
      }
    }

    window.gtag('js', new Date())
    window.gtag('config', GA_MEASUREMENT_ID)

    appendScript('https://connect.facebook.net/en_US/fbevents.js')

    if (!window.fbq) {
      window.fbq = (...args) => {
        window.dataLayer?.push({ fbq: args })
      }
    }

    window.fbq('init', META_PIXEL_ID)
    window.fbq('track', 'PageView')
  }, 3000)
}

export const trackGa4Event = (eventName: string, params: Record<string, unknown> = {}) => {
  window.gtag?.('event', eventName, params)
}

export const trackMetaPixelEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  window.fbq?.('track', eventName, params)
}
