import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { Seo } from '../components/Seo'
import { useI18n } from '../i18n/I18nProvider'

export function Services() {
  const { language } = useI18n()

  return (
    <section className="section">
      <Seo
        title="Services | DigitalTrace Remove"
        description="Emergency ORM, removal packages, security takedown, and design operations services."
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: service.title,
            url: `https://digitaltraceremove.com/${language}/services/${service.slug}`,
          })),
        }}
      />
      <div className="container">
        <h1>Services</h1>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.slug} className="card">
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <Link className="button-secondary" to={`/${language}/services/${service.slug}`}>
                View service
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
