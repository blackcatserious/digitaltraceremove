import { useState } from 'react'

export default function ScanSection() {
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [companyError, setCompanyError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    let hasError = false

    if (!company.trim()) {
      setCompanyError('Company name or domain is required.')
      hasError = true
    } else {
      setCompanyError('')
    }

    if (!email.trim()) {
      setEmailError('Work email is required.')
      hasError = true
    } else {
      setEmailError('')
    }

    if (hasError) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
  }

  return (
    <section className="home-production" aria-labelledby="scan-heading">
      <header className="home-production__header">
        <h2 id="scan-heading">Run a Free Business Exposure Scan</h2>
        <p>
          Enter your company name or domain. We&apos;ll generate a report showing your current online data exposure
          across major platforms.
        </p>
      </header>

      <div style={{ background: '#ffffff', borderRadius: '12px', padding: '24px', border: '1px solid var(--border)' }}>
        <h3>Business Exposure Report</h3>
        <p>Takes 60 seconds. No credit card required. Report delivered to your email.</p>

        <form onSubmit={handleSubmit} noValidate>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr', gap: '12px', alignItems: 'start' }}>
            <div>
              <label>
                Company name or domain
                <input
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="e.g. acme.com"
                  style={{ display: 'block', width: '100%', marginTop: '6px' }}
                />
              </label>
              {companyError ? <p style={{ color: '#b91c1c', margin: '6px 0 0' }}>{companyError}</p> : null}
            </div>

            <div>
              <label>
                Work email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  style={{ display: 'block', width: '100%', marginTop: '6px' }}
                />
              </label>
              {emailError ? <p style={{ color: '#b91c1c', margin: '6px 0 0' }}>{emailError}</p> : null}
            </div>

            <div>
              <button type="submit" className="button primary" style={{ width: '100%', marginTop: '24px' }}>
                Generate Report →
              </button>
            </div>
          </div>
        </form>

        <p style={{ marginTop: '12px' }}>
          🔒 Confidential. Your data is never shared or stored beyond report generation.
        </p>

        {submitted ? (
          <p style={{ marginTop: '12px', color: 'var(--blue)' }}>
            Your exposure report is being generated. Check your email within 5 minutes.
          </p>
        ) : null}
      </div>
    </section>
  )
}
