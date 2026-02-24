import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

if (typeof window !== 'undefined') {
  const schedule = window.requestIdleCallback ?? ((cb: IdleRequestCallback) => window.setTimeout(() => cb({} as IdleDeadline), 1))

  schedule(async () => {
    const [{ SpeedInsights }, { Analytics }] = await Promise.all([
      import('@vercel/speed-insights/react'),
      import('@vercel/analytics/react'),
    ])

    const telemetryMount = document.createElement('div')
    telemetryMount.id = 'telemetry-root'
    document.body.appendChild(telemetryMount)

    createRoot(telemetryMount).render(
      <StrictMode>
        <SpeedInsights />
        <Analytics />
      </StrictMode>,
    )
  })
}
