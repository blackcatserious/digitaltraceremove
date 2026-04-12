import { Link } from 'react-router-dom'

const selfServeTiers = [
  {
    name: 'Monitor',
    price: '$49/month',
    description: 'Monitoring, alerts, and monthly exposure report',
    features: ['Automated exposure monitoring', 'Monthly risk report', 'Email alerts', 'Dashboard access'],
    featured: false,
  },
  {
    name: 'Protect',
    price: '$149/month',
    description: 'Monitoring plus quarterly workflow credits',
    features: [
      'Everything in Monitor',
      'Quarterly workflow credits (3 sprints)',
      'Progress tracking',
      'Priority email support',
      'Monthly executive summary',
    ],
    featured: true,
  },
  {
    name: 'Business',
    price: '$399/month',
    description: 'Team workspace with monthly workflow credits',
    features: [
      'Everything in Protect',
      'Team workspace (5 users)',
      'Monthly workflow credits (4 sprints)',
      'Dedicated account support',
      'API access for partner reporting',
    ],
    featured: false,
  },
]

const partnerTiers = [
  {
    name: 'Silver',
    price: '$5,000/month',
    description: 'Entry capacity package for steady partner workflows and sprint-based execution support.',
  },
  {
    name: 'Gold',
    price: '$10,000/month',
    description: 'Expanded capacity with higher monthly workflow throughput and accelerated sprint coordination.',
  },
  {
    name: 'Platinum',
    price: '$18,000/month',
    description: 'Maximum delivery capacity for multi-team workflows, high-volume data exposure, and partner growth.',
  },
]

export default function PricingPage() {
  return (
    <section className="home-production" aria-labelledby="pricing-page-heading">
      <header className="home-production__header">
        <p className="home-production__kicker">Self-Serve</p>
        <h2 id="pricing-page-heading">Transparent Pricing. No Hidden Costs.</h2>
        <p>Start with monitoring. Scale to managed programmes when ready.</p>
        <Link className="button primary" to="/en#assessment">
          Request Assessment
        </Link>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '16px' }}>
        {selfServeTiers.map((tier) => (
          <article
            key={tier.name}
            style={{
              border: tier.featured ? '2px solid var(--blue)' : '1px solid var(--border)',
              borderRadius: '12px',
              padding: '18px',
              background: '#fff',
            }}
          >
            {tier.featured ? (
              <p style={{ margin: '0 0 8px', color: 'var(--blue)', fontWeight: 700, fontSize: '12px' }}>Most Popular</p>
            ) : null}
            <h3 style={{ margin: 0 }}>{tier.name}</h3>
            <p style={{ margin: '8px 0', fontSize: '1.75rem', fontFamily: 'var(--font-mono)' }}>{tier.price}</p>
            <p style={{ color: 'var(--gray)' }}>{tier.description}</p>
            <ul style={{ paddingLeft: '18px', marginBottom: '16px' }}>
              {tier.features.map((feature) => (
                <li key={feature} style={{ marginBottom: '6px' }}>
                  {feature}
                </li>
              ))}
            </ul>
            <Link className="button primary" to="/en#assessment">
              Get Started
            </Link>
          </article>
        ))}
      </div>

      <section style={{ marginTop: '28px', background: 'var(--navy)', borderRadius: '14px', padding: '24px' }}>
        <p style={{ color: 'var(--white)', margin: 0 }}>
          Managed programmes from $4,900/month · Cybersecurity monitoring from $7,800/quarter
        </p>
        <Link to="/en#assessment" style={{ color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>
          Request managed programme →
        </Link>
      </section>

      <section style={{ marginTop: '24px' }}>
        <h3>Partner Capacity Packages</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
          {partnerTiers.map((tier) => (
            <article key={tier.name} style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
              <h4 style={{ margin: '0 0 6px' }}>
                {tier.name}: <span style={{ fontFamily: 'var(--font-mono)' }}>{tier.price}</span>
              </h4>
              <p style={{ margin: 0, color: 'var(--gray)' }}>{tier.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
