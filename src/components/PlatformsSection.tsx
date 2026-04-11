const platformCards = [
  {
    title: 'Google Search Results',
    description:
      'News articles, knowledge panels, autocomplete suggestions, and organic search results.',
    timeline: 'Avg timeline: 30–60 days',
    success: 'Success: 96%',
  },
  {
    title: 'Glassdoor & Indeed',
    description:
      'Employer review platforms that affect hiring, partnerships, and investor perception.',
    timeline: 'Avg timeline: 21–45 days',
    success: 'Success: 91%',
  },
  {
    title: 'Trustpilot & Google Reviews',
    description:
      'Review content that directly impacts conversion rates and B2B due diligence.',
    timeline: 'Avg timeline: 14–30 days',
    success: 'Success: 94%',
  },
  {
    title: 'YouTube & Video Content',
    description: 'Damaging video content, misleading thumbnails, and associated metadata.',
    timeline: 'Avg timeline: 30–75 days',
    success: 'Success: 88%',
  },
  {
    title: 'Forum & Community Posts',
    description: 'Reddit, Quora, industry forums with indexed negative content.',
    timeline: 'Avg timeline: 45–90 days',
    success: 'Success: 87%',
  },
  {
    title: 'News & Press Articles',
    description: 'Online news coverage and editorial content requiring resolution.',
    timeline: 'Avg timeline: 60–90 days',
    success: 'Success: 85%',
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
          <p style={{ color: 'var(--gold)' }}>What We Resolve</p>
          <h2
            id="platforms-section-heading"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
          >
            Across Every Platform That Matters
          </h2>
        </header>
        <p style={{ color: 'var(--blue)' }}>
          From Google News and third-party review sites to forum posts and video content — we manage exposure across
          the full digital surface.
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
              padding: '16px',
            }}
          >
            <h3 style={{ marginTop: 0 }}>{card.title}</h3>
            <p>{card.description}</p>
            <p>{card.timeline}</p>
            <p>{card.success}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
