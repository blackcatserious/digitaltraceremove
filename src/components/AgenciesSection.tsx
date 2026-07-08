import { Link } from 'react-router-dom'

const partnerTypes = [
  {
    title: 'Law Firms',
    text: 'Confidential removal support for client matters requiring documented legal and platform workflows.',
  },
  {
    title: 'PR Agencies',
    text: 'White-label execution under your brand, with senior operators and clear SLA-backed delivery.',
  },
  {
    title: 'Executive Search',
    text: 'Protect candidate credibility before placement by addressing high-visibility search and profile risks.',
  },
  {
    title: 'HR Consultancies',
    text: 'Support board and C-suite transitions with proactive monitoring and discreet risk mitigation.',
  },
]

const partnerTiers = [
  { label: 'Silver Partner', price: '$5,000/mo', sla: 'Standard SLA' },
  { label: 'Gold Partner', price: '$10,000/mo', sla: 'Priority Queue' },
  { label: 'Platinum Partner', price: '$18,000/mo', sla: 'Dedicated Channel' },
]

export default function AgenciesSection() {
  return (
    <section className="home-production" style={{ background: 'var(--navy)' }} aria-labelledby="agencies-heading">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '24px' }}>
        <div>
          <p style={{ color: 'var(--gold)', margin: '0 0 8px', fontWeight: 600 }}>Partner program</p>
          <h2 id="agencies-heading" style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--white)' }}>
            White-Label Delivery for Advisory Firms
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.86)' }}>
            We support law firms, agencies, and advisory teams that need discreet execution capacity for sensitive
            reputation and data exposure matters.
          </p>
          <Link className="button primary" to="/partners">
            Discuss Partnership Options
          </Link>

          <div style={{ marginTop: '20px', display: 'grid', gap: '10px' }}>
            {partnerTiers.map((tier) => (
              <p key={tier.label} style={{ margin: 0, color: 'var(--white)' }}>
                {tier.label} — {tier.price} — {tier.sla}
              </p>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
          {partnerTypes.map((item) => (
            <article
              key={item.title}
              style={{
                border: '1px solid var(--gold)',
                borderRadius: '10px',
                padding: '14px',
                background: 'var(--navy-mid)',
              }}
            >
              <h3 style={{ marginTop: 0, color: 'var(--white)' }}>{item.title}</h3>
              <p style={{ marginBottom: 0, color: 'rgba(255,255,255,0.82)' }}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
