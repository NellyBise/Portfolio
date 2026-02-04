import posts from './data/blog.json'

export default function sitemap() {
  const baseUrl = 'https://www.nelly-bise.fr'

  const articles = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.dateISO || new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.7,
  }))

  const pages = ['', '/mentions-legales', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.9,
  }))

  return [...pages, ...articles]
}
