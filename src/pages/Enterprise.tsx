import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Executive Protection',
    price: 'From $10,000/month',
    description: 'Continuous monitoring, search-risk response, executive exposure workflows, and priority escalation.',
  },
  {
    name: 'Enterprise Reputation Operations',
    price: 'From $15,000/month',
    description: 'Dedicated operating capacity for search, reviews, platform issues, reporting, and cross-functional escalation.',
  },
  {
    name: 'Crisis & High-Exposure Response',
    price: 'Custom engagement',
    description: 'Rapid-response operating model for concentrated reputation events, coordinated with legal and communications teams.',
  },
]

export default function EnterprisePage() {
  return (
    <section className="home-production" aria-labelledby="enterprise-heading">
      <header className="home-production__header">
        <p className="home-production__kicker">Enterprise</p>
        <h1 id="enterprise-heading">Reputation infrastructure for high-exposure organizations and executives.</h1>
        <p>
          Traceremove combines monitoring, evidence, source-level removal workflows, search response, review escalation,
          and executive reporting in one accountable operating model.
        </p>
        <Link className="button primary" to="/contact">Request an enterprise assessment</Link>
      </header>

      <section style={{ marginTop: '24px' }}>
        <h2>Designed for complex operating environments</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
          {[
            ['Founders & C-suite', 'Protect executive search visibility, personal exposure, and escalation readiness.'],
            ['Legal & communications', 'Maintain evidence, ownership, approval gates, and clear reporting across active cases.'],
            ['Portfolio companies & groups', 'Standardize monitoring and response across multiple brands or operating entities.'],
          ].map(([title, body]) => (
            <article key={title} style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '16px' }}>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '28px', background: 'var(--navy)', borderRadius: '14px', padding: '24px' }}>
        <p style={{ color: 'var(--gold)', margin: '0 0 8px' }}>Operating model</p>
        <h2 style={{ color: 'var(--white)', marginTop: 0 }}>From monitoring to resolution with one accountable team.</h2>
        <ul style={{ color: 'rgba(255,255,255,0.86)', lineHeight: 1.8 }}>
          <li>Continuous search, review, news, platform, and executive exposure monitoring</li>
          <li>Evidence capture and case prioritization</li>
          <li>Platform, publisher, privacy, and policy-based escalation workflows</li>
          <li>Search suppression and owned-asset reinforcement where removal is not available</li>
          <li>Weekly operating reports and executive summaries</li>
          <li>Priority escalation for time-sensitive incidents</li>
        </ul>
      </section>

      <section style={{ marginTop: '28px' }}>
        <h2>Engagement options</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
          {tiers.map((tier) => (
            <article key={tier.name} style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '16px' }}>
              <h3>{tier.name}</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{tier.price}</p>
              <p>{tier.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '28px' }}>
        <h2>What enterprise buyers receive</h2>
        <p>
          A defined scope, named owner, documented escalation path, reporting cadence, and commercial terms in the
          engagement agreement. Third-party outcomes remain subject to platform, publisher, legal, and technical constraints.
        </p>
        <Link className="button primary" to="/contact">Discuss scope and capacity</Link>
      </section>
    </section>
  )
}
