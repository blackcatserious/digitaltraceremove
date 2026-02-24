const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const MAGNETS = {
  'privacy-guide': {
    title: 'The Ultimate Privacy Protection Checklist',
    path: '/lead-magnets/privacy-guide.pdf',
  },
  'chatgpt-prompts': {
    title: '20 ChatGPT Prompts for Reputation Management',
    path: '/lead-magnets/chatgpt-prompts.pdf',
  },
  'review-templates': {
    title: 'Negative Review Response Templates',
    path: '/lead-magnets/review-templates.pdf',
  },
  'gdpr-template': {
    title: 'GDPR Data Removal Request Template',
    path: '/lead-magnets/gdpr-template.pdf',
  },
  '90-day-plan': {
    title: '90-Day Reputation Transformation Roadmap',
    path: '/lead-magnets/90-day-plan.pdf',
  },
}

const sanitize = (value, limit = 2000) =>
  typeof value === 'string' ? value.replace(/[<>]/g, '').trim().slice(0, limit) : ''

const parseBody = async (req) => {
  if (req.body) return typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const data = Buffer.concat(chunks).toString('utf8')
  return data ? JSON.parse(data) : {}
}

const createHubspotContact = async (token, payload, magnet) => {
  await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        email: payload.email,
        firstname: payload.name,
        hs_lead_status: 'NEW',
        lifecyclestage: 'lead',
        lead_source: 'lead_magnet',
        hs_notes: `lead_magnet=${payload.magnet} | language=${payload.language || 'en'} | title=${magnet.title}`,
      },
    }),
  })
}

const sendLeadMagnetEmail = async (payload, magnet) => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('RESEND_API_KEY is missing')

  const siteUrl = process.env.SITE_URL || 'https://traceremove.com'
  const fromEmail = process.env.AUDIT_FROM_EMAIL || 'TraceRemove <audit@traceremove.com>'

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [payload.email],
      subject: `Your download: ${magnet.title}`,
      html: `<h2>Your resource is ready</h2>
      <p>Hi ${payload.name || 'there'},</p>
      <p>Thanks for requesting <strong>${magnet.title}</strong>.</p>
      <p><a href="${siteUrl}${magnet.path}">Download now</a></p>
      <hr/>
      <p>Need professional help? <a href="${siteUrl}/contact">Book a free consultation.</a></p>
      <p>TraceRemove · Casper, WY · +1 606 302 2958</p>`,
    }),
  })

  if (!response.ok) {
    throw new Error('Unable to send email')
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'POST')
    res.end(JSON.stringify({ message: 'Method not allowed' }))
    return
  }

  try {
    const body = await parseBody(req)
    const payload = {
      name: sanitize(body.name, 160),
      email: sanitize(body.email, 200),
      magnet: sanitize(body.magnet, 80),
      language: sanitize(body.language, 10),
    }

    if (!payload.name) {
      res.statusCode = 400
      res.end(JSON.stringify({ message: 'Name is required' }))
      return
    }
    if (!EMAIL_REGEX.test(payload.email)) {
      res.statusCode = 400
      res.end(JSON.stringify({ message: 'Valid email is required' }))
      return
    }

    const magnet = MAGNETS[payload.magnet]
    if (!magnet) {
      res.statusCode = 400
      res.end(JSON.stringify({ message: 'Invalid magnet' }))
      return
    }

    const hubspotToken = process.env.HUBSPOT_PRIVATE_APP_TOKEN
    if (hubspotToken) {
      await createHubspotContact(hubspotToken, payload, magnet)
    }

    await sendLeadMagnetEmail(payload, magnet)

    res.statusCode = 200
    res.end(JSON.stringify({ ok: true }))
  } catch (error) {
    res.statusCode = 500
    res.end(JSON.stringify({ message: error instanceof Error ? error.message : 'Server error' }))
  }
}
