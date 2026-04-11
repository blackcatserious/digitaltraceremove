import { useEffect } from 'react'

export default function FinalCTA() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      if (link.parentNode) {
        link.parentNode.removeChild(link)
      }
    }
  }, [])

  return (
    <section className="home-production" style={{ background: 'var(--navy)', textAlign: 'center' }}>
      <p style={{ color: 'var(--gold)' }}>Every Day Has a Cost</p>
      <h2 style={{ color: 'var(--white)' }}>Ready to Resolve Your Exposure?</h2>
      <p style={{ color: 'rgba(255,255,255,0.88)' }}>
        Book a confidential 30-minute assessment. We will map your exposure surfaces, identify priorities, and give
        you a clear resolution plan with no obligation.
      </p>
      <a
        className="button primary"
        href="https://calendly.com/traceremove/assessment"
        target="_blank"
        rel="noreferrer"
        style={{ display: 'inline-flex', width: 'auto', marginBottom: '18px' }}
      >
        Book Confidential Assessment
      </a>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/traceremove/assessment"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </section>
  )
}
