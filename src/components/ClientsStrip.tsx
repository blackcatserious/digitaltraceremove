const clientIndustries = [
  'Law Firms',
  'PR Agencies',
  'Private Equity',
  'Executive Search',
  'Corporate Comms',
  'Healthcare',
]

export default function ClientsStrip() {
  return (
    <section
      aria-label="Client industries"
      style={{
        background: 'var(--navy-mid, #131929)',
        borderTop: '1px solid rgba(200,169,110,0.08)',
        borderBottom: '1px solid rgba(200,169,110,0.08)',
        padding: '28px 40px',
      }}
    >
      <p
        style={{
          margin: '0 0 14px',
          textAlign: 'center',
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '.08em',
          color: 'rgba(255,255,255,0.35)',
        }}
      >
        Trusted by businesses and agencies across industries
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          flexWrap: 'wrap',
        }}
      >
        {clientIndustries.map((industry) => (
          <span
            key={industry}
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.18)',
              textTransform: 'uppercase',
              letterSpacing: '.06em',
            }}
          >
            {industry}
          </span>
        ))}
      </div>
    </section>
  )
}
