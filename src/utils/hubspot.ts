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
}

export const submitHubspotLead = async (payload: HubspotLeadPayload) => {
  const response = await fetch('/api/hubspot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(errorBody?.message ?? 'HubSpot request failed')
  }

  return response.json().catch(() => ({}))
}
