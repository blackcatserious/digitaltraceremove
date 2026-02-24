export interface LeadMagnetRequestPayload {
  name: string
  email: string
  magnet: string
  language?: string
}

export const submitLeadMagnetRequest = async (payload: LeadMagnetRequestPayload) => {
  const response = await fetch('/api/lead-magnet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(errorBody?.message ?? 'Lead magnet request failed')
  }

  return response.json().catch(() => ({}))
}
