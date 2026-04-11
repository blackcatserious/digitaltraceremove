export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-content">
        <h1>Terms of Service</h1>

        <h2>1. Company identity</h2>
        <p>
          TRACEREMOVE LLC (Wyoming LLC)
          <br />
          750 Manhattan Ave, Brooklyn, NY 11222, USA
          <br />
          support@traceremove.com
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
          Traceremove provides a digital platform for monitoring and managing online data exposure. Services include
          monitoring alerts, dashboard reporting, and time-boxed workflow cycles.
        </p>

        <h2>4. Best-efforts delivery</h2>
        <p>
          Outcomes depend on third-party systems and sources outside Traceremove&apos;s control. Traceremove provides
          best-efforts execution and transparency through reporting. No specific outcome is guaranteed.
        </p>

        <h2>5. Fulfilment timelines</h2>
        <p>Workflow credits activate within 3 business days of completed intake.</p>

        <h2>6. Subscription cancellation</h2>
        <p>30 days written notice required. No refund of current billing period.</p>

        <h2>7. Limitation of liability</h2>
        <p>
          Traceremove&apos;s total liability is limited to the fees paid by the client in the 3 months before the claim.
        </p>

        <h2>8. Governing law</h2>
        <p>This agreement is governed by the laws of the State of New York, USA.</p>

        <h2>9. GDPR addendum</h2>
        <p>
          For EU/EEA users: you have rights to access, correction, and erasure under GDPR. Contact
          support@traceremove.com for requests.
        </p>

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
          {'TRACEREMOVE LLC\n750 Manhattan Ave\nBrooklyn, NY 11222, USA\nsupport@traceremove.com'}
        </p>
      </section>
    </main>
  )
}
