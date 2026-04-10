import { Link } from 'react-router-dom'

export default function PricingSection() {
  return (
    <section className="home-production" aria-labelledby="pricing-section-heading">
      <header className="home-production__header">
        <h2 id="pricing-section-heading">Pricing</h2>
      </header>

      <div className="home-production__grid">
        <article>
          <h3>Monitor</h3>
          <p>$49 / month</p>
          <p>Monitoring, alerts, and monthly exposure report</p>
          <ul>
            <li>Automated exposure monitoring</li>
            <li>Monthly risk report</li>
            <li>Email alerts</li>
          </ul>
          <Link className="button primary" to="/contact">
            Get Started
          </Link>
        </article>

        <article>
          <p>Most Popular</p>
          <h3>Protect</h3>
          <p>$149 / month</p>
          <p>Monitoring plus structured workflow credits each quarter</p>
          <ul>
            <li>Everything in Monitor</li>
            <li>Quarterly workflow credits</li>
            <li>Progress tracking dashboard</li>
            <li>Priority email support</li>
          </ul>
          <Link className="button primary" to="/contact">
            Get Started
          </Link>
        </article>

        <article>
          <h3>Business</h3>
          <p>$399 / month</p>
          <p>Team workspace with monthly workflow credits</p>
          <ul>
            <li>Everything in Protect</li>
            <li>Team workspace (up to 5 users)</li>
            <li>Monthly workflow credits</li>
            <li>Dedicated account support</li>
          </ul>
          <Link className="button primary" to="/contact">
            Get Started
          </Link>
        </article>
      </div>

      <p>
        Workflow credits represent time-boxed resolution cycles with progress tracking and end-of-cycle reporting. For
        enterprise and partner accounts, contact us for managed programmes.
      </p>
    </section>
  )
}
