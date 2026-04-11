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
    description: 'Monitoring plus structured workflow credits each quarter',
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

const managedPrograms = [
  { label: 'Always-On Search Trust', price: 'From $4,900/month' },
  { label: 'Cybersecurity Monitoring', price: 'From $7,800/quarter' },
  { label: 'Enterprise Custom', price: 'Contact us' },
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
        <h2 id="pricing-page-heading">Start With Monitoring. Scale When Ready.</h2>
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
            <Link className="button primary" to="/contact">
              Get Started
            </Link>
          </article>
        ))}
      </div>

      <p style={{ marginTop: '14px', color: 'var(--gray)' }}>
        Workflow credits represent time-boxed resolution cycles with progress tracking and end-of-cycle reporting.
        Third-party outcomes depend on external systems — best-efforts execution with full transparency.
      </p>

      <section style={{ marginTop: '28px', background: 'var(--navy)', borderRadius: '14px', padding: '24px' }}>
        <p style={{ color: 'var(--gold)', margin: '0 0 8px' }}>For Enterprises and Partners</p>
        <h2 style={{ color: 'var(--white)', marginTop: 0 }}>Always-On Managed Programmes</h2>
        <p style={{ color: 'rgba(255,255,255,0.82)' }}>
          High-volume or complex exposure cases handled by a dedicated team. Custom sprint plans, weekly reporting,
          and direct account management.
        </p>

        <div style={{ display: 'grid', gap: '10px', marginTop: '14px' }}>
          {managedPrograms.map((program) => (
            <div
              key={program.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                paddingBottom: '8px',
                color: 'var(--white)',
              }}
            >
              <span>{program.label}</span>
              <strong>{program.price}</strong>
            </div>
          ))}
        </div>
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
