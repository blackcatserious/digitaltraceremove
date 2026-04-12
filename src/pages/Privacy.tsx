import { useEffect } from 'react'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy — TraceRemove LLC'
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
        <h1 style={{ fontFamily: "'Playfair Display', serif" }}>Privacy Policy</h1>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Data collected</h2>
        <p style={bodyTextStyle}>We collect name, email, company, and usage analytics needed to operate and improve the service.</p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Third parties</h2>
        <p style={bodyTextStyle}>We use Stripe and Calendly for billing and scheduling support. We do not sell personal data.</p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>GDPR rights (EU users)</h2>
        <p style={bodyTextStyle}>EU users can request access, correction, deletion, and portability under GDPR.</p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>CCPA rights (California users)</h2>
        <p style={bodyTextStyle}>California users can request to know, delete, and opt out under CCPA.</p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Retention</h2>
        <p style={bodyTextStyle}>We retain personal data for 2 years after account closure.</p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Contact</h2>
        <p style={bodyTextStyle}>For privacy requests, contact support@traceremove.com.</p>

        <p style={bodyTextStyle}>
          TRACEREMOVE LLC, 750 Manhattan Ave, Brooklyn NY 11222
          <br />
          support@traceremove.com
        </p>
      </section>
    </main>
  )
}
