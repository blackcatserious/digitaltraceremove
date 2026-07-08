const caseStudies = [
  {
    industry: 'Law Firm / North America',
    metric: '$2.1M',
    label: 'Pipeline recovered in 90 days',
    description:
      'Three partner-level attorneys had damaging content appearing in Google search results. After a structured resolution sprint, all three achieved clean first-page results within 75 days.',
    tag: 'Google Reviews / Forum Posts',
  },
  {
    industry: 'Private Equity / Europe',
    metric: '1,200+',
    label: 'Malicious pages deindexed',
    description:
      'A coordinated negative data exposure campaign across 14 jurisdictions required a multi-team sprint. Full resolution achieved through documented workflow and escalation protocols.',
    tag: 'Google News / Press Articles',
  },
  {
    industry: 'PR Agency / Asia-Pacific',
    metric: '89%',
    label: 'Faster resolution cycles',
    description:
      "A leading PR agency white-labelled Traceremove's workflow infrastructure. Result: 89% improvement in average resolution cycle time.",
    tag: 'White-label Partner Programme',
  },
]

export default function CaseStudiesSection() {
  return (
    <section className="home-production" aria-labelledby="case-studies-heading">
      <header
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '20px',
          alignItems: 'start',
          marginBottom: '18px',
        }}
      >
        <h2 id="case-studies-heading" style={{ margin: 0 }}>
          Representative Outcomes Across High-Risk Cases
        </h2>
        <p style={{ margin: 0, color: 'var(--gray)' }}>
          Every case is anonymized by sector and region. Client identities remain protected under NDA.
        </p>
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
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.72)' }}>{item.industry}</p>
            <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--white)', fontSize: '2rem', margin: '10px 0 6px' }}>
              {item.metric}
            </p>
            <p style={{ margin: '0 0 10px', color: 'var(--gold)', fontWeight: 600 }}>{item.label}</p>
            <p style={{ color: 'rgba(255,255,255,0.88)' }}>{item.description}</p>
            <p
              style={{
                display: 'inline-block',
                margin: 0,
                padding: '6px 10px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.92)',
                fontSize: '12px',
              }}
            >
              {item.tag}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
