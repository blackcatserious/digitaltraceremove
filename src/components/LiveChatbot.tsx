import { type FormEvent, useState } from 'react'
import { type Language } from '../data/pages'

type LeadPayload = {
  source: 'chatbot' | 'contact'
  name: string
  email: string
  company: string
  message: string
  createdAt: string
  page: string
  utmSource: string
  leadScore: number
}

const persistLead = async (lead: LeadPayload) => {
  const existing = localStorage.getItem('traceremove_leads')
  const parsed = existing ? (JSON.parse(existing) as LeadPayload[]) : []
  localStorage.setItem('traceremove_leads', JSON.stringify([lead, ...parsed].slice(0, 100)))

  try {
    await Promise.allSettled([
      fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      }),
      fetch('/api/crm/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      }),
    ])
  } catch {
    // Offline-safe fallback already handled via localStorage.
  }

  const win = window as Window & { dataLayer?: unknown[] }
  if (Array.isArray(win.dataLayer)) {
    win.dataLayer.push({ event: 'lead_capture', payload: lead })
  }
}

const chatbotCopy: Record<Language, { title: string; subtitle: string; placeholder: string; send: string; collect: string; success: string; defaultAnswer: string }> = {
  en: {
    title: 'Live assistant',
    subtitle: 'Replies in real time and logs qualified leads.',
    placeholder: 'Tell us your challenge…',
    send: 'Send',
    collect: 'Share contacts for follow-up',
    success: 'Thanks — we logged your request.',
    defaultAnswer: 'Thanks! Our team can start with a 30-minute response plan. Leave your contact and we will reach out today.',
  },
  fr: {
    title: 'Assistant en direct',
    subtitle: 'Réponses en temps réel et qualification des leads.',
    placeholder: 'Décrivez votre besoin…',
    send: 'Envoyer',
    collect: 'Partagez vos contacts pour un suivi',
    success: 'Merci — votre demande est enregistrée.',
    defaultAnswer: 'Merci ! Nous pouvons démarrer avec un plan de réponse en 30 minutes. Laissez vos coordonnées et nous vous contactons aujourd’hui.',
  },
  es: {
    title: 'Asistente en vivo',
    subtitle: 'Respuestas en tiempo real y captura de leads.',
    placeholder: 'Cuéntanos tu reto…',
    send: 'Enviar',
    collect: 'Comparte tus datos para seguimiento',
    success: 'Gracias — guardamos tu solicitud.',
    defaultAnswer: '¡Gracias! Podemos empezar con un plan de respuesta en 30 minutos. Deja tus datos y te contactamos hoy.',
  },
}

const LiveChatbot = ({ currentLanguage }: { currentLanguage: Language }) => {
  const copy = chatbotCopy[currentLanguage]
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ id: number; role: 'user' | 'bot'; text: string }[]>([])
  const [lead, setLead] = useState({ name: '', email: '', company: '' })
  const [saved, setSaved] = useState(false)

  const pushBotMessage = (text: string) => {
    const id = Date.now()
    const chunks = text.split(' ')
    setMessages((prev) => [...prev, { id, role: 'bot', text: '' }])
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setMessages((prev) => prev.map((message) => (message.id === id ? { ...message, text: chunks.slice(0, index).join(' ') } : message)))
      if (index >= chunks.length) {
        window.clearInterval(timer)
      }
    }, 40)
  }

  const handleSend = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = input.trim()
    if (!value) {
      return
    }
    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: value }])
    setInput('')
    const answer = value.length > 120 ? copy.defaultAnswer : `${copy.defaultAnswer} (${value.slice(0, 48)})`
    window.setTimeout(() => pushBotMessage(answer), 120)
  }

  const handleLeadSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!lead.name || !lead.email) {
      return
    }
    const latestMessage = [...messages].reverse().find((message) => message.role === 'user')?.text ?? ''
    const params = new URLSearchParams(window.location.search)
    await persistLead({
      source: 'chatbot',
      name: lead.name,
      email: lead.email,
      company: lead.company,
      message: latestMessage,
      createdAt: new Date().toISOString(),
      page: window.location.pathname,
      utmSource: params.get('utm_source') ?? 'direct',
      leadScore: Math.min(100, 50 + (latestMessage.length > 40 ? 25 : 0) + (lead.company ? 25 : 0)),
    })
    setSaved(true)
  }

  return (
    <aside className={`live-chat ${open ? 'is-open' : ''}`} aria-live="polite">
      <button type="button" className="live-chat__toggle" onClick={() => setOpen((state) => !state)}>
        💬 {copy.title}
      </button>
      {open && (
        <div className="live-chat__panel">
          <p className="live-chat__subtitle">{copy.subtitle}</p>
          <div className="live-chat__messages">
            {messages.map((message) => (
              <p key={message.id} className={`live-chat__message live-chat__message--${message.role}`}>
                {message.text}
              </p>
            ))}
          </div>
          <form className="live-chat__composer" onSubmit={handleSend}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder={copy.placeholder} />
            <button type="submit">{copy.send}</button>
          </form>
          <form className="live-chat__lead" onSubmit={handleLeadSave}>
            <p>{copy.collect}</p>
            <input placeholder="Name" value={lead.name} onChange={(event) => setLead((prev) => ({ ...prev, name: event.target.value }))} />
            <input placeholder="Email" type="email" value={lead.email} onChange={(event) => setLead((prev) => ({ ...prev, email: event.target.value }))} />
            <input placeholder="Company" value={lead.company} onChange={(event) => setLead((prev) => ({ ...prev, company: event.target.value }))} />
            <button type="submit">OK</button>
            {saved && <span className="live-chat__saved">{copy.success}</span>}
          </form>
        </div>
      )}
    </aside>
  )
}

export default LiveChatbot
