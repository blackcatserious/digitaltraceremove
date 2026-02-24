import { testimonials } from '../data/testimonials'
import type { Language } from '../data/pages'

export const Testimonials = ({ language }: { language: Language }) => {
  const items = testimonials[language] ?? testimonials.en

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">Trusted by teams managing reputation pressure</h2>
      <div className="testimonials__grid">
        {items.map((item) => (
          <article key={item.name} className="testimonials__card">
            <p className="testimonials__quote">“{item.quote}”</p>
            <p className="testimonials__name">{item.name}</p>
            <p className="testimonials__role">{item.role}</p>
            <span className="testimonials__logo" aria-label={item.logoAlt} />
          </article>
        ))}
      </div>
    </section>
  )
}
