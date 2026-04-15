export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-content">
        <h1>Terms of Service</h1>
        <p>
          These terms govern your use of Traceremove services. By using the platform, you agree to these conditions.
        </p>

        <h2>1) Scope of service</h2>
        <p>
          Traceremove provides monitoring, reporting, and workflow-based support for online data exposure management.
          Delivery is best-efforts and depends on third-party platforms outside our control.
        </p>

        <h2>2) Accounts and acceptable use</h2>
        <p>
          You are responsible for account security and for ensuring submitted content and requests are lawful. Misuse,
          fraud, or abuse may result in suspension.
        </p>

        <h2>3) Billing, cancellation, and refunds</h2>
        <p>
          Subscription fees are billed in advance under your selected plan. Cancellation requires written notice before
          the next billing cycle. Refunds are handled according to our Refund Policy.
        </p>

        <h2>4) Liability and legal terms</h2>
        <p>
          To the maximum extent permitted by law, total liability is limited to fees paid in the 3 months preceding a
          claim. These terms are governed by the laws of New York, USA.
        </p>

        <h2>5) Questions or contract requests</h2>
        <p>
          For legal questions, NDAs, or procurement documents, contact{' '}
          <a href="mailto:support@traceremove.com">support@traceremove.com</a>.
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
