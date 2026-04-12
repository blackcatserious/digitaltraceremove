import { Link } from 'react-router-dom'

const partnerTypes = [
  {
    title: 'Law Firms',
    text: 'Confidential data exposure management for your clients. Fully DMCA and GDPR compliant methodology.',
  },
  {
    title: 'PR Agencies',
    text: 'White-label execution. Your brand, our infrastructure. Revenue share or retainer models available.',
  },
  {
    title: 'Executive Search',
    text: 'Help candidates pass online background checks. Add high-margin services to your retainer.',
  },
  {
    title: 'HR Consultancies',
    text: 'Protect executive placements. Proactive monitoring for C-suite and board-level candidates.',
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        <div>
          <p style={{ color: 'var(--gold)', margin: '0 0 8px', fontWeight: 600 }}>Partner Program</p>
          <h2 id="agencies-heading" style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--white)' }}>
            White-Label Services for Agencies
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.86)' }}>
            Law firms, PR agencies, and HR consultancies partner with Traceremove to offer managed data exposure
            services under their own brand.
          </p>
          <Link className="button primary" to="/partners">
            Become a Partner
          </Link>

          <div style={{ marginTop: '20px', display: 'grid', gap: '10px' }}>
            {partnerTiers.map((tier) => (
              <p key={tier.label} style={{ margin: 0, color: 'var(--white)' }}>
                {tier.label} — {tier.price} — {tier.sla}
              </p>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
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
