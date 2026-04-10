const steps = [
  {
    label: 'Step 01',
    title: 'Confidential Assessment',
    body: 'You describe the exposure. We map every surface, classify risk, and identify the optimal resolution pathway. Full NDA signed before any discussion.',
  },
  {
    label: 'Step 02',
    title: 'Custom Resolution Strategy',
    body: 'We build a sprint plan with defined targets, timeline, and success criteria. Proposal delivered within 6 hours of assessment call.',
  },
  {
    label: 'Step 03',
    title: 'Execution + Reporting',
    body: 'Our team executes using documented workflows. You receive weekly progress reports and a live dashboard tracking every resolution milestone.',
  },
]

export default function ProcessSection() {
  return (
    <section className="home-production" style={{ background: '#ffffff' }} aria-labelledby="process-heading">
      <header className="home-production__header" style={{ textAlign: 'center' }}>
        <h2 id="process-heading" style={{ color: 'var(--text)' }}>Three Steps to Resolution</h2>
        <p style={{ color: 'var(--gray)' }}>
          A structured, confidential process from initial assessment to ongoing monitoring.
        </p>
      </header>

      <div style={{ position: 'relative', marginTop: '24px' }}>
        <div
          style={{
            position: 'absolute',
            top: '22px',
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'var(--border)',
            zIndex: 0,
          }}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '20px', position: 'relative', zIndex: 1 }}>
          {steps.map((step) => (
            <article key={step.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '9999px',
                  margin: '0 auto 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--blue)',
                  background: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--blue)',
                }}
              >
                {step.label.replace('Step ', '')}
              </div>
              <h3 style={{ color: 'var(--text)' }}>{step.title}</h3>
              <p style={{ color: 'var(--gray)' }}>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
