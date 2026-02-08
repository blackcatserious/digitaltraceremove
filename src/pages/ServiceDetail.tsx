import { useParams } from 'react-router-dom'
import { serviceMap, ServiceSlug } from '../data/services'
import { ServiceForm } from '../components/ServiceForm'
import { Seo } from '../components/Seo'

export function ServiceDetail() {
  const params = useParams()
  const slug = params.slug as ServiceSlug
  const service = serviceMap[slug]

  if (!service) {
    return (
      <section className="section">
        <div className="container">
          <h1>Service not found</h1>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <Seo
        title={`${service.title} | DigitalTrace Remove`}
        description={service.summary}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.summary,
          provider: {
            '@type': 'Organization',
            name: 'DigitalTrace Remove',
          },
        }}
      />
      <div className="container service-page">
        <div>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
          <h3>What’s included</h3>
          <ul className="info-list">
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3>Our 3-step process</h3>
          <ol className="process-steps">
            {service.process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
        <aside className="service-meta">
          <h3>Typical timelines</h3>
          <p>{service.timeline}</p>
          <h3>Price range</h3>
          <p>{service.priceRange}</p>
          <ServiceForm serviceName={service.title} />
        </aside>
      </div>
    </section>
  )
}
