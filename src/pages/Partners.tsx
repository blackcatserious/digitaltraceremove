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

  return (
    <section className="home-production" aria-labelledby="partners-page-heading">
      <header className="home-production__header">
        <h1 id="partners-page-heading">The Partner Programme</h1>
        <p>
          Build a repeatable reputation-protection offer for your clients with delivery support from TraceRemove.
          We equip agencies and advisory firms with workflows, reporting, and escalation coverage.
        </p>
        <a className="button primary" href="#partner-application">
          Apply to Become a Partner
        </a>
      </header>

      <section style={{ marginTop: '18px' }}>
        <h2>How the programme works</h2>
        <ol style={{ display: 'grid', gap: '10px', paddingLeft: '20px' }}>
          <li>Apply and complete partner qualification with your account lead.</li>
          <li>Launch a two-week enablement sprint with sales scripts and delivery playbooks.</li>
          <li>Submit client cases through the shared workspace and track outcomes in real time.</li>
          <li>Review monthly performance, commission, and expansion opportunities.</li>
        </ol>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Engagement models</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3>White-label capacity</h3>
            <p>Reserve dedicated sprint capacity each month and deliver under your own brand.</p>
          </article>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3>Revenue share</h3>
            <p>Use a shared delivery model with margin splits tied to active client workstreams.</p>
          </article>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3>Referral</h3>
            <p>Earn a fixed bounty for qualified introductions when clients prefer direct contracts.</p>
          </article>
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Capacity tiers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3>Silver</h3>
            <p>$5,000/mo</p>
            <p>Standard SLA</p>
            <p>Up to 4 active workflow credits</p>
            <p>Monthly partner performance review</p>
          </article>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3>Gold</h3>
            <p>$10,000/mo</p>
            <p>Priority queue</p>
            <p>Up to 10 active workflow credits</p>
            <p>Quarterly enablement workshop</p>
          </article>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3>Platinum</h3>
            <p>$18,000/mo</p>
            <p>Dedicated channel</p>
            <p>Enterprise SLA</p>
            <p>Custom workflow allocation and escalation desk access</p>
          </article>
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Need to scope a partnership first?</h2>
        <p>
          If you want to validate fit before applying, book a discovery call with our partner team and we will map
          the right model for your client base.
        </p>
        <a className="button secondary" href="/contact">
          Talk to Partnerships
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
        <p style={{ marginTop: '10px', color: 'var(--gray)' }}>We review all applications within 2 business days.</p>
        {submitted ? <p style={{ color: 'var(--blue)' }}>Application received. Our partner team will contact you shortly.</p> : null}
      </section>
    </section>
  )
}
