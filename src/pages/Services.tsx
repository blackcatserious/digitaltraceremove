import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ServicesPage() {
  const location = useLocation()

  useEffect(() => {
    document.title = 'Services — TraceRemove'
  }, [])

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [location.hash])

  const services = [
    {
      id: 'search-results',
      tag: 'Search Results Management',
      headline: 'Control What Appears When People Search Your Name',
      body: 'When a prospect, investor, or hiring manager searches your company online, the first page of results is your reputation. We identify every negative result — news articles, forum posts, review content, knowledge panel issues — map their sources, and execute structured resolution workflows to shift what the search page shows. Our process is documented, compliance-verified, and delivers measurable changes to your search presence within 30–90 days.',
      metrics: [
        ['30–90', 'Day results'],
        ['96%', 'Success rate'],
        ['1,200+', 'Pages resolved'],
      ],
    },
    {
      id: 'review-platforms',
      tag: 'Review Platform Resolution',
      headline: 'Resolve Damaging Content on Glassdoor, Trustpilot, and Google',
      body: 'Review platforms shape decisions before your sales team ever speaks to a prospect. Damaging content on Glassdoor affects hiring. Low Trustpilot scores lose B2B deals during due diligence. Coordinated negative Google reviews cut conversion rates. We work through the documented resolution pathways of each platform — DMCA, platform content policy escalations, editorial correction processes — to reduce the impact of content that violates platform rules or contains factual inaccuracies.',
      metrics: [
        ['14–45', 'Day resolution'],
        ['94%', 'Success rate'],
        ['6', 'Platforms covered'],
      ],
    },
    {
      id: 'monitoring',
      tag: 'Monitoring & Alerts',
      headline: 'Know the Moment Something Appears — Before Your Clients Do',
      body: 'Most reputation damage is discovered late — by a client, a journalist, or a prospective investor who found something you did not know existed. Our monitoring system tracks your company name, executives, and key terms across search results, review platforms, news sources, and social signals. When new content appears, you receive an alert with classification, severity assessment, and a recommended action path. Ongoing monitoring is available as a standalone subscription or as part of a managed programme.',
      metrics: [
        ['24/7', 'Coverage'],
        ['500+', 'Sources monitored'],
        ['Same day', 'Alert delivery'],
      ],
    },
    {
      id: 'partner-programme',
      tag: 'Partner Programme',
      headline: 'White-Label Execution for Agencies, Law Firms, and Consultancies',
      body: 'If you work with clients who face reputation challenges — PR agencies, law firms handling reputation matters, executive search firms, HR consultancies — our partner programme gives you white-label access to our entire delivery infrastructure. You manage the client relationship and billing. We execute under your brand with full reporting. Partners receive dedicated SLA tiers, a shared analytics dashboard, and a quarterly enablement session. Revenue share and capacity retainer models are both available.',
      metrics: [
        ['Silver/Gold/Platinum', 'Capacity tiers'],
        ['20–30%', 'Revenue share'],
        ['48h', 'Pilot onboarding'],
      ],
    },
  ]

  return (
    <main style={{ minHeight: '100vh', background: '#0A0F1E', color: '#FAFAFA', paddingTop: '80px' }}>
      {/* Page hero */}
      <section
        style={{
          padding: 'clamp(60px,8vw,100px) clamp(24px,5%,80px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#C8A96E',
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          Services
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(36px,5vw,60px)',
            fontWeight: 700,
            color: '#FAFAFA',
            lineHeight: 1.15,
            marginBottom: '20px',
            maxWidth: '720px',
          }}
        >
          Structured Workflows for Every Exposure Scenario
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.75 }}>
          Four core services. Each one documented, compliance-verified, and delivered with full reporting transparency.
        </p>
      </section>

      {/* Service sections */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          style={{
            padding: 'clamp(60px,8vw,100px) clamp(24px,5%,80px)',
            background: i % 2 === 1 ? '#070B16' : '#0A0F1E',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)',
              gap: 'clamp(40px,6vw,80px)',
              alignItems: 'center',
            }}
          >
            {/* Left: text */}
            <div>
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#C8A96E',
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                {s.tag}
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(26px,3.5vw,40px)',
                  fontWeight: 700,
                  color: '#FAFAFA',
                  lineHeight: 1.2,
                  marginBottom: '20px',
                }}
              >
                {s.headline}
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: '32px' }}>{s.body}</p>
              <a
                href="/en#assessment"
                style={{
                  display: 'inline-block',
                  padding: '13px 28px',
                  background: '#1854E8',
                  borderRadius: '100px',
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                Request Assessment →
              </a>
            </div>

            {/* Right: metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {s.metrics.map(([num, label]) => (
                <div
                  key={label}
                  style={{
                    background: '#131929',
                    border: '1px solid rgba(200,169,110,0.15)',
                    borderRadius: '12px',
                    padding: '24px 20px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 'clamp(20px,2.5vw,28px)',
                      fontWeight: 500,
                      color: '#C8A96E',
                      marginBottom: '6px',
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </p>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section
        style={{
          padding: 'clamp(60px,8vw,100px) clamp(24px,5%,80px)',
          textAlign: 'center',
          background: '#070B16',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px,4vw,44px)',
            color: '#FAFAFA',
            marginBottom: '16px',
          }}
        >
          Not Sure Where to Start?
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.7 }}>
          Book a 30-minute confidential assessment. We will map your exposure and recommend the right workflow — no obligation.
        </p>
        <a
          href="/en#assessment"
          style={{
            display: 'inline-block',
            padding: '15px 36px',
            background: '#1854E8',
            borderRadius: '100px',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 600,
            boxShadow: '0 0 30px rgba(24,84,232,0.35)',
          }}
        >
          Book Confidential Assessment →
        </a>
      </section>
    </main>
  )
}
