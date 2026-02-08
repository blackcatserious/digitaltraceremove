import { testimonials, trustLogos } from '../data/testimonials'
import { useI18n } from '../i18n/I18nProvider'

export function TestimonialGrid() {
  const { t } = useI18n()

  return (
    <section className="section">
      <div className="container">
        <h2>{t.testimonials.heading}</h2>
        <p>{t.testimonials.subheading}</p>
        <div className="card-grid">
          {testimonials.map((item) => (
            <article key={item.quote} className="card">
              <p>“{item.quote}”</p>
              <strong>{item.name}</strong>
              <span>{item.company}</span>
            </article>
          ))}
        </div>
        <div className="logo-grid section" aria-label="Trust signals">
          {trustLogos.map((logo) => (
            <div key={logo.name} className="logo-card">
              <img
                src={logo.image}
                alt={logo.name}
                loading="lazy"
                width={120}
                height={32}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
