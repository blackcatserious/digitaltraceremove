import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Monitor',
    price: '$49/month',
    bestFor: 'Individuals or small teams that need continuous visibility.',
    includes: ['Exposure monitoring and alerts', 'Monthly summary report', 'Single-user workspace'],
  },
  {
    name: 'Protect',
    price: '$149/month',
    bestFor: 'Operators that need recurring resolution support.',
    includes: ['Everything in Monitor', 'Quarterly workflow credits (3 sprints)', 'Priority support and tracking'],
    featured: true,
  },
  {
    name: 'Business',
    price: '$399/month',
    bestFor: 'Cross-functional teams managing ongoing risk.',
    includes: ['Everything in Protect', 'Multi-user workspace (5 seats)', 'Monthly workflow credits (4 sprints)'],
  },
]

const managedOptions = [
  { name: 'Managed Search Trust', price: 'From $4,900/month', fit: 'For brands with steady incident volume.' },
  { name: 'Quarterly Monitoring Program', price: 'From $7,800/quarter', fit: 'For teams with periodic spikes in risk.' },
  { name: 'Enterprise Program', price: 'Custom', fit: 'For regulated or multi-market operations.' },
]

export default function PricingPage() {
  return (
    <section className="home-production" aria-labelledby="pricing-page-heading">
      <header className="home-production__header">
        <h1 id="pricing-page-heading">Pricing</h1>
        <p>Choose a plan based on workflow volume, reporting needs, and team size. Upgrade as exposure complexity grows.</p>
      </header>

      <section style={{ marginTop: '14px' }}>
        <h2>Plan comparison</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              style={{
                border: plan.featured ? '2px solid var(--blue)' : '1px solid var(--border)',
                borderRadius: '12px',
                padding: '18px',
                background: '#fff',
              }}
            >
              {plan.featured ? <p style={{ margin: '0 0 8px', color: 'var(--blue)', fontWeight: 700 }}>Recommended</p> : null}
              <h3 style={{ margin: 0 }}>{plan.name}</h3>
              <p style={{ margin: '8px 0', fontSize: '1.6rem', fontFamily: 'var(--font-mono)' }}>{plan.price}</p>
              <p style={{ color: 'var(--gray)' }}>{plan.bestFor}</p>
              <ul style={{ paddingLeft: '18px', marginBottom: 0 }}>
                {plan.includes.map((feature) => (
                  <li key={feature} style={{ marginBottom: '6px' }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '24px' }}>
        <h2>Managed options</h2>
        <p>For high-volume or high-sensitivity work, managed programs provide dedicated coordination and custom reporting.</p>
        <div style={{ display: 'grid', gap: '10px', marginTop: '12px' }}>
          {managedOptions.map((option) => (
            <article
              key={option.name}
              style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '12px 14px', background: '#fff' }}
            >
              <h3 style={{ margin: '0 0 6px' }}>{option.name}</h3>
              <p style={{ margin: '0 0 4px' }}>
                <strong>{option.price}</strong>
              </p>
              <p style={{ margin: 0, color: 'var(--gray)' }}>{option.fit}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '24px' }}>
        <h2>Which plan fits best?</h2>
        <ul style={{ display: 'grid', gap: '8px', paddingLeft: '20px' }}>
          <li>Start with <strong>Monitor</strong> when you only need visibility and alerts.</li>
          <li>Choose <strong>Protect</strong> when you need predictable monthly execution support.</li>
          <li>Use <strong>Business</strong> or a managed program for team workflows and executive reporting.</li>
        </ul>
      </section>

      <section style={{ marginTop: '24px', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px' }}>
        <h2 style={{ marginTop: 0 }}>Need help selecting a plan?</h2>
        <p>Share your current incident volume and team setup. We will recommend the right starting option.</p>
        <Link className="button primary" to="/contact">
          Book a Pricing Review
        </Link>
      </section>
    </section>
  )
}
