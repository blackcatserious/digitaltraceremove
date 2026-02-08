import { Seo } from '../components/Seo'
import { ServiceForm } from '../components/ServiceForm'
import { trackEvent } from '../components/analytics'
import { useI18n } from '../i18n/I18nProvider'

export function Contact() {
  const { t } = useI18n()

  return (
    <section className="section">
      <Seo
        title="Contact | DigitalTrace Remove"
        description="Speak with an analyst for a secure, rapid response plan."
      />
      <div className="container service-page">
        <div>
          <h1>{t.contact.heading}</h1>
          <p>{t.contact.subheading}</p>
          <ul className="info-list">
            <li>Secure intake within 2 hours</li>
            <li>Encrypted evidence transfer</li>
            <li>24/7 analyst response</li>
          </ul>
          <p>
            Call us:{' '}
            <a
              href="tel:+12025550177"
              onClick={() => trackEvent('phone_click')}
              aria-label="Call DigitalTrace Remove"
            >
              +1 (202) 555-0177
            </a>
          </p>
          <p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('appointment_booking')}
              aria-label="Book a confidential appointment"
            >
              Book a confidential appointment
            </a>
          </p>
        </div>
        <aside className="service-meta">
          <ServiceForm serviceName="General inquiry" />
        </aside>
      </div>
    </section>
  )
}
