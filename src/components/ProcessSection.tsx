const steps = [
  {
    label: '01',
    title: 'Confidential Assessment',
    body: 'You brief us on the issue. We map visible and latent exposure points, define legal/policy options, and lock scope under NDA before work begins.',
  },
  {
    label: '02',
    title: 'Custom Resolution Strategy',
    body: 'You receive a tailored action plan with priority targets, ownership, timeline, and measurable success criteria. Initial plan delivered within one business day.',
  },
  {
    label: '03',
    title: 'Execution and Reporting',
    body: 'Our operators run the removals, escalations, and follow-through. You receive weekly reporting and a live status view for each active item.',
  },
]

export default function ProcessSection() {
  return (
    <section className="home-production" style={{ background: '#ffffff' }} aria-labelledby="process-heading">
      <header className="home-production__header" style={{ textAlign: 'center' }}>
        <h2 id="process-heading" style={{ color: 'var(--text)' }}>
          Three Steps to Controlled Resolution
        </h2>
        <p style={{ color: 'var(--gray)' }}>
          A discreet process designed for high-stakes matters, from first assessment through verified resolution.
        </p>
      </header>

      <div style={{ position: 'relative', marginTop: '24px' }}>
        <div
          style={{
            position: 'absolute',
            top: '8px',
            left: '10%',
            right: '10%',
            height: '1px',
            background: 'var(--border)',
            zIndex: 0,
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '20px',
            position: 'relative',
            zIndex: 1,
          }}
        >
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
                {step.label}
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
