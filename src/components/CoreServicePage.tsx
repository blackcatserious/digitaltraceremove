import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { useParams } from 'react-router-dom'
import { coreServices } from '../data/coreServices'
import type { Language } from '../data/pages'
import { submitHubspotLead } from '../utils/hubspot'
import { trackEvent } from '../utils/analytics'
import { openCalendlyPopup } from '../utils/calendly'
import { NotFound } from './NotFound'
import { Testimonials } from './Testimonials'

const urgencyFallback = ['Immediate', 'Urgent', 'Standard']

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export const CoreServicePage = ({ language }: { language: Language }) => {
  const { slug } = useParams<{ slug: string }>()
  const service = useMemo(() => coreServices.find((item) => item.slug === slug), [slug])
  const copy = service?.copy[language] ?? service?.copy.en

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    urgency: '',
    links: '',
    deadline: '',
  })
  const [status, setStatus] = useState<SubmitState>('idle')

  if (!slug || !service || !copy) {
    return <NotFound language={language} />
  }

  const handleChange =
    (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }))
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') {
      return
    }
    setStatus('submitting')
    try {
      await submitHubspotLead({
        source: 'core-service',
        service: service.slug,
        language,
        ...formData,
      })
      trackEvent('form_submit', { form_name: 'core_service_form', form_page: service.slug, language })
      setStatus('success')
      setFormData({ name: '', email: '', urgency: '', links: '', deadline: '' })
    } catch {
      setStatus('error')
    }
  }

  const selectPlaceholder = {
    en: 'Select',
    fr: 'Sélectionner',
    es: 'Seleccionar',
    ru: 'Выберите',
  }[language]

  return (
    <section className="core-service">
      <header className="core-service__hero">
        <p className="core-service__kicker">Traceremove · Services</p>
        <h1>{copy.title}</h1>
        <p className="core-service__summary">{copy.summary}</p>
        <div className="core-service__meta">
          <p>{copy.timeline}</p>
          <p>{copy.priceRange}</p>
        </div>
      </header>

      <div className="core-service__grid">
        <div className="core-service__content">
          <section className="core-service__section" aria-labelledby="core-service-includes">
            <h2 id="core-service-includes">{copy.includesHeading}</h2>
            <ul>
              {copy.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="core-service__section" aria-labelledby="core-service-process">
            <h2 id="core-service-process">{copy.processHeading}</h2>
            <ol>
              {copy.steps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="core-service__form" aria-labelledby="core-service-form">
          <form onSubmit={handleSubmit} noValidate>
            <h2 id="core-service-form">{copy.formHeading}</h2>
            <p>{copy.formIntro}</p>
            <label>
              {copy.fields.name}
              <input type="text" name="name" value={formData.name} onChange={handleChange('name')} required />
            </label>
            <label>
              {copy.fields.email}
              <input type="email" name="email" value={formData.email} onChange={handleChange('email')} required />
            </label>
            <label>
              {copy.fields.urgency}
              <select name="urgency" value={formData.urgency} onChange={handleChange('urgency')} required>
                <option value="">{selectPlaceholder}</option>
                {(copy.urgencyOptions.length ? copy.urgencyOptions : urgencyFallback).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label>
              {copy.fields.links}
              <textarea name="links" rows={4} value={formData.links} onChange={handleChange('links')} required />
            </label>
            <label>
              {copy.fields.deadline}
              <input type="date" name="deadline" value={formData.deadline} onChange={handleChange('deadline')} required />
            </label>
            <button type="submit" className="button primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : copy.submit}
            </button>
          <button
            type="button"
            className="button secondary"
            onClick={() => {
              trackEvent('cta_click', {
                cta_text: 'Book Free Consultation',
                cta_position: 'service_page',
                page: service.slug,
                language,
              })
              openCalendlyPopup({ language, service_interest: service.slug })
            }}
          >
            Book Free Consultation
          </button>
            {status === 'success' && (
              <div className="form-status form-status--success" role="status" aria-live="polite">
                <strong>{copy.successTitle}</strong>
                <p>{copy.successMessage}</p>
              </div>
            )}
            {status === 'error' && (
              <div className="form-status form-status--error" role="alert">
                {copy.errorMessage}
              </div>
            )}
          </form>
        </aside>
      </div>

      <Testimonials language={language} />
    </section>
  )
}
