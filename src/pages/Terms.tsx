import { useEffect } from 'react'

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms of Service — TraceRemove LLC'
  }, [])

  return (
    <main className="legal-page">
      <section className="legal-content">
        <h1>Terms of Service</h1>

        <h2>1. Company identity</h2>
        <p>
          TRACEREMOVE LLC (Wyoming LLC)
          <br />
          Registered: 5840 E 2nd St, Ste 7000, Casper, WY 82609, USA
          <br />
          Operational: 750 Manhattan Ave, Brooklyn, NY 11222, USA
          <br />
          Email: support@traceremove.com
        </p>

        <h2>2. Definitions</h2>
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

        <h2>3. Service description</h2>
        <p>
          Traceremove provides monitoring, reporting, and structured workflow cycles to manage online data exposure.
        </p>

        <h2>4. Best-efforts delivery</h2>
        <p>
          Outcomes depend on third-party systems outside Traceremove&apos;s control; no specific outcome is guaranteed.
        </p>

        <h2>5. Fulfilment timelines</h2>
        <p>Workflow credits activate within 3 business days of intake.</p>

        <h2>6. Subscription cancellation</h2>
        <p>30 days written notice for subscriptions.</p>

        <h2>7. Limitation of liability</h2>
        <p>Liability is limited to fees paid in the 3 months before any claim.</p>

        <h2>8. Governing law</h2>
        <p>This agreement is governed by the laws of the State of New York, United States.</p>

        <h2>9. GDPR addendum</h2>
        <p>For EU/EEA users, GDPR rights include access, correction, and deletion.</p>

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
