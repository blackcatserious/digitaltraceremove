const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const sanitize = (value, limit = 512) =>
  typeof value === 'string' ? value.replace(/[<>]/g, '').trim().slice(0, limit) : ''

const parseBody = async (req) => {
  if (req.body) {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  }
  const chunks = []
  for await (const chunk of req) {
    chunks.push(chunk)
  }
  const data = Buffer.concat(chunks).toString('utf8')
  return data ? JSON.parse(data) : {}
}

const createHubspotContact = async (token, payload) => {
  const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        email: payload.email,
        firstname: payload.fullName,
        hs_lead_status: 'NEW',
        lifecyclestage: 'lead',
        lead_source: payload.source,
        hs_notes: `free-audit | target=${payload.auditTarget} | language=${payload.language} | utm_source=${payload.utmSource || 'n/a'} | utm_medium=${payload.utmMedium || 'n/a'} | utm_campaign=${payload.utmCampaign || 'n/a'}`,
      },
    }),
  })

  if (!response.ok) {
    throw new Error(`HubSpot contact error: ${await response.text()}`)
  }

  return response.json()
}

const sendNotificationEmail = async (payload) => {
  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.AUDIT_NOTIFICATION_EMAIL
  const fromEmail = process.env.AUDIT_FROM_EMAIL || 'TraceRemove <audit@traceremove.com>'

  if (!apiKey || !toEmail) {
    throw new Error('Email provider is not configured')
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New free audit request: ${payload.fullName}`,
      html: `
        <h2>New Free Audit Request</h2>
        <p><strong>Name:</strong> ${payload.fullName}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Audit target:</strong> ${payload.auditTarget}</p>
        <p><strong>Language:</strong> ${payload.language}</p>
        <p><strong>Source:</strong> ${payload.source}</p>
        <p><strong>UTM source:</strong> ${payload.utmSource || 'n/a'}</p>
        <p><strong>UTM medium:</strong> ${payload.utmMedium || 'n/a'}</p>
        <p><strong>UTM campaign:</strong> ${payload.utmCampaign || 'n/a'}</p>
      `,
    }),
  })

  if (!response.ok) {
    throw new Error(`Resend email error: ${await response.text()}`)
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'POST')
    res.end(JSON.stringify({ message: 'Method not allowed' }))
    return
  }

  const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN
  if (!hubspotToken) {
    res.statusCode = 500
    res.end(JSON.stringify({ message: 'HubSpot token missing' }))
    return
  }

  try {
    const raw = await parseBody(req)
    const payload = {
      fullName: sanitize(raw.fullName, 120),
      email: sanitize(raw.email, 180),
      auditTarget: sanitize(raw.auditTarget, 80),
      language: sanitize(raw.language, 10),
      source: sanitize(raw.source, 80) || 'free-audit-page',
      utmSource: sanitize(raw.utmSource, 120),
      utmMedium: sanitize(raw.utmMedium, 120),
      utmCampaign: sanitize(raw.utmCampaign, 120),
    }

    if (!payload.fullName) {
      res.statusCode = 400
      res.end(JSON.stringify({ message: 'Full name is required' }))
      return
    }

    if (!EMAIL_REGEX.test(payload.email)) {
      res.statusCode = 400
      res.end(JSON.stringify({ message: 'Valid email is required' }))
      return
    }

    if (!['My Personal Name', 'My Business', 'Both'].includes(payload.auditTarget)) {
      res.statusCode = 400
      res.end(JSON.stringify({ message: 'Invalid audit target' }))
      return
    }

    await createHubspotContact(hubspotToken, payload)
    await sendNotificationEmail(payload)

    res.statusCode = 200
    res.end(JSON.stringify({ ok: true }))
  } catch (error) {
    res.statusCode = 500
    res.end(JSON.stringify({ message: error instanceof Error ? error.message : 'Server error' }))
  }
}
