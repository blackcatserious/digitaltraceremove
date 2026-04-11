import React from 'react'

export default function FinalCTA() {
  const [name, setName] = React.useState('')
  const [company, setCompany] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email) return
    setSubmitted(true)
    // TODO: connect to Make.com webhook (Prompt #24)
  }

  return (
    <section className="home-production" style={{ background: 'var(--navy)', textAlign: 'center' }}>
      <p style={{ color: 'var(--gold)' }}>Every Day Has a Cost</p>
      <h2 style={{ color: 'var(--white)' }}>Ready to Resolve Your Exposure?</h2>
      <p style={{ color: 'rgba(255,255,255,0.88)' }}>
        Book a confidential 30-minute assessment. We will map your exposure surfaces, identify priorities, and give
        you a clear resolution plan with no obligation.
      </p>
      <form
        style={{
          background: 'rgba(255,255,255,0.04)',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '600px',
          margin: '0 auto',
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
          <div>
            <label
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.45)',
                display: 'block',
                marginBottom: '6px',
                textTransform: 'uppercase',
                letterSpacing: '.06em',
              }}
            >
              Your name
            </label>
            <input
              type="text"
              placeholder="Jane Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                fontFamily: 'inherit',
                fontSize: '14px',
              }}
            />
          </div>
          <div>
            <label
              style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.45)',
                display: 'block',
                marginBottom: '6px',
                textTransform: 'uppercase',
                letterSpacing: '.06em',
              }}
            >
              Company
            </label>
            <input
              type="text"
              placeholder="Acme Corp"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.06)',
                color: '#fff',
                fontFamily: 'inherit',
                fontSize: '14px',
              }}
            />
          </div>
        </div>
        <div style={{ marginBottom: '14px' }}>
          <label
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.45)',
              display: 'block',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '.06em',
            }}
          >
            Work email
          </label>
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.06)',
              color: '#fff',
              fontFamily: 'inherit',
              fontSize: '14px',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label
            style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.45)',
              display: 'block',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '.06em',
            }}
          >
            Describe your situation (optional)
          </label>
          <textarea
            placeholder="What type of content are you dealing with? Which platforms?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.06)',
              color: '#fff',
              fontFamily: 'inherit',
              fontSize: '14px',
              resize: 'vertical',
            }}
          />
        </div>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ color: '#22C87A', fontSize: '16px', fontWeight: 500, marginBottom: '8px' }}>
              Assessment request received.
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px' }}>
              Check your email — an NDA will arrive within 5 minutes.
            </div>
          </div>
        ) : (
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              background: '#1854E8',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: 500,
              cursor: 'pointer',
            }}
          >
            Book Confidential Assessment →
          </button>
        )}
        <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
          Full NDA sent within 5 minutes of submission.
        </p>
      </form>
    </section>
  )
}
