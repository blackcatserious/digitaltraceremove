import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import App from './App.tsx'
import './index.css'

const pendingPath = sessionStorage.getItem('vite-spa-fallback')
if (pendingPath) {
  sessionStorage.removeItem('vite-spa-fallback')
  const current = window.location.pathname + window.location.search + window.location.hash
  if (current !== pendingPath) {
    window.history.replaceState(null, '', pendingPath)
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <SpeedInsights />
    <Analytics />
  </StrictMode>,
)
