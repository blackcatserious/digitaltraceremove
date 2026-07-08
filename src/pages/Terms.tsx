export default function TermsPage() {
  return (
    <main className="legal-page">
      <section className="legal-content">
        <h1>Terms of Service</h1>
        <p>
          These terms govern access to and use of TraceRemove services. By using the platform, you agree to the
          conditions below and any order forms or statements of work signed with your organization.
        </p>

        <h2>1. Company identity and agreement scope</h2>
        <p>
          TRACEREMOVE LLC (Wyoming LLC)
          <br />
          750 Manhattan Ave, Brooklyn, NY 11222, USA
          <br />
          support@traceremove.com
        </p>
        <p>
          Services may include monitoring, investigation support, workflow execution, and periodic reporting as
          described in your selected package.
        </p>

        <h2>2. Service terms and acceptable use</h2>
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
        <p>
          You agree not to misuse the platform, interfere with service operations, or submit unlawful content.
          TraceRemove may suspend access for abuse, security risks, or non-payment.
        </p>

        <h2>3. Delivery, billing, and limitations</h2>
        <p>
          Workflow credits activate within three business days of completed intake. Outcomes depend on third-party
          platforms and external systems, so services are delivered on a best-effort basis with no guaranteed removal
          or ranking result.
        </p>
        <p>
          Subscriptions require 30 days written notice for cancellation. Unless otherwise stated in a signed agreement,
          fees already billed for the active period are non-refundable.
        </p>

        <h2>4. Liability, governing law, and support</h2>
        <p>
          Traceremove&apos;s total liability is limited to the fees paid by the client in the 3 months before the claim.
        </p>
        <p>This agreement is governed by the laws of the State of New York, USA.</p>
        <p>
          Questions about legal terms, enterprise addendums, or compliance requirements can be sent via our{' '}
          <a href="/contact">contact page</a>.
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
