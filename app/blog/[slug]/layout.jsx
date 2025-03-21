import posts from '../../data/blog.json'

export async function generateMetadata({ params }) {
  const { slug } = params
  const post = posts.find((post) => post.slug === slug)

  if (!post) {
    return {
      title: 'Article introuvable',
      description: "Cet article n'existe pas",
    }
  }

  return {
    title: post.title,
    description:
      post.excerpt?.substring(0, 160) || 'Article du blog de Nelly Bise',
    openGraph: {
      title: post.title,
      description:
        post.excerpt?.substring(0, 160) || 'Article du blog de Nelly Bise',
      images: [post.image],
      type: 'article',
    },
  }
}

export default function PostLayout({ children }) {
  return <>{children}</>
}
