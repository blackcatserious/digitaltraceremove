const proofSignals = [
  '1,200+ malicious pages deindexed',
  '$18.4M pipeline recovered',
  '89% faster resolution cycles',
  '7.5x trusted traffic growth',
  '6 active time zones',
  '24/7 escalation coverage',
]

const methodology = [
  'DMCA-compliant requests',
  'GDPR right-to-erasure workflows',
  'Platform content policy escalations',
  'Editorial correction processes',
  'Structured sprint cycles with documented deliverables',
]

export default function AboutPage() {
  return (
    <article className="home-production" aria-labelledby="about-page-heading">
      <section className="home-production__header">
        <h1 id="about-page-heading">Built for Businesses That Can&apos;t Afford Exposure</h1>
        <p>
          Traceremove operates as a distributed team of analysts, engineers, and platform specialists across 6 time
          zones in North America, Europe, and Asia-Pacific. We serve corporate clients, executive teams, and agency
          partners who require confidential, documented data exposure management.
        </p>
      </section>

      <section style={{ marginTop: '20px' }} aria-labelledby="about-signals-heading">
        <h2 id="about-signals-heading">By the numbers</h2>
        <ul style={{ display: 'grid', gap: '8px', paddingLeft: '20px' }}>
          {proofSignals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '20px' }} aria-labelledby="about-methodology-heading">
        <h2 id="about-methodology-heading">Our Methodology</h2>
        <ul style={{ display: 'grid', gap: '8px', paddingLeft: '20px' }}>
          {methodology.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p style={{ marginTop: '10px' }}>
          We do not use technically manipulative, deceptive, or black-hat methods.
        </p>
      </section>

      <section style={{ marginTop: '20px' }} aria-labelledby="about-compliance-heading">
        <h2 id="about-compliance-heading">Compliance</h2>
        <p>
          TRACEREMOVE LLC is incorporated in Wyoming, USA, with operational presence in New York, NY. All engagements
          are governed by New York State law.
        </p>
      </section>

      <section style={{ marginTop: '20px' }} aria-labelledby="about-contact-heading">
        <h2 id="about-contact-heading">Contact</h2>
        <address style={{ fontStyle: 'normal', lineHeight: 1.6 }}>
          <div>TRACEREMOVE LLC</div>
          <div>750 Manhattan Ave</div>
          <div>Brooklyn, NY 11222</div>
          <div>
            <a href="mailto:support@traceremove.com">support@traceremove.com</a>
          </div>
        </address>
      </section>
    </article>
  )
}
