import { useEffect } from 'react'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About — TraceRemove'
  }, [])

  const S = {
    page: { minHeight:'100vh', background:'#0A0F1E',
            color:'#FAFAFA', paddingTop:'80px' } as React.CSSProperties,
    section: (alt?: boolean) => ({
      padding: 'clamp(60px,8vw,100px) clamp(24px,5%,80px)',
      background: alt ? '#070B16' : '#0A0F1E',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    } as React.CSSProperties),
    inner: { maxWidth:'1200px', margin:'0 auto' } as React.CSSProperties,
    kicker: { fontSize:'11px', fontWeight:600, color:'#C8A96E',
              letterSpacing:'.1em', textTransform:'uppercase' as const,
              display:'block', marginBottom:'16px' },
    h1: { fontFamily:"'Playfair Display',serif",
          fontSize:'clamp(36px,5vw,60px)', fontWeight:700,
          color:'#FAFAFA', lineHeight:1.15,
          marginBottom:'20px', maxWidth:'720px' } as React.CSSProperties,
    h2: { fontFamily:"'Playfair Display',serif",
          fontSize:'clamp(26px,3.5vw,40px)', fontWeight:700,
          color:'#FAFAFA', lineHeight:1.2,
          marginBottom:'20px' } as React.CSSProperties,
    body: { fontSize:'17px', color:'rgba(255,255,255,0.65)',
            lineHeight:1.8, maxWidth:'660px',
            marginBottom:'24px' } as React.CSSProperties,
  }

  const stats = [
    { n:'500+', l:'Cases resolved' },
    { n:'98%', l:'Success rate' },
    { n:'30–90', l:'Days to results' },
    { n:'6', l:'Active time zones' },
  ]

  const methodology = [
    { n:'01', t:'Signal Detection', b:'We begin with a full audit of your search presence across Google, Bing, review platforms, news sources, and social signals. Every piece of damaging content is catalogued, sourced, and scored by severity and reach.' },
    { n:'02', t:'Workflow Design', b:'Based on the audit, we design a structured resolution workflow specific to your exposure profile. Each workflow specifies the exact platforms targeted, methods applied, timeline, and reporting cadence.' },
    { n:'03', t:'Structured Execution', b:'Our team executes through documented resolution pathways — DMCA-compliant requests, GDPR right-to-erasure workflows, platform content policy escalations, and editorial correction processes.' },
    { n:'04', t:'Reporting & Monitoring', b:'Every sprint concludes with a full outcome report showing which content was resolved, what changed in search results, and what monitoring is in place going forward. No black-box delivery.' },
  ]

  const compliance = [
    'DMCA-compliant content requests',
    'GDPR right-to-erasure workflows',
    'Platform content policy escalations',
    'Editorial correction processes',
    'Structured sprint cycles with documented deliverables',
    'Best-efforts execution — no outcome guaranteed without documentation',
  ]

  return (
    <main style={S.page}>

      {/* Hero */}
      <section style={S.section()}>
        <div style={S.inner}>
          <span style={S.kicker}>About TraceRemove</span>
          <h1 style={S.h1}>Built for Businesses That Can't Afford to Ignore Their Search Presence</h1>
          <p style={S.body}>TraceRemove is a New York-based data exposure management firm. We work with businesses, executives, and agency partners to identify, monitor, and resolve damaging online content through structured, compliance-verified workflows.</p>
          <p style={S.body}>We don't make promises about outcomes we can't control. We document everything, execute through verified pathways, and report transparently on every sprint.</p>
        </div>
      </section>

      {/* Stats */}
      <section style={S.section(true)}>
        <div style={{ ...S.inner, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))', gap:'24px' }}>
          {stats.map(s => (
            <div key={s.l} style={{ background:'#131929', border:'1px solid rgba(200,169,110,0.15)', borderRadius:'12px', padding:'28px 24px' }}>
              <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'36px', fontWeight:500, color:'#C8A96E', marginBottom:'8px' }}>{s.n}</p>
              <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.45)', textTransform:'uppercase', letterSpacing:'.06em' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section style={S.section()}>
        <div style={S.inner}>
          <span style={S.kicker}>How We Work</span>
          <h2 style={S.h2}>A Four-Stage Process. Documented at Every Step.</h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'24px', marginTop:'40px' }}>
            {methodology.map(m => (
              <div key={m.n} style={{ background:'#131929', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'12px', padding:'28px 24px' }}>
                <p style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:'11px', color:'#C8A96E', marginBottom:'12px', letterSpacing:'.1em' }}>{m.n}</p>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'18px', color:'#FAFAFA', marginBottom:'12px' }}>{m.t}</h3>
                <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.55)', lineHeight:1.75 }}>{m.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section style={S.section(true)}>
        <div style={{ ...S.inner, display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,480px),1fr))', gap:'clamp(40px,6vw,80px)', alignItems:'center' }}>
          <div>
            <span style={S.kicker}>Compliance & Ethics</span>
            <h2 style={S.h2}>Every Action Documented. Every Method Verified.</h2>
            <p style={S.body}>We operate exclusively through methods that comply with applicable law and platform policies. We do not use fake reviews, coordinated inauthentic behaviour, or black-hat SEO techniques.</p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
            {compliance.map(c => (
              <div key={c} style={{ display:'flex', gap:'12px', alignItems:'flex-start', padding:'14px 16px', background:'#131929', borderRadius:'8px', border:'1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ color:'#C8A96E', fontSize:'14px', flexShrink:0, marginTop:'1px' }}>✓</span>
                <span style={{ fontSize:'14px', color:'rgba(255,255,255,0.65)', lineHeight:1.6 }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entity */}
      <section style={S.section()}>
        <div style={S.inner}>
          <span style={S.kicker}>Legal Entity</span>
          <h2 style={{ ...S.h2, fontSize:'clamp(22px,3vw,32px)' }}>TRACEREMOVE LLC</h2>
          <p style={{ ...S.body, fontFamily:"'JetBrains Mono',monospace", fontSize:'14px', color:'rgba(255,255,255,0.45)', lineHeight:1.9 }}>
            Wyoming Limited Liability Company<br/>
            Registered: 5840 E 2nd St, Ste 7000, Casper, WY 82609, USA<br/>
            Operational: 750 Manhattan Ave, Brooklyn, NY 11222, USA<br/>
            support@traceremove.com
          </p>
          <a href="/en#assessment" style={{ display:'inline-block', marginTop:'8px', padding:'13px 28px', background:'#1854E8', borderRadius:'100px', color:'#fff', textDecoration:'none', fontSize:'14px', fontWeight:600 }}>
            Request Assessment →
          </a>
        </div>
      </section>

    </main>
  )
}
