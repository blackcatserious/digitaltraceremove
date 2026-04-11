const platformCards = [
  {
    title: 'Google Search Results',
    description:
      'News articles, knowledge panels, autocomplete suggestions, and organic search results.',
    timeline: '30–60 days',
    success: '96%',
  },
  {
    title: 'Glassdoor and Indeed',
    description:
      'Employer review platforms that affect hiring, partnerships, and investor perception.',
    timeline: '21–45 days',
    success: '91%',
  },
  {
    title: 'Trustpilot and Google Reviews',
    description:
      'Review content that impacts conversion rates and B2B due diligence outcomes.',
    timeline: '14–30 days',
    success: '94%',
  },
  {
    title: 'YouTube and Video Content',
    description:
      'Damaging video content, misleading thumbnails, and associated metadata.',
    timeline: '30–75 days',
    success: '88%',
  },
  {
    title: 'Forum and Community Posts',
    description:
      'Reddit, Quora, industry forums with indexed negative content.',
    timeline: '45–90 days',
    success: '87%',
  },
  {
    title: 'News and Press Articles',
    description:
      'Online news coverage and editorial content requiring structured resolution.',
    timeline: '60–90 days',
    success: '85%',
  },
]

export default function PlatformsSection() {
  return (
    <section className="home-production" aria-labelledby="platforms-section-heading">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '24px',
          alignItems: 'start',
          marginBottom: '24px',
        }}
      >
        <header>
          <p style={{ color: 'var(--gold)', margin: '0 0 8px', fontWeight: 600 }}>What We Resolve</p>
          <h2
            id="platforms-section-heading"
            style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
          >
            Across Every Platform That Matters
          </h2>
        </header>

        <p style={{ color: 'var(--blue)', margin: 0 }}>
          From Google News and third-party review sites to forum posts and video content — we manage data exposure
          with monitoring, workflows, and resolution across the full digital surface.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '16px',
        }}
      >
        {platformCards.map((card) => (
          <article
            key={card.title}
            style={{
              background: 'var(--navy)',
              border: '1px solid var(--gold)',
              borderRadius: '12px',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <h3 style={{ margin: 0, color: 'var(--white)', fontWeight: 700 }}>{card.title}</h3>
            <p style={{ margin: 0, color: 'var(--gray)', lineHeight: 1.6 }}>{card.description}</p>
            <div
              style={{
                marginTop: 'auto',
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                color: 'var(--blue)',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              <span>Avg timeline: {card.timeline}</span>
              <span>Success: {card.success}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
