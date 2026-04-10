import { Link } from 'react-router-dom'

const partnerTypes = [
  {
    title: 'Law Firms',
    text: 'Confidential data exposure management for your clients. Fully DMCA and GDPR compliant.',
  },
  {
    title: 'PR Agencies',
    text: 'White-label execution. Your brand, our infrastructure. Revenue share or retainer models.',
  },
  {
    title: 'Executive Search',
    text: 'Help candidates pass online background checks. Add high-margin services to your retainer.',
  },
  {
    title: 'HR Consultancies',
    text: 'Protect executive placements. Proactive monitoring for C-suite candidates.',
  },
]

export default function AgenciesSection() {
  return (
    <section className="home-production" style={{ background: 'var(--navy)' }} aria-labelledby="agencies-heading">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '24px' }}>
        <div>
          <p style={{ color: 'var(--gold)' }}>Partner Program</p>
          <h2 id="agencies-heading" style={{ fontFamily: 'var(--font-display)' }}>
            White-Label Services for Agencies
          </h2>
          <p>
            Law firms, PR agencies, and HR consultancies partner with Traceremove to offer managed data exposure
            services under their own brand — with full NDA and white-label execution.
          </p>
          <Link className="button primary" to="/partners">
            Become a Partner →
          </Link>

          <div style={{ marginTop: '20px', display: 'grid', gap: '10px' }}>
            <p>Silver Partner — $5,000/mo — Standard SLA</p>
            <p>Gold Partner — $10,000/mo — Priority Queue</p>
            <p>Platinum Partner — $18,000/mo — Dedicated Channel</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
          {partnerTypes.map((item) => (
            <article
              key={item.title}
              style={{ border: '1px solid var(--gold)', borderRadius: '10px', padding: '14px', background: 'var(--navy-mid)' }}
            >
              <h3 style={{ marginTop: 0 }}>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
