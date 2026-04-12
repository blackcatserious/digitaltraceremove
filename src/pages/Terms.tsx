import { useEffect } from 'react'

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Service — TraceRemove LLC'
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
        <h1 style={{ fontFamily: "'Playfair Display', serif" }}>Terms of Service</h1>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>1. Company identity</h2>
        <p style={bodyTextStyle}>
          TRACEREMOVE LLC (Wyoming LLC)
          <br />
          Registered: 5840 E 2nd St, Ste 7000, Casper, WY 82609, USA
          <br />
          Operational: 750 Manhattan Ave, Brooklyn, NY 11222, USA
          <br />
          Email: support@traceremove.com
        </p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>2. Definitions</h2>
        <ul>
          <li>
            <strong>Workspace</strong> — the client&apos;s account and associated settings.
          </li>
          <li>
            <strong>Reports</strong> — monthly monitoring and exposure summaries.
          </li>
          <li>
            <strong>Workflow Credits</strong> — time-boxed resolution cycles with defined scope.
          </li>
          <li>
            <strong>Sprint</strong> — a single workflow credit cycle.
          </li>
        </ul>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>3. Service description</h2>
        <p style={bodyTextStyle}>
          Traceremove provides monitoring, reporting, and structured workflow cycles to manage online data exposure.
        </p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>4. Best-efforts delivery</h2>
        <p style={bodyTextStyle}>
          Outcomes depend on third-party systems outside Traceremove&apos;s control; no specific outcome is guaranteed.
        </p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>5. Fulfilment timelines</h2>
        <p style={bodyTextStyle}>Workflow credits activate within 3 business days of intake.</p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>6. Subscription cancellation</h2>
        <p style={bodyTextStyle}>30 days written notice for subscriptions.</p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>7. Limitation of liability</h2>
        <p style={bodyTextStyle}>Liability is limited to fees paid in the 3 months before any claim.</p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>8. Governing law</h2>
        <p style={bodyTextStyle}>This agreement is governed by the laws of the State of New York, United States.</p>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>9. GDPR addendum</h2>
        <p style={bodyTextStyle}>For EU/EEA users, GDPR rights include access, correction, and deletion.</p>

        <p
          style={{
            marginTop: 28,
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            lineHeight: 1.6,
            opacity: 0.8,
            whiteSpace: 'pre-line',
          }}
        >
          {
            'TRACEREMOVE LLC (Wyoming LLC)\nRegistered: 5840 E 2nd St, Ste 7000, Casper, WY 82609, USA\nOperational: 750 Manhattan Ave, Brooklyn, NY 11222, USA\nEmail: support@traceremove.com'
          }
        </p>
      </section>
    </main>
  )
}
