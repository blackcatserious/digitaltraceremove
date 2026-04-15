const Footer = () => {
  return (
    <footer style={{ background: '#070B16', color: '#fff', padding: '56px 24px 22px' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.35fr 1fr 1fr 1fr',
          gap: '24px',
        }}
      >
        <div>
          <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '30px', color: 'var(--white)' }}>Traceremove</p>
          <p style={{ margin: '12px 0 18px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
            Structured tools and managed workflows to identify, monitor, and resolve online data exposure for
            businesses and agency partners worldwide.
          </p>
          <div style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.82)', fontSize: '13px', lineHeight: 1.7 }}>
            <div>TRACEREMOVE LLC</div>
            <div>750 Manhattan Ave</div>
            <div>Brooklyn, NY 11222, USA</div>
            <div>support@traceremove.com</div>
          </div>
        </div>

        <div>
          <p style={{ margin: '0 0 12px', fontWeight: 700, color: 'var(--white)' }}>Services</p>
          {['Monitoring and Alerts', 'Workflow Credits', 'Managed Programmes', 'Cybersecurity Module'].map((item) => (
            <a
              key={item}
              href="#"
              style={{ display: 'block', marginBottom: '8px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.35)'
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <div>
          <p style={{ margin: '0 0 12px', fontWeight: 700, color: 'var(--white)' }}>Partners</p>
          {['Partner Overview', 'Silver / Gold / Platinum', 'Apply as Partner', 'Partner Portal'].map((item) => (
            <a
              key={item}
              href="#"
              style={{ display: 'block', marginBottom: '8px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.35)'
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <div>
          <p style={{ margin: '0 0 12px', fontWeight: 700, color: 'var(--white)' }}>Company</p>
          {['About', 'Case Studies', 'Trust Center', 'Blog', 'Contact'].map((item) => (
            <a
              key={item}
              href="#"
              style={{ display: 'block', marginBottom: '8px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.35)'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '28px auto 0',
          paddingTop: '16px',
          borderTop: '1px solid rgba(255,255,255,0.14)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', color: 'rgba(255,255,255,0.7)' }}>
          <span>2025 TraceRemove LLC</span>
          {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((item) => (
            <a
              key={item}
              href="#"
              style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
              onMouseEnter={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.7)'
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.color = 'rgba(255,255,255,0.35)'
              }}
            >
              {item}
            </a>
          ))}
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.72)' }}>
          New York, NY / Serving clients globally
        </div>
      </div>
    </footer>
  )
}

export default Footer
