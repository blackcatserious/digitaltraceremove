import { type Language } from '../data/pages'

const callWidgetCopy: Record<Language, { label: string; assist: string }> = {
  en: { label: 'Call +1 (472) 248 0235', assist: 'Speak with TraceRemove Advisor' },
  fr: { label: 'Appelez +1 (472) 248 0235', assist: 'Échangez avec TraceRemove Advisor' },
  es: { label: 'Llama al +1 (472) 248 0235', assist: 'Habla con TraceRemove Advisor' },
}

const CallWidget = ({ currentLanguage }: { currentLanguage: Language }) => {
  const copy = callWidgetCopy[currentLanguage]

  return (
    <a className="call-widget" href="tel:+16063022958" aria-label={`${copy.label}. ${copy.assist}`}>
      <span className="call-widget__icon" aria-hidden="true">📞</span>
      <span className="call-widget__text">
        <span className="call-widget__label">{copy.label}</span>
        <span className="call-widget__assist">{copy.assist}</span>
      </span>
    </a>
  )
}

export default CallWidget
