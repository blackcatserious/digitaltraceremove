import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

export function Footer() {
  const { language, t } = useI18n()
  const base = `/${language}`

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>{t.footer.headline}</strong>
          <p>{t.footer.compliance}</p>
        </div>
        <div>
          <h4>Company</h4>
          <Link to={`${base}/resources`}>{t.nav.resources}</Link>
          <br />
          <Link to={`${base}/case-studies`}>{t.nav.caseStudies}</Link>
        </div>
        <div>
          <h4>Legal</h4>
          <Link to={`${base}/resources`}>{t.footer.privacy}</Link>
          <br />
          <Link to={`${base}/resources`}>{t.footer.terms}</Link>
        </div>
        <div>
          <h4>Opportunities</h4>
          <Link to={`${base}/resources`}>{t.footer.careers}</Link>
        </div>
      </div>
    </footer>
  )
}
