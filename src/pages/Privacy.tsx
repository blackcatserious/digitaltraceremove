import { useEffect } from 'react'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy — TraceRemove LLC'
  }, [])

  return (
    <main className="legal-page">
      <section className="legal-content">
        <h1>Privacy Policy</h1>

        <h2>Data collected</h2>
        <p>We collect name, email, company, and usage analytics needed to operate and improve the service.</p>

        <h2>Third parties</h2>
        <p>We use Stripe and Calendly for billing and scheduling support. We do not sell personal data.</p>

        <h2>GDPR rights (EU users)</h2>
        <p>EU users can request access, correction, deletion, and portability under GDPR.</p>

        <h2>CCPA rights (California users)</h2>
        <p>California users can request to know, delete, and opt out under CCPA.</p>

        <h2>Retention</h2>
        <p>We retain personal data for 2 years after account closure.</p>

        <h2>Contact</h2>
        <p>For privacy requests, contact support@traceremove.com.</p>

        <p>
          TRACEREMOVE LLC, 750 Manhattan Ave, Brooklyn NY 11222
          <br />
          support@traceremove.com
        </p>
      </section>
    </main>
  )
}
