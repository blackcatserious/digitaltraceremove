import { FormEvent, useState } from 'react'

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    type: 'Law Firm',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      type: 'Law Firm',
      description: '',
    })
  }

  const pageStyle = {
    minHeight: '100vh',
    background: '#0A0F1E',
    color: '#FAFAFA',
    paddingTop: '80px',
  } as const
  const heroStyle = {
    paddingTop: 'clamp(60px, 8vw, 100px)',
    paddingBottom: 'clamp(40px, 5vw, 60px)',
    paddingLeft: 'clamp(24px, 5%, 80px)',
    paddingRight: 'clamp(24px, 5%, 80px)',
    maxWidth: '1200px',
    margin: '0 auto',
  } as const
  const sectionStyle = {
    paddingTop: 'clamp(48px, 6vw, 80px)',
    paddingBottom: 'clamp(48px, 6vw, 80px)',
    paddingLeft: 'clamp(24px, 5%, 80px)',
    paddingRight: 'clamp(24px, 5%, 80px)',
    maxWidth: '1200px',
    margin: '0 auto',
  } as const
  const bodyTextStyle = {
    color: 'rgba(255,255,255,0.72)',
    lineHeight: 1.75,
    maxWidth: '680px',
  } as const

  return (
    <section className="home-production" aria-labelledby="partners-page-heading" style={pageStyle}>
      <header className="home-production__header" style={heroStyle}>
        <h1 id="partners-page-heading" style={{ fontFamily: "'Playfair Display', serif" }}>The Partner Programme</h1>
        <p style={bodyTextStyle}>
          White-label data exposure management for law firms, PR agencies, and HR consultancies. Your brand. Our
          infrastructure.
        </p>
        <a className="button primary" href="#partner-application">
          Apply to Become a Partner
        </a>
      </header>

      <section style={sectionStyle}>
        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>How it works</h2>
        <ol style={{ display: 'grid', gap: '10px', paddingLeft: '20px' }}>
          <li>Apply and sign partner agreement</li>
          <li>Receive enablement kit and onboarding sprint</li>
          <li>Submit client cases, track progress, receive commissions</li>
        </ol>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Commercial models</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif" }}>White-label capacity</h3>
            <p style={bodyTextStyle}>Monthly retainer for sprint credits. You deliver under your brand.</p>
          </article>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif" }}>Revenue share</h3>
            <p style={bodyTextStyle}>Margin split 20-30%. Joint delivery with reporting.</p>
          </article>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif" }}>Referral</h3>
            <p style={bodyTextStyle}>Fixed bounty per qualified referral. Lightest operational overhead.</p>
          </article>
        </div>
      </section>

      <section style={sectionStyle}>
        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Capacity tiers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif" }}>Silver</h3>
            <p style={bodyTextStyle}>$5,000/mo</p>
            <p style={bodyTextStyle}>Standard SLA</p>
            <p style={bodyTextStyle}>X workflow credits per month</p>
          </article>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif" }}>Gold</h3>
            <p style={bodyTextStyle}>$10,000/mo</p>
            <p style={bodyTextStyle}>Priority queue</p>
            <p style={bodyTextStyle}>More credits</p>
            <p style={bodyTextStyle}>Quarterly enablement</p>
          </article>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif" }}>Platinum</h3>
            <p style={bodyTextStyle}>$18,000/mo</p>
            <p style={bodyTextStyle}>Dedicated channel</p>
            <p style={bodyTextStyle}>Enterprise SLA</p>
            <p style={bodyTextStyle}>Custom credits</p>
          </article>
        </div>
      </section>

      <section id="partner-application" style={sectionStyle}>
        <h2 style={{ fontFamily: "'Playfair Display', serif" }}>Application form</h2>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px', maxWidth: '760px' }}>
          <input
            type="text"
            placeholder="Company name"
            value={formData.companyName}
            onChange={(event) => setFormData((prev) => ({ ...prev, companyName: event.target.value }))}
            required
          />
          <input
            type="text"
            placeholder="Contact name"
            value={formData.contactName}
            onChange={(event) => setFormData((prev) => ({ ...prev, contactName: event.target.value }))}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
            required
          />
          <select
            value={formData.type}
            onChange={(event) => setFormData((prev) => ({ ...prev, type: event.target.value }))}
          >
            <option>Law Firm</option>
            <option>PR Agency</option>
            <option>HR</option>
            <option>Other</option>
          </select>
          <textarea
            rows={4}
            placeholder="Brief description of client base"
            value={formData.description}
            onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
            required
          />
          <button type="submit" className="button primary" style={{ width: 'fit-content' }}>
            Submit Application
          </button>
        </form>
        <p style={{ ...bodyTextStyle, marginTop: '10px' }}>We review all applications within 2 business days.</p>
        {submitted ? <p style={{ color: 'var(--blue)' }}>Application received. Our partner team will contact you shortly.</p> : null}
      </section>
    </section>
  )
}
