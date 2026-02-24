import { getStoredUtmParams } from './analytics'

export interface HubspotLeadPayload {
  source: string
  service?: string
  language?: string
  name: string
  email: string
  urgency?: string
  links?: string
  deadline?: string
  company?: string
  phone?: string
  message?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

export const submitHubspotLead = async (payload: HubspotLeadPayload) => {
  const enrichedPayload = { ...getStoredUtmParams(), ...payload }
  const response = await fetch('/api/hubspot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(enrichedPayload),
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(errorBody?.message ?? 'HubSpot request failed')
  }

  return response.json().catch(() => ({}))
}
