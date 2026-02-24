const sanitize = (value, limit = 2000) =>
  typeof value === 'string' ? value.replace(/[<>]/g, '').trim().slice(0, limit) : ''

const parseBody = async (req) => {
  if (req.body) return typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

const sendNotificationEmail = async (booking) => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.AUDIT_FROM_EMAIL || 'TraceRemove <audit@traceremove.com>',
      to: ['artur@traceremove.com'],
      subject: `Calendly booking confirmed: ${booking.name || booking.email || 'Unknown'}`,
      html: `<h2>Calendly booking confirmed</h2>
        <p><strong>Name:</strong> ${booking.name || 'N/A'}</p>
        <p><strong>Email:</strong> ${booking.email || 'N/A'}</p>
        <p><strong>Start:</strong> ${booking.startTime || 'N/A'}</p>
        <p><strong>Concern:</strong> ${booking.concern || 'N/A'}</p>
        <p><strong>Entity:</strong> ${booking.entityType || 'N/A'}</p>
        <p><strong>Language:</strong> ${booking.preferredLanguage || 'N/A'}</p>`,
    }),
  })
}

const persistToHubspot = async (booking) => {
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN
  if (!token || !booking.email) return

  await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        email: booking.email,
        firstname: booking.name,
        hs_lead_status: 'OPEN',
        lifecyclestage: 'lead',
        lead_source: 'calendly_webhook',
        hs_notes: `calendly_booking | concern=${booking.concern || 'n/a'} | entity=${booking.entityType || 'n/a'} | language=${booking.preferredLanguage || 'n/a'} | start=${booking.startTime || 'n/a'} | event=${booking.eventUri || 'n/a'}`,
      },
    }),
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'POST')
    res.end(JSON.stringify({ message: 'Method not allowed' }))
    return
  }

  try {
    const payload = await parseBody(req)
    const eventType = sanitize(payload.event)
    if (eventType !== 'invitee.created') {
      res.statusCode = 200
      res.end(JSON.stringify({ ok: true, skipped: true }))
      return
    }

    const invitee = payload.payload?.invitee || {}
    const questions = Array.isArray(invitee.questions_and_answers) ? invitee.questions_and_answers : []
    const findAnswer = (labelPart) =>
      sanitize(questions.find((item) => sanitize(item.question).toLowerCase().includes(labelPart))?.answer || '', 500)

    const booking = {
      name: sanitize(invitee.name, 160),
      email: sanitize(invitee.email, 200),
      startTime: sanitize(payload.payload?.event?.start_time, 120),
      concern: findAnswer('main concern'),
      entityType: findAnswer('personally or a business'),
      preferredLanguage: findAnswer('preferred language'),
      eventUri: sanitize(payload.payload?.event?.uri, 500),
    }

    await Promise.allSettled([sendNotificationEmail(booking), persistToHubspot(booking)])

    res.statusCode = 200
    res.end(JSON.stringify({ ok: true }))
  } catch {
    res.statusCode = 500
    res.end(JSON.stringify({ message: 'Webhook processing failed' }))
  }
}
