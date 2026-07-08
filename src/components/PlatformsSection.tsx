import React from 'react'

const platformCards = [
  {
    title: 'Google',
    description:
      'Search results, knowledge panels, autocomplete suggestions, and indexed references.',
    timeline: '30–60 days',
    success: '96%',
  },
  {
    title: 'Glassdoor',
    description:
      'Employer-review visibility that can affect hiring cycles, candidate confidence, and partnerships.',
    timeline: '21–45 days',
    success: '91%',
  },
  {
    title: 'Trustpilot',
    description:
      'Review narratives that influence conversion rates and procurement diligence decisions.',
    timeline: '14–30 days',
    success: '94%',
  },
  {
    title: 'YouTube',
    description:
      'Video pages, metadata, and recommendation-surface signals requiring structured escalation.',
    timeline: '30–75 days',
    success: '88%',
  },
  {
    title: 'Forums',
    description:
      'Community threads across major discussion platforms and industry message boards.',
    timeline: '45–90 days',
    success: '87%',
  },
  {
    title: 'News',
    description:
      'Editorial publications and syndicated content requiring documented correction workflows.',
    timeline: '60–90 days',
    success: '85%',
  },
]

export default function PlatformsSection() {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth <= 640)

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="home-production" aria-labelledby="platforms-section-heading">
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'flex-start' : 'center',
          gap: '24px',
          marginBottom: '24px',
        }}
      >
        <header style={{ display: 'grid', gap: '8px', maxWidth: '560px' }}>
          <p style={{ color: 'var(--gold)', margin: 0, fontWeight: 600 }}>What We Resolve</p>
          <h2
            id="platforms-section-heading"
            style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
          >
            Where Exposure Creates Real Risk
          </h2>
        </header>

        <p style={{ color: 'var(--blue)', margin: 0, maxWidth: '520px' }}>
          We handle search listings, reviews, forums, video, and news references where reputation harm affects
          financing, hiring, partnerships, or legal posture.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
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
