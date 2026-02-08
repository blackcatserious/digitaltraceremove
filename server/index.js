import compression from 'compression'
import express from 'express'
import helmet from 'helmet'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

app.set('trust proxy', 1)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'", 'https://www.googletagmanager.com'],
        connectSrc: ["'self'", 'https://api.hubapi.com', 'https://www.google-analytics.com'],
        imgSrc: ["'self'", 'data:'],
        styleSrc: ["'self'", "'unsafe-inline'"],
        baseUri: ["'self'"],
        frameAncestors: ["'none'"],
      },
    },
  }),
)
app.use(compression())
app.use(express.json({ limit: '200kb' }))

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`)
  }
  return next()
})

app.post('/api/hubspot', async (req, res) => {
  const token = process.env.HUBSPOT_ACCESS_TOKEN
  if (!token) {
    return res.status(500).json({ error: 'HubSpot token missing' })
  }

  const payload = sanitizePayload(req.body)
  const errors = validatePayload(payload)
  if (errors.length) {
    return res.status(400).json({ error: 'Invalid input', fields: errors })
  }

  try {
    const contactResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          firstname: payload.name,
          email: payload.email,
          message: payload.links,
          urgency: payload.urgency,
          deadline: payload.deadline,
          service: payload.service,
        },
      }),
    })

    if (!contactResponse.ok) {
      const errorBody = await contactResponse.text()
      return res.status(502).json({ error: 'HubSpot request failed', detail: errorBody })
    }

    return res.status(200).json({ status: 'ok' })
  } catch (error) {
    return res.status(500).json({ error: 'Server error' })
  }
})

const distPath = path.resolve(__dirname, '../dist')
app.use(
  express.static(distPath, {
    maxAge: '1y',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache')
      }
    },
  }),
)

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

const port = process.env.PORT || 4173
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`)
})

function sanitizePayload(payload) {
  const safe = {
    name: sanitizeText(payload?.name),
    email: sanitizeText(payload?.email),
    urgency: sanitizeText(payload?.urgency),
    links: sanitizeText(payload?.links),
    deadline: sanitizeText(payload?.deadline),
    service: sanitizeText(payload?.service),
  }
  return safe
}

function sanitizeText(value) {
  if (!value) return ''
  return String(value).replace(/<[^>]*>?/gm, '').trim()
}

function validatePayload(payload) {
  const errors = []
  if (!payload.name) errors.push('name')
  if (!payload.email || !payload.email.includes('@')) errors.push('email')
  if (!payload.links) errors.push('links')
  return errors
}
