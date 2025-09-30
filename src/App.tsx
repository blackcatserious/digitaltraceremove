import './App.css'

const MENU_ITEMS = [
  { label: 'Contact Us', href: '#contact' },
  { label: 'About', href: '#about' },
  { label: 'Request Monitoring', href: '#monitoring' },
  { label: 'Success Stories', href: '#cases' },
  { label: 'Media About Us', href: '#media' },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <a className="brand" href="https://traceremove.com" aria-label="Traceremove home">
          Traceremove
        </a>
        <nav className="nav" aria-label="Main navigation">
          <ul className="menu">
            {MENU_ITEMS.map((item) => (
              <li key={item.href} className="menu__item">
                <a href={item.href} className="menu__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="hero">
        <p className="hero__eyebrow">Digital reputation management</p>
        <h1 className="hero__title">Traceremove protects how the internet sees your brand</h1>
        <p className="hero__subtitle">
          Monitor every mention, counter harmful narratives, and build trust across English-, French-, and
          Spanish-speaking markets with the multilingual team trusted by fast-growing founders.
        </p>
        <a className="hero__cta" href="#monitoring">
          Request monitoring today
        </a>
      </main>
    </div>
  )
}

export default App
