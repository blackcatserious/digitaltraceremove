const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

let lastRequestAt = 0

const sanitize = (value) =>
  typeof value === 'string' ? value.replace(/[<>]/g, '').trim().slice(0, 320) : ''

const parseBody = async (req) => {
  if (req.body) {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  }

  const chunks = []
  for await (const chunk of req) {
    chunks.push(chunk)
  }
  const raw = Buffer.concat(chunks).toString('utf8')
  return raw ? JSON.parse(raw) : {}
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Allow', 'POST')
    res.end(JSON.stringify({ message: 'Method not allowed' }))
    return
  }

  const apiKey = process.env.HIBP_API_KEY
  if (!apiKey) {
    res.statusCode = 500
    res.end(JSON.stringify({ message: 'HIBP API key is missing. Add HIBP_API_KEY in environment variables.' }))
    return
  }

  try {
    const body = await parseBody(req)
    const email = sanitize(body.email).toLowerCase()

    if (!email || !EMAIL_REGEX.test(email)) {
      res.statusCode = 400
      res.end(JSON.stringify({ message: 'A valid email is required.' }))
      return
    }

    const now = Date.now()
    const delta = now - lastRequestAt
    if (delta < 1500) {
      await wait(1500 - delta)
    }
    lastRequestAt = Date.now()

    const url = `https://haveibeenpwned.com/api/v3/breachedaccount/${encodeURIComponent(email)}?truncateResponse=false`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'hibp-api-key': apiKey,
        'user-agent': 'TraceRemoveBreachChecker/1.0 (+https://traceremove.com)',
      },
    })

    if (response.status === 404) {
      res.statusCode = 200
      res.end(JSON.stringify({ breached: false, breaches: [] }))
      return
    }

    if (response.status === 429) {
      res.statusCode = 429
      res.end(JSON.stringify({ message: 'The breach-check service is rate limited. Please wait and try again.' }))
      return
    }

    if (!response.ok) {
      res.statusCode = 502
      res.end(JSON.stringify({ message: 'Unable to reach the breach database at the moment.' }))
      return
    }

    const breaches = await response.json()
    const mapped = Array.isArray(breaches)
      ? breaches.map((item) => ({
          Name: item.Name,
          BreachDate: item.BreachDate,
          DataClasses: item.DataClasses,
        }))
      : []

    res.statusCode = 200
    res.end(JSON.stringify({ breached: mapped.length > 0, breaches: mapped }))
  } catch {
    res.statusCode = 500
    res.end(JSON.stringify({ message: 'The breach-check service is temporarily unavailable. Please try again.' }))
  }
}
