import { useState } from 'react'

type FormErrors = {
  companyName?: string
  email?: string
}

export default function ScanSection() {
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const nextErrors: FormErrors = {}

    if (!companyName.trim()) {
      nextErrors.companyName = 'Company name or domain is required.'
    }

    if (!email.trim()) {
      nextErrors.email = 'Work email is required.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false)
      return
    }

    setIsSubmitted(true)
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
        <h3 style={{ marginTop: 0 }}>Business Exposure Report</h3>
        <p>60 seconds. No credit card required. Report delivered to your email.</p>

        {isSubmitted ? (
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '10px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="var(--blue)" strokeWidth="2" />
              <path d="M7 12.5L10.2 15.5L17 8.8" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p style={{ margin: 0, color: 'var(--blue)' }}>
              Your exposure report is being generated. Check your email within 5 minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '12px',
                alignItems: 'start',
              }}
            >
              <div>
                <label>
                  Company name or domain
                  <input
                    type="text"
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
                    placeholder="e.g. acme.com"
                    style={{ display: 'block', width: '100%', marginTop: '6px' }}
                  />
                </label>
                {errors.companyName ? <p style={{ color: '#b91c1c', margin: '6px 0 0' }}>{errors.companyName}</p> : null}
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
                {errors.email ? <p style={{ color: '#b91c1c', margin: '6px 0 0' }}>{errors.email}</p> : null}
              </div>

              <div>
                <button type="submit" className="button primary" style={{ width: '100%', marginTop: '24px' }}>
                  Generate Report
                </button>
              </div>
            </div>
          </form>
        )}

        <p style={{ marginTop: '12px' }}>
          Confidential. Your data is never shared beyond report generation.
        </p>
      </div>
    </section>
  )
}
