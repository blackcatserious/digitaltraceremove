import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Monitor',
    price: '$49/month',
    description: 'Monitoring, alerts, and monthly exposure report',
    featured: false,
  },
  {
    name: 'Protect',
    price: '$149/month',
    description: 'Monitoring plus quarterly workflow credits',
    featured: true,
  },
  {
    name: 'Business',
    price: '$399/month',
    description: 'Team workspace with monthly workflow credits',
    featured: false,
  },
]

export default function PricingSection() {
  return (
    <section className="home-production" aria-labelledby="pricing-section-heading">
      <header className="home-production__header" style={{ marginBottom: '18px' }}>
        <h2 id="pricing-section-heading">Transparent Pricing. No Hidden Costs.</h2>
        <p>Start with self-serve monitoring. Scale to managed programmes when ready.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
        {plans.map((plan) => (
          <article
            key={plan.name}
            style={{
              border: plan.featured ? '2px solid var(--blue)' : '1px solid var(--border)',
              borderRadius: '12px',
              padding: '18px',
              display: 'grid',
              gap: '10px',
              background: plan.featured ? 'rgba(24,84,232,0.04)' : 'var(--white)',
            }}
          >
            {plan.featured ? (
              <span
                style={{
                  width: 'fit-content',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '.04em',
                  textTransform: 'uppercase',
                  color: 'var(--white)',
                  background: 'var(--blue)',
                  borderRadius: '999px',
                  padding: '4px 10px',
                }}
              >
                Most Popular
              </span>
            ) : null}
            <h3 style={{ margin: 0 }}>{plan.name}</h3>
            <p style={{ margin: 0, color: 'var(--navy)', fontWeight: 700 }}>{plan.price}</p>
            <p style={{ margin: 0, color: 'var(--gray)' }}>{plan.description}</p>
            <Link className="button primary" to="/pricing" style={{ width: 'fit-content', marginTop: '8px' }}>
              Get Started
            </Link>
          </article>
        ))}
      </div>

      <p style={{ marginTop: '14px' }}>
        <Link to="/pricing">See full pricing</Link>
      </p>

      <section
        style={{
          marginTop: '14px',
          background: 'var(--navy)',
          borderRadius: '12px',
          padding: '18px',
          color: 'var(--white)',
          display: 'grid',
          gap: '10px',
        }}
      >
        <p style={{ margin: 0 }}>
          Managed programmes from $4,900/month · Cybersecurity monitoring from $7,800/quarter
        </p>
        <a href="/pricing" style={{ color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>
          View all managed options →
        </a>
      </section>

      <p style={{ marginTop: '10px', fontSize: '12px', color: 'var(--gray)' }}>
        Workflow credits represent time-boxed resolution cycles. Best-efforts delivery. Third-party outcomes not
        guaranteed.
      </p>
    </section>
  )
}
