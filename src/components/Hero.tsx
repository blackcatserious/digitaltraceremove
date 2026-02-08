import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

export function Hero() {
  const { language, t } = useI18n()

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div>
        <span className="tag">24/7 Rapid Response</span>
        <h1 id="hero-title">{t.hero.title}</h1>
        <p>{t.hero.subtitle}</p>
        <div className="hero-actions">
          <Link className="button-primary" to={`/${language}/contact`}>
            {t.hero.primaryCta}
          </Link>
          <Link className="button-secondary" to={`/${language}/services`}>
            {t.hero.secondaryCta}
          </Link>
        </div>
      </div>
      <div className="hero-card">
        <h3>Response window</h3>
        <p>Initial containment within hours. Removal actions in 24–48 hours.</p>
        <ul className="info-list">
          <li>Secure intake + NDA guarantee</li>
          <li>Incident response plan within 6 hours</li>
          <li>Daily evidence logs for counsel</li>
        </ul>
      </div>
    </section>
  )
}
