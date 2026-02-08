import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { sortedBlogPosts } from '../lib/blog'
import { useI18n } from '../i18n/I18nProvider'

export function BlogIndex() {
  const { language } = useI18n()

  return (
    <section className="section">
      <Seo
        title="Media | DigitalTrace Remove"
        description="Press releases, case studies, and thought leadership articles."
      />
      <div className="container">
        <h1>Media & Insights</h1>
        <div className="blog-grid">
          {sortedBlogPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <h2>{post.title}</h2>
              <p className="blog-meta">
                {post.date} • {post.author}
              </p>
              <p>{post.excerpt}</p>
              <Link to={`/${language}/blog/${post.slug}`}>Read more</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
