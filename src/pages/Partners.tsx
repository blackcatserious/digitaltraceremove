import { FormEvent, useState } from 'react'

const deliveryTracks = [
  {
    title: 'Referral',
    detail: 'You introduce qualified clients. We run delivery and keep you updated through shared reporting.',
    fit: 'Best for firms that want low operational overhead.',
  },
  {
    title: 'Co-delivery',
    detail: 'Your team leads client communication while we handle workflows, documentation, and execution.',
    fit: 'Best for agencies with an active client success team.',
  },
  {
    title: 'White-label',
    detail: 'We operate behind your brand with agreed playbooks, templates, and response standards.',
    fit: 'Best for partners building a long-term service line.',
  },
]

const slaTiers = [
  { name: 'Silver', response: '1 business day', cadence: 'Weekly status update', scope: 'Up to 6 active workflows' },
  { name: 'Gold', response: 'Same day', cadence: 'Twice-weekly status update', scope: 'Up to 15 active workflows' },
  { name: 'Platinum', response: '< 4 hours', cadence: 'Dedicated channel + live tracker', scope: 'Custom volume and escalation paths' },
]

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

  return (
    <section className="home-production" aria-labelledby="partners-page-heading">
      <header className="home-production__header">
        <h1 id="partners-page-heading">Partner Program</h1>
        <p>
          Structured delivery support for law firms, PR teams, cybersecurity consultancies, and growth agencies that
          need confidential, documented execution.
        </p>
      </header>

      <section style={{ marginTop: '20px' }}>
        <h2>Who this is for</h2>
        <ul style={{ display: 'grid', gap: '8px', paddingLeft: '20px' }}>
          <li>Advisory firms supporting high-visibility clients.</li>
          <li>Agencies adding data exposure workflows to existing retainers.</li>
          <li>In-house teams needing overflow capacity during escalations.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Delivery model</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
          {deliveryTracks.map((track) => (
            <article key={track.title} style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
              <h3 style={{ marginTop: 0 }}>{track.title}</h3>
              <p>{track.detail}</p>
              <p style={{ marginBottom: 0, color: 'var(--gray)' }}>{track.fit}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>SLA tiers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
          {slaTiers.map((tier) => (
            <article key={tier.name} style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
              <h3 style={{ marginTop: 0 }}>{tier.name}</h3>
              <p>
                <strong>Initial response:</strong> {tier.response}
              </p>
              <p>
                <strong>Reporting:</strong> {tier.cadence}
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Capacity:</strong> {tier.scope}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '20px', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px' }}>
        <h2 style={{ marginTop: 0 }}>Start with a partner readiness review</h2>
        <p>
          We map your client profile, recommend the right model, and share a rollout plan within two business days.
        </p>
        <a className="button primary" href="#partner-application">
          Apply to Become a Partner
        </a>
      </section>

      <section id="partner-application" style={{ marginTop: '22px' }}>
        <h2>Application form</h2>
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
            <option>Cybersecurity Consultancy</option>
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
        <p style={{ marginTop: '10px', color: 'var(--gray)' }}>All applications are reviewed within 2 business days.</p>
        {submitted ? <p style={{ color: 'var(--blue)' }}>Application received. Our partner team will contact you shortly.</p> : null}
      </section>
    </section>
  )
}
