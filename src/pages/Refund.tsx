import { useEffect } from 'react'

export default function RefundPage() {
  useEffect(() => {
    document.title = 'Refund Policy — TraceRemove LLC'
  }, [])

  return (
    <main className="legal-page">
      <section className="legal-content">
        <h1>Refund Policy</h1>

        <h2>Self-serve subscriptions</h2>
        <p>Pro-rated refund is available within 7 days if no credits are consumed.</p>

        <h2>Workflow credits</h2>
        <p>Workflow credits are non-refundable once sprint intake is completed.</p>

        <h2>Managed programmes</h2>
        <p>Managed programmes are governed by a separate signed agreement.</p>

        <h2>Disputes</h2>
        <p>Email support@traceremove.com within 14 days of charge for disputes.</p>

        <p>
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
