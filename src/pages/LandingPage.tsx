import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import type { Language } from '../data/pages'
import { landingPages, localeNote, type LandingCopy } from '../data/landingPages'
import { submitNetlifyForm } from '../lib/netlifyForms'
import { trackConversion } from '../lib/analytics'
import { getContactPath } from '../lib/paths'

export default function LandingPage({
  slug,
  language,
}: {
  slug: string
  language: Language
}) {
  const copy: LandingCopy = landingPages[slug]
  const note = localeNote(language)
  const [values, setValues] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const setField = (name: string, value: string) => {
    if (status !== 'idle') setStatus('idle')
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const ok = await submitNetlifyForm(copy.formName, values)
    if (ok) {
      trackConversion(copy.conversion, { form: copy.formName, page: copy.slug })
      setStatus('success')
      setValues({})
    } else {
      setStatus('error')
    }
  }

  return (
    <section className="home-production" aria-labelledby="lp-heading">
      {note ? (
        <p
          style={{
            background: 'rgba(245, 158, 11, 0.12)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            color: '#92400e',
            borderRadius: '8px',
            padding: '8px 12px',
            fontSize: '12px',
            marginBottom: '16px',
          }}
        >
          {note}
        </p>
      ) : null}

      <header className="home-production__header">
        <p style={{ textTransform: 'uppercase', letterSpacing: '.08em', fontSize: '12px', opacity: 0.7 }}>
          {copy.eyebrow}
        </p>
        <h1 id="lp-heading">{copy.h1}</h1>
        <p>{copy.subhead}</p>
        {/* TODO: attach verifiable source (e.g. +840 assets, 92% retention) */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '12px 0 0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 18px',
            fontWeight: 600,
            fontSize: '13px',
          }}
        >
          {copy.proofRow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>

      {/* Above-the-fold scanner hero: 3-field form wired to Netlify Forms. */}
      <div
        id="live-audit"
        style={{ background: '#ffffff', borderRadius: '12px', padding: '24px', border: '1px solid var(--border)' }}
      >
        <h2 style={{ marginTop: 0 }}>{copy.primaryCta}</h2>
        <p>{copy.primaryCtaSub}</p>
        <p style={{ fontSize: '14px', opacity: 0.85 }}>{copy.formIntro}</p>

        {status === 'success' ? (
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '10px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="var(--blue)" strokeWidth="2" />
              <path d="M7 12.5L10.2 15.5L17 8.8" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p style={{ margin: 0, color: 'var(--blue)' }}>{copy.success}</p>
          </div>
        ) : (
          <form
            name={copy.formName}
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value={copy.formName} />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '12px',
                alignItems: 'start',
              }}
            >
              {copy.fields.map((field) => (
                <div key={field.name}>
                  <label>
                    {field.label}
                    <input
                      type={field.type ?? 'text'}
                      name={field.name}
                      value={values[field.name] ?? ''}
                      onChange={(event) => setField(field.name, event.target.value)}
                      placeholder={field.placeholder}
                      required={field.required}
                      style={{ display: 'block', width: '100%', marginTop: '6px' }}
                    />
                  </label>
                </div>
              ))}
            </div>
            <button type="submit" className="button primary" style={{ marginTop: '16px' }}>
              {copy.primaryCta}
            </button>
            {status === 'error' ? (
              <p style={{ color: '#b91c1c', marginTop: '10px' }}>
                Something went wrong. Email support@traceremove.com and we’ll pick it up.
              </p>
            ) : null}
          </form>
        )}
      </div>

      <section style={{ marginTop: '24px' }}>
        <ul style={{ display: 'grid', gap: '10px', paddingLeft: '20px' }}>
          {copy.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <p style={{ marginTop: '16px', fontStyle: 'italic', opacity: 0.85 }}>{copy.honestyLine}</p>
        <p style={{ marginTop: '16px', fontWeight: 600, fontSize: '13px' }}>{copy.trustFooter}</p>
        <p style={{ marginTop: '12px' }}>
          <Link className="button ghost" to={getContactPath(language)}>
            Talk to a senior operator
          </Link>
        </p>
      </section>
    </section>
  )
}
