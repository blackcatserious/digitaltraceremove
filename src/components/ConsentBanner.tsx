import { useEffect, useState } from 'react'
import { hasStoredConsent, initAnalytics, storeConsent } from '../lib/analytics'
import type { Language } from '../data/pages'

const bannerCopy: Record<Language, { text: string; accept: string; decline: string }> = {
  en: {
    text: 'We use cookies for analytics and to measure ad performance. They load only if you accept.',
    accept: 'Accept',
    decline: 'Decline',
  },
  fr: {
    text: "Nous utilisons des cookies pour l'analyse et la mesure publicitaire. Ils ne se chargent qu'avec votre accord.",
    accept: 'Accepter',
    decline: 'Refuser',
  },
  es: {
    text: 'Usamos cookies para analítica y para medir el rendimiento de los anuncios. Solo se cargan si las aceptas.',
    accept: 'Aceptar',
    decline: 'Rechazar',
  },
}

const STORAGE_KEY = 'tr-consent'

export default function ConsentBanner({ language }: { language: Language }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let decided = false
    try {
      decided = window.localStorage.getItem(STORAGE_KEY) !== null
    } catch {
      decided = false
    }
    if (hasStoredConsent()) {
      initAnalytics()
    }
    if (!decided) {
      setVisible(true)
    }
  }, [])

  if (!visible) {
    return null
  }

  const copy = bannerCopy[language] ?? bannerCopy.en

  const accept = () => {
    storeConsent(true)
    initAnalytics()
    setVisible(false)
  }

  const decline = () => {
    storeConsent(false)
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        left: '16px',
        right: '16px',
        bottom: '16px',
        zIndex: 1000,
        margin: '0 auto',
        maxWidth: '720px',
        background: 'var(--navy, #0b1120)',
        color: '#fff',
        borderRadius: '12px',
        padding: '16px 20px',
        boxShadow: '0 18px 40px rgba(0,0,0,0.35)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '12px',
        justifyContent: 'space-between',
      }}
    >
      <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, flex: '1 1 260px' }}>{copy.text}</p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button type="button" className="button ghost" onClick={decline}>
          {copy.decline}
        </button>
        <button type="button" className="button primary" onClick={accept}>
          {copy.accept}
        </button>
      </div>
    </div>
  )
}
