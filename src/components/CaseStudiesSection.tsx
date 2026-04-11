const caseStudies = [
  {
    industry: 'Law Firm · North America',
    metric: '$2.1M',
    label: 'Pipeline recovered in 90 days',
    description:
      "Three partner-level attorneys had false review content appearing in Google's top results. After a structured resolution sprint, all three achieved clean first-page results within 75 days.",
    tag: 'Google Reviews · Forum Posts',
  },
  {
    industry: 'Private Equity · Europe',
    metric: '1,200+',
    label: 'Malicious pages deindexed',
    description:
      'A coordinated negative content campaign across 14 jurisdictions required a multi-team sprint. Full resolution achieved through documented workflows and escalation protocols.',
    tag: 'Google News · Press Articles',
  },
  {
    industry: 'PR Agency · Asia-Pacific',
    metric: '89%',
    label: 'Faster resolution cycles',
    description:
      "A leading PR agency white-labelled Traceremove's workflow infrastructure to offer managed data exposure services. Result: 89% improvement in average resolution time.",
    tag: 'White-label Partner Programme',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="home-production" aria-labelledby="case-studies-heading">
      <header className="home-production__header">
        <h2 id="case-studies-heading">Outcomes That Move the Needle</h2>
        <p>All cases anonymised by industry and jurisdiction. Client identities protected by NDA.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '16px' }}>
        {caseStudies.map((item) => (
          <article
            key={item.industry}
            style={{
              background: 'var(--navy)',
              borderRadius: '12px',
              padding: '18px',
              borderTop: '2px solid var(--gold)',
            }}
          >
            <p>{item.industry}</p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', margin: '8px 0' }}>{item.metric}</p>
            <p>{item.label}</p>
            <p>{item.description}</p>
            <p>{item.tag}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
