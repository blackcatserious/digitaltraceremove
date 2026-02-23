export type AuditTarget = 'My Personal Name' | 'My Business' | 'Both'

export interface AuditRequestPayload {
  fullName: string
  email: string
  auditTarget: AuditTarget
  language: 'en' | 'fr' | 'es'
  source: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

export const submitAuditRequest = async (payload: AuditRequestPayload) => {
  const response = await fetch('/api/audit-request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(errorBody?.message ?? 'Audit request failed')
  }

  return response.json().catch(() => ({}))
}
