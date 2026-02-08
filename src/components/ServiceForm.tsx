import { FormEvent, useState } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import { trackEvent } from './analytics'

type FormState = {
  name: string
  email: string
  urgency: string
  links: string
  deadline: string
}

const initialState: FormState = {
  name: '',
  email: '',
  urgency: 'Urgent',
  links: '',
  deadline: '',
}

type ServiceFormProps = {
  serviceName: string
}

export function ServiceForm({ serviceName }: ServiceFormProps) {
  const { t } = useI18n()
  const [formState, setFormState] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setStatus('idle')
    try {
      const response = await fetch('/api/hubspot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          service: serviceName,
        }),
      })
      if (!response.ok) {
        throw new Error('Request failed')
      }
      setStatus('success')
      setFormState(initialState)
      trackEvent('form_submit', { service: serviceName })
    } catch (error) {
      setStatus('error')
      trackEvent('form_error', { service: serviceName })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} aria-label="Service request form">
      <label htmlFor="name">{t.form.name}</label>
      <input
        id="name"
        name="name"
        value={formState.name}
        onChange={(event) => setFormState({ ...formState, name: event.target.value })}
        required
        autoComplete="name"
      />

      <label htmlFor="email">{t.form.email}</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formState.email}
        onChange={(event) => setFormState({ ...formState, email: event.target.value })}
        required
        autoComplete="email"
      />

      <label htmlFor="urgency">{t.form.urgency}</label>
      <select
        id="urgency"
        name="urgency"
        value={formState.urgency}
        onChange={(event) => setFormState({ ...formState, urgency: event.target.value })}
      >
        <option>Urgent</option>
        <option>High</option>
        <option>Standard</option>
      </select>

      <label htmlFor="links">{t.form.links}</label>
      <textarea
        id="links"
        name="links"
        value={formState.links}
        onChange={(event) => setFormState({ ...formState, links: event.target.value })}
        placeholder="https://example.com"
        required
      />

      <label htmlFor="deadline">{t.form.deadline}</label>
      <input
        id="deadline"
        name="deadline"
        type="date"
        value={formState.deadline}
        onChange={(event) => setFormState({ ...formState, deadline: event.target.value })}
      />

      <button className="button-primary" type="submit" disabled={submitting}>
        {submitting ? 'Submitting...' : t.form.submit}
      </button>

      {status === 'success' ? (
        <p className="form-status status-success" role="status">
          {t.form.success}
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="form-status status-error" role="status">
          {t.form.error}
        </p>
      ) : null}
    </form>
  )
}
