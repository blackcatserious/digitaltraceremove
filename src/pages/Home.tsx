import { Hero } from '../components/Hero'
import { ServiceCards } from '../components/ServiceCards'
import { TestimonialGrid } from '../components/TestimonialGrid'
import { Seo } from '../components/Seo'
import { BlogPreview } from './BlogPreview'

export function Home() {
  return (
    <>
      <Seo
        title="Emergency ORM | DigitalTrace Remove"
        description="Emergency online reputation management, takedown packages, and rapid response to remove negative content."
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'DigitalTrace Remove',
          url: 'https://digitaltraceremove.com',
        }}
      />
      <div className="container">
        <Hero />
      </div>
      <ServiceCards />
      <TestimonialGrid />
      <BlogPreview />
    </>
  )
}
