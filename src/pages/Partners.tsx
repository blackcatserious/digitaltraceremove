import { FormEvent, useState } from 'react'
import { submitNetlifyForm } from '../lib/netlifyForms'
import { trackConversion } from '../lib/analytics'

const FORM_NAME = 'partner-application'

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    type: 'Law Firm',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const ok = await submitNetlifyForm(FORM_NAME, formData)
    if (!ok) {
      return
    }
    trackConversion('contact', { form: FORM_NAME })
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
          White-label data exposure management for law firms, PR agencies, and HR consultancies. Your brand. Our
          infrastructure.
        </p>
        <a className="button primary" href="#partner-application">
          Apply to Become a Partner
        </a>
      </header>

      <section style={{ marginTop: '18px' }}>
        <h2>How it works</h2>
        <ol style={{ display: 'grid', gap: '10px', paddingLeft: '20px' }}>
          <li>Apply and sign partner agreement</li>
          <li>Receive enablement kit and onboarding sprint</li>
          <li>Submit client cases, track progress, receive commissions</li>
        </ol>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Commercial models</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3>White-label capacity</h3>
            <p>Monthly retainer for sprint credits. You deliver under your brand.</p>
          </article>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3>Revenue share</h3>
            <p>Margin split 20-30%. Joint delivery with reporting.</p>
          </article>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3>Referral</h3>
            <p>Fixed bounty per qualified referral. Lightest operational overhead.</p>
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
            <p>X workflow credits per month</p>
          </article>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3>Gold</h3>
            <p>$10,000/mo</p>
            <p>Priority queue</p>
            <p>More credits</p>
            <p>Quarterly enablement</p>
          </article>
          <article style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
            <h3>Platinum</h3>
            <p>$18,000/mo</p>
            <p>Dedicated channel</p>
            <p>Enterprise SLA</p>
            <p>Custom credits</p>
          </article>
        </div>
      </section>

      <section id="partner-application" style={{ marginTop: '22px' }}>
        <h2>Application form</h2>
        <form
          name={FORM_NAME}
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          style={{ display: 'grid', gap: '10px', maxWidth: '760px' }}
        >
          <input type="hidden" name="form-name" value={FORM_NAME} />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            value={formData.companyName}
            onChange={(event) => setFormData((prev) => ({ ...prev, companyName: event.target.value }))}
            required
          />
          <input
            type="text"
            name="contactName"
            placeholder="Contact name"
            value={formData.contactName}
            onChange={(event) => setFormData((prev) => ({ ...prev, contactName: event.target.value }))}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
            required
          />
          <select
            name="type"
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
            name="description"
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
