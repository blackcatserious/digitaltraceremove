import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Seo } from '../components/Seo'
import { blogPostMap, buildShareLinks } from '../lib/blog'

export function BlogPost() {
  const params = useParams()
  const post = blogPostMap[params.slug ?? '']

  if (!post) {
    return (
      <section className="section">
        <div className="container">
          <h1>Post not found</h1>
        </div>
      </section>
    )
  }

  const shareLinks = buildShareLinks(post.slug)

  return (
    <section className="section">
      <Seo
        title={`${post.title} | DigitalTrace Remove`}
        description={post.excerpt}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          datePublished: post.date,
          author: {
            '@type': 'Person',
            name: post.author,
          },
        }}
      />
      <div className="container">
        <h1>{post.title}</h1>
        <p className="blog-meta">
          {post.date} • {post.author}
        </p>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        <div className="share-buttons" aria-label="Share this article">
          <a href={shareLinks.linkedin} target="_blank" rel="noreferrer">
            Share on LinkedIn
          </a>
          <a href={shareLinks.x} target="_blank" rel="noreferrer">
            Share on X
          </a>
          <a href={shareLinks.email}>Share via email</a>
        </div>
      </div>
    </section>
  )
}
