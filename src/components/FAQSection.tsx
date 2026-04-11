const faqs = [
  {
    q: 'Is this process legal?',
    a: 'Yes. All workflows use documented, compliance-verified methods including DMCA, GDPR right-to-erasure, platform content policies, and editorial correction processes. We do not use deceptive or technically manipulative methods.',
  },
  {
    q: 'What guarantee do you offer?',
    a: 'We offer best-efforts execution with full reporting transparency. For qualified cases we offer a re-execution guarantee if results fall below agreed benchmarks. Specific terms are included in your engagement agreement.',
  },
  {
    q: 'How long does it take?',
    a: 'Most cases see measurable results within 30-60 days. Complex or high-volume cases typically require 60-90 days. Timeline estimates are provided after the initial confidential assessment.',
  },
  {
    q: 'Is my identity kept confidential?',
    a: 'Absolutely. A full NDA is signed before any information is shared. We never reference clients publicly, and our workflows are designed to protect client identity at every stage of execution.',
  },
  {
    q: 'Can you help with content in multiple languages?',
    a: 'Yes. We operate across English, French, Spanish, Portuguese, German, and other languages, covering North America, Europe, Latin America, Asia-Pacific, and Africa.',
  },
  {
    q: 'How does the partner programme work?',
    a: 'Partners receive white-label access to our workflows and delivery infrastructure. You manage the client relationship; we handle execution under your brand. Revenue share and capacity retainer models are both available.',
  },
]

export default function FAQSection() {
  return (
    <section className="home-production" aria-labelledby="faq-section-heading">
      <header className="home-production__header">
        <h2 id="faq-section-heading">Answers to the Questions Every Client Asks First</h2>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '16px' }}>
        {faqs.map((item) => (
          <article key={item.q} style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '16px' }}>
            <p style={{ color: 'var(--blue)', fontFamily: 'var(--font-mono)', fontWeight: 600, margin: '0 0 8px' }}>Q</p>
            <h3 style={{ marginTop: 0, fontWeight: 700 }}>{item.q}</h3>
            <p style={{ marginBottom: 0 }}>{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
