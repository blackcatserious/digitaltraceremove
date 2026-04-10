import './App.css'

const howItWorksSteps = [
  {
    title: 'Identify exposure',
    description:
      'Map where your personal and business data appears across public digital sources.',
  },
  {
    title: 'Analyze risks',
    description:
      'Prioritize findings based on sensitivity, visibility, and potential impact.',
  },
  {
    title: 'Resolve issues through the platform',
    description:
      'Track and complete structured resolution workflows in one secure workspace.',
  },
]

const features = [
  'Data monitoring',
  'Exposure detection',
  'Resolution workflows',
  'Managed support',
]

const trustPoints = ['Secure', 'Private', 'Direct service (no third-party processing)']

function App() {
  return (
    <div className="page">
      <header className="hero section">
        <p className="eyebrow">Traceremove</p>
        <h1>Take Control of Your Online Data Footprint</h1>
        <p className="subheadline">
          A structured platform for monitoring and resolving data exposure
        </p>
        <button type="button" className="cta">
          Get Started
        </button>
      </header>

      <main>
        <section className="section">
          <h2>How it works</h2>
          <div className="grid steps-grid">
            {howItWorksSteps.map((step, index) => (
              <article key={step.title} className="card">
                <p className="step-number">{String(index + 1).padStart(2, '0')}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Features</h2>
          <div className="grid compact-grid">
            {features.map((feature) => (
              <article key={feature} className="card feature-card">
                <h3>{feature}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section trust-section">
          <h2>Trust</h2>
          <ul className="trust-list">
            {trustPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer section">
        <p>TRACEREMOVE LLC</p>
        <p>750 Manhattan Ave</p>
        <p>Brooklyn, NY 11222, USA</p>
      </footer>
    </div>
  )
}

export default App
