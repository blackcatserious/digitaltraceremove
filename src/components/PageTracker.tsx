import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function PageTracker() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) {
      return
    }
    window.gtag('event', 'page_view', {
      page_path: location.pathname,
      page_title: document.title,
    })
  }, [location])

  return null
}
