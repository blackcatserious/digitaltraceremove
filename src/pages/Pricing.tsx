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
  const pageStyle = {
    minHeight: '100vh',
    background: '#0A0F1E',
    color: '#FAFAFA',
    paddingTop: '80px',
  } as const

  const heroStyle = {
    paddingTop: 'clamp(60px, 8vw, 100px)',
    paddingBottom: 'clamp(40px, 5vw, 60px)',
    paddingLeft: 'clamp(24px, 5%, 80px)',
    paddingRight: 'clamp(24px, 5%, 80px)',
    maxWidth: '1200px',
    margin: '0 auto',
  } as const

  const sectionStyle = {
    paddingTop: 'clamp(48px, 6vw, 80px)',
    paddingBottom: 'clamp(48px, 6vw, 80px)',
    paddingLeft: 'clamp(24px, 5%, 80px)',
    paddingRight: 'clamp(24px, 5%, 80px)',
    maxWidth: '1200px',
    margin: '0 auto',
  } as const

  const bodyTextStyle = {
    color: 'rgba(255,255,255,0.72)',
    lineHeight: 1.75,
    maxWidth: '680px',
  } as const

  return (
    <section className="home-production" aria-labelledby="pricing-page-heading" style={pageStyle}>
      <header className="home-production__header" style={heroStyle}>
        <p className="home-production__kicker">Self-Serve</p>
        <h1 id="pricing-page-heading" style={{ fontFamily: "'Playfair Display', serif" }}>Pricing</h1>
        <p style={bodyTextStyle}>Start with monitoring. Scale to managed programmes when ready.</p>
        <Link className="button primary" to="/en#assessment">
          Request Assessment
        </Link>
      </header>

      <div style={{ ...sectionStyle, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        {selfServeTiers.map((tier) => (
          <article
            key={tier.name}
            style={{
              border: tier.featured ? '2px solid var(--blue)' : '1px solid var(--border)',
              borderRadius: '12px',
              padding: '18px',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            {tier.featured ? (
              <p style={{ margin: '0 0 8px', color: 'var(--blue)', fontWeight: 700, fontSize: '12px' }}>Most Popular</p>
            ) : null}
            <h3 style={{ margin: 0 }}>{tier.name}</h3>
            <p style={{ margin: '8px 0', fontSize: '1.75rem', fontFamily: 'var(--font-mono)' }}>{tier.price}</p>
            <p style={bodyTextStyle}>{tier.description}</p>
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

      <section style={{ ...sectionStyle, background: 'var(--navy)', borderRadius: '14px' }}>
        <p style={{ color: 'var(--white)', margin: 0 }}>
          Managed programmes from $4,900/month · Cybersecurity monitoring from $7,800/quarter
        </p>
        <Link to="/en#assessment" style={{ color: 'var(--gold)', fontWeight: 600, textDecoration: 'none' }}>
          Request managed programme →
        </Link>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Partner Capacity Packages</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          {partnerTiers.map((tier) => (
            <article key={tier.name} style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
              <h4 style={{ margin: '0 0 6px' }}>
                {tier.name}: <span style={{ fontFamily: 'var(--font-mono)' }}>{tier.price}</span>
              </h4>
              <p style={{ ...bodyTextStyle, margin: 0 }}>{tier.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
