import { useState } from 'react'

type FormErrors = {
  companyName?: string
  email?: string
}

export default function ScanSection() {
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [result, setResult] = useState(false)
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [emailLoading, setEmailLoading] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const nextErrors: FormErrors = {}

    if (!companyName.trim()) {
      nextErrors.companyName = 'Company name or domain is required.'
    }

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setResult(false)
      return
    }

    setResult(true)
  }

  const submitEmail = async () => {
    if (!email.trim()) {
      setEmailError('Work email is required.')
      return
    }

    try {
      setEmailLoading(true)
      setEmailError('')
      await new Promise((resolve) => window.setTimeout(resolve, 600))
      setEmailSubmitted(true)
    } catch {
      setEmailError('Unable to send right now. Please try again.')
    } finally {
      setEmailLoading(false)
    }
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

        {result ? (
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
                <button type="submit" className="button primary" style={{ width: '100%', marginTop: '24px' }}>
                  Generate Report
                </button>
              </div>
            </div>
          </form>
        )}

        {result && !emailSubmitted ? (
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Get the full audit
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Receive flagged URLs and recommended next steps by email.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500"
              />
              <button
                type="button"
                onClick={submitEmail}
                disabled={emailLoading || !email}
                className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {emailLoading ? 'Sending...' : 'Email full audit'}
              </button>
            </div>

            {emailError ? (
              <div className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {emailError}
              </div>
            ) : null}
          </div>
        ) : null}

        {emailSubmitted ? (
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-green-200 bg-green-50 p-6 text-green-800 shadow-sm">
            Full audit request received. Check your inbox.
          </div>
        ) : null}

        <p style={{ marginTop: '12px' }}>
          Confidential. Your data is never shared beyond report generation.
        </p>
      </div>
    </section>
  )
}
