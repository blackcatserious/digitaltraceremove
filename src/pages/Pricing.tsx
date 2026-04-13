export default function PricingPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0A0F1E', color: '#FAFAFA', paddingTop: '80px' }}>
      {/* Hero */}
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
            letterSpacing: '.1em',
            color: '#C8A96E',
            marginBottom: '16px',
            textTransform: 'uppercase',
          }}
        >
          Pricing
        </p>
        <h1
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 'clamp(36px,5vw,60px)',
            fontWeight: 700,
            color: '#FAFAFA',
            marginBottom: '16px',
            lineHeight: 1.15,
          }}
        >
          Transparent Pricing. No Hidden Costs.
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', maxWidth: '580px', lineHeight: 1.7 }}>
          Start with self-serve monitoring. Scale to managed programmes when ready.
        </p>
      </section>

      {/* Self-serve tiers */}
      <section
        style={{
          padding: '0 clamp(24px,5%,80px) clamp(60px,8vw,80px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px' }}>
          {/* Monitor */}
          <div
            style={{
              background: '#131929',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '32px',
            }}
          >
            <p
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#C8A96E',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Monitor
            </p>
            <p
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: '40px',
                fontWeight: 500,
                color: '#FAFAFA',
                marginBottom: '4px',
              }}
            >
              $49<span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)' }}>/mo</span>
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>
              Monitoring, alerts, and monthly exposure report
            </p>
            {['Automated exposure monitoring', 'Monthly risk report', 'Email alerts', 'Dashboard access'].map((f) => (
              <p
                key={f}
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.65)',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                ✓ {f}
              </p>
            ))}
            <a
              href="/en#assessment"
              style={{
                display: 'block',
                marginTop: '28px',
                padding: '12px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                textAlign: 'center',
                color: '#FAFAFA',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Get Started
            </a>
          </div>

          {/* Protect — featured */}
          <div
            style={{
              background: '#131929',
              border: '2px solid #1854E8',
              borderRadius: '16px',
              padding: '32px',
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#1854E8',
                color: '#fff',
                fontSize: '11px',
                fontWeight: 600,
                padding: '4px 16px',
                borderRadius: '100px',
              }}
            >
              Most Popular
            </span>
            <p
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#C8A96E',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Protect
            </p>
            <p
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: '40px',
                fontWeight: 500,
                color: '#FAFAFA',
                marginBottom: '4px',
              }}
            >
              $149<span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)' }}>/mo</span>
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>
              Monitoring plus quarterly workflow credits
            </p>
            {[
              'Everything in Monitor',
              'Quarterly workflow credits (3 sprints)',
              'Progress tracking',
              'Priority email support',
              'Monthly executive summary',
            ].map((f) => (
              <p
                key={f}
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.65)',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                ✓ {f}
              </p>
            ))}
            <a
              href="/en#assessment"
              style={{
                display: 'block',
                marginTop: '28px',
                padding: '12px',
                background: '#1854E8',
                borderRadius: '8px',
                textAlign: 'center',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              Get Started
            </a>
          </div>

          {/* Business */}
          <div
            style={{
              background: '#131929',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '32px',
            }}
          >
            <p
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#C8A96E',
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              Business
            </p>
            <p
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: '40px',
                fontWeight: 500,
                color: '#FAFAFA',
                marginBottom: '4px',
              }}
            >
              $399<span style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)' }}>/mo</span>
            </p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px' }}>
              Team workspace with monthly workflow credits
            </p>
            {[
              'Everything in Protect',
              'Team workspace (5 users)',
              'Monthly workflow credits (4 sprints)',
              'Dedicated account support',
              'API access for reporting',
            ].map((f) => (
              <p
                key={f}
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.65)',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                ✓ {f}
              </p>
            ))}
            <a
              href="/en#assessment"
              style={{
                display: 'block',
                marginTop: '28px',
                padding: '12px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                textAlign: 'center',
                color: '#FAFAFA',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Managed programmes */}
      <section
        style={{
          background: '#070B16',
          padding: 'clamp(48px,6vw,80px) clamp(24px,5%,80px)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#C8A96E',
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          Enterprise & Partners
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 'clamp(28px,4vw,44px)',
            color: '#FAFAFA',
            marginBottom: '16px',
          }}
        >
          Always-On Managed Programmes
        </h2>
        <p
          style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: '560px',
            margin: '0 auto 32px',
            lineHeight: 1.7,
          }}
        >
          High-volume or complex exposure cases handled by a dedicated team. Custom sprint plans, weekly reporting,
          and direct account management.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          {[
            ['Always-On Search Trust', 'From $4,900/month'],
            ['Cybersecurity Monitoring', 'From $7,800/quarter'],
            ['Enterprise Custom', 'Contact us'],
          ].map(([name, price]) => (
            <div
              key={name}
              style={{
                background: '#131929',
                border: '1px solid rgba(200,169,110,0.2)',
                borderRadius: '12px',
                padding: '20px 28px',
                textAlign: 'left',
                minWidth: '220px',
              }}
            >
              <p style={{ fontSize: '13px', fontWeight: 500, color: '#FAFAFA', marginBottom: '6px' }}>{name}</p>
              <p style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '16px', color: '#C8A96E' }}>{price}</p>
            </div>
          ))}
        </div>
        <a
          href="/en#assessment"
          style={{
            display: 'inline-block',
            padding: '14px 32px',
            background: '#1854E8',
            borderRadius: '100px',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 600,
          }}
        >
          Request Managed Programme →
        </a>
        <p style={{ marginTop: '16px', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
          Workflow credits represent time-boxed resolution cycles. Best-efforts delivery. Third-party outcomes not
          guaranteed.
        </p>
      </section>
    </main>
  )
}
