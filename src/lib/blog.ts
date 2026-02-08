import matter from 'gray-matter'

export type BlogPost = {
  slug: string
  title: string
  date: string
  author: string
  tags: string[]
  excerpt: string
  content: string
}

const modules = import.meta.glob<string>('../../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

export const blogPosts: BlogPost[] = Object.entries(modules).map(([path, module]) => {
  const slug = path.split('/').pop()?.replace('.md', '') ?? ''
  const parsed = matter(module)
  const data = parsed.data as {
    title: string
    date: string
    author: string
    tags: string[]
    excerpt: string
  }
  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    tags: data.tags,
    excerpt: data.excerpt,
    content: parsed.content,
  }
})

export const sortedBlogPosts = [...blogPosts].sort((a, b) =>
  b.date.localeCompare(a.date),
)

export const blogPostMap = blogPosts.reduce<Record<string, BlogPost>>((acc, post) => {
  acc[post.slug] = post
  return acc
}, {})

export function buildShareLinks(slug: string) {
  const baseUrl = `https://digitaltraceremove.com/en/blog/${slug}`
  const encode = encodeURIComponent
  return {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encode(baseUrl)}`,
    x: `https://twitter.com/intent/tweet?url=${encode(baseUrl)}`,
    email: `mailto:?subject=${encode('DigitalTrace Remove Briefing')}&body=${encode(baseUrl)}`,
  }
}
