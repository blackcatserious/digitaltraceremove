import { Seo } from '../components/Seo'

export function NotFound() {
  return (
    <section className="section">
      <Seo title="Page not found | DigitalTrace Remove" description="Page not found." />
      <div className="container">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </section>
  )
}
