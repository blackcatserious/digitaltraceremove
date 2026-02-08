import { Link } from 'react-router-dom'
import { sortedBlogPosts } from '../lib/blog'
import { useI18n } from '../i18n/I18nProvider'

export function BlogPreview() {
  const { language, t } = useI18n()
  const posts = sortedBlogPosts.slice(0, 3)

  return (
    <section className="section">
      <div className="container">
        <h2>{t.blog.heading}</h2>
        <p>{t.blog.subheading}</p>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <div>
                <h3>{post.title}</h3>
                <p className="blog-meta">
                  {post.date} • {post.author}
                </p>
              </div>
              <p>{post.excerpt}</p>
              <Link to={`/${language}/blog/${post.slug}`}>{t.blog.readMore}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
