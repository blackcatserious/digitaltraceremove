import { useEffect } from 'react'

export default function FinalCTA() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    document.head.appendChild(script)

    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

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
      <h2>Ready to Resolve Your Exposure?</h2>
      <p>
        Book a confidential 30-minute assessment. We&apos;ll map your exposure surfaces, identify priorities, and give
        you a clear resolution plan — no obligation.
      </p>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/traceremove/assessment"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </section>
  )
}
