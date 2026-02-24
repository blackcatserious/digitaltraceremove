const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const sanitize = (value) =>
  typeof value === 'string' ? value.replace(/[<>]/g, '').trim().slice(0, 2000) : ''

const parseBody = async (req) => {
  if (req.body) {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  }
  const buffers = []
  for await (const chunk of req) {
    buffers.push(chunk)
  }
  const data = Buffer.concat(buffers).toString('utf8')
  return data ? JSON.parse(data) : {}
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'POST')
    res.end(JSON.stringify({ message: 'Method not allowed' }))
    return
  }

  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN
  if (!token) {
    res.statusCode = 500
    res.end(JSON.stringify({ message: 'HubSpot token missing' }))
    return
  }

  try {
    const payload = await parseBody(req)
    const email = sanitize(payload.email)
    const name = sanitize(payload.name)
    const message = sanitize(payload.message)
    const company = sanitize(payload.company)
    const phone = sanitize(payload.phone)
    const urgency = sanitize(payload.urgency)
    const links = sanitize(payload.links)
    const deadline = sanitize(payload.deadline)
    const service = sanitize(payload.service)
    const source = sanitize(payload.source)

    if (!email || !EMAIL_REGEX.test(email)) {
      res.statusCode = 400
      res.end(JSON.stringify({ message: 'Valid email is required' }))
      return
    }

    const contactPayload = {
      properties: {
        email,
        firstname: name,
        company,
        phone,
        hs_lead_status: 'NEW',
        lifecyclestage: 'lead',
        lead_source: source || 'website',
        hs_notes: [message, links, urgency, deadline, service].filter(Boolean).join(' | '),
      },
    }

    const contactResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactPayload),
    })

    if (!contactResponse.ok) {
      const error = await contactResponse.text()
      res.statusCode = 502
      res.end(JSON.stringify({ message: error }))
      return
    }

    const contactData = await contactResponse.json()
    const dealPayload = {
      properties: {
        dealname: `${service || 'Inbound'} · ${name || email}`,
        pipeline: process.env.HUBSPOT_DEAL_PIPELINE_ID || undefined,
        dealstage: process.env.HUBSPOT_DEAL_STAGE_ID || undefined,
        amount: process.env.HUBSPOT_DEFAULT_DEAL_AMOUNT || undefined,
      },
    }

    const dealResponse = await fetch('https://api.hubapi.com/crm/v3/objects/deals', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dealPayload),
    })

    if (dealResponse.ok) {
      const dealData = await dealResponse.json()
      await fetch(
        `https://api.hubapi.com/crm/v3/objects/deals/${dealData.id}/associations/contacts/${contactData.id}/deal_to_contact`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
    }

    res.statusCode = 200
    res.end(JSON.stringify({ ok: true }))
  } catch (error) {
    res.statusCode = 500
    res.end(JSON.stringify({ message: 'Server error' }))
  }
}
