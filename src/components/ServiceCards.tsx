import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { useI18n } from '../i18n/I18nProvider'

export function ServiceCards() {
  const { language, t } = useI18n()

  return (
    <section className="section">
      <div className="container">
        <h2>{t.services.heading}</h2>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.slug} className="card">
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <Link className="button-secondary" to={`/${language}/services/${service.slug}`}>
                View details
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
