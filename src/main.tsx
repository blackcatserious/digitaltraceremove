import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import App from './App.tsx'
import Laboratory from './Laboratory.tsx'
import './index.css'

const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
const isLaboratoryRoute = pathname === '/lab' || pathname === '/concepts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isLaboratoryRoute ? (
      <Laboratory />
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
    <SpeedInsights />
    <Analytics />
  </StrictMode>,
)
