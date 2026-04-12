import { useEffect } from 'react'

export default function RefundPage() {
  useEffect(() => {
    document.title = 'Refund Policy — TraceRemove LLC'
  }, [])

  const pageStyle = {
    minHeight: '100vh',
    background: '#0A0F1E',
    color: '#FAFAFA',
    paddingTop: '80px',
  } as const
  const legalDocStyle = {
    maxWidth: '720px',
    margin: '0 auto',
    padding: 'clamp(40px, 5vw, 80px) clamp(24px, 5%, 40px)',
  } as const
  const bodyTextStyle = {
    color: 'rgba(255,255,255,0.72)',
    lineHeight: 1.75,
    maxWidth: '680px',
  } as const

  return (
    <main className="legal-page" style={pageStyle}>
      <section className="legal-content" style={legalDocStyle}>
        <h1 style={{ fontFamily: "'Playfair Display', serif" }}>Refund Policy</h1>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Self-serve subscriptions</h2>
        <p style={bodyTextStyle}>Pro-rated refund is available within 7 days if no credits are consumed.</p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Workflow credits</h2>
        <p style={bodyTextStyle}>Workflow credits are non-refundable once sprint intake is completed.</p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Managed programmes</h2>
        <p style={bodyTextStyle}>Managed programmes are governed by a separate signed agreement.</p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Disputes</h2>
        <p style={bodyTextStyle}>Email support@traceremove.com within 14 days of charge for disputes.</p>

        <p style={bodyTextStyle}>
          TRACEREMOVE LLC
          <br />
          750 Manhattan Ave, Brooklyn, NY 11222, USA
          <br />
          support@traceremove.com
        </p>
      </section>
    </main>
  )
}
