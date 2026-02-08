'use client'

import { useParams } from 'next/navigation'
import posts from '../../data/blog.json'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts?.find((post) => post.slug === slug)
  const [ArticleComponent, setArticleComponent] = useState(null)
  const currentIndex = posts.findIndex((p) => p.slug === slug)
  const previousPost = posts[currentIndex - 1] || null
  const nextPost = posts[currentIndex + 1] || null

  useEffect(() => {
    if (post) {
      import(`../../data/blog/${post.component}`)
        .then((module) => setArticleComponent(() => module.default))
        .catch((error) => console.error('Erreur de chargement :', error))
    }
  }, [post])

  if (!post) return <p>Article introuvable.</p>

  return (
    <section className="max-w-7xl mx-auto w-full flex flex-col gap-6 px-4 md:px-6">
      <div>
        {/*<div className="flex gap-2 mb-2">
           {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>*/}

        <h1 className="text-4xl text-center dark:text-secondary-color">
          {post.title}
        </h1>
        <div className="text-sm text-gray-500 text-center mt-2 mb-10">
          {post.date}
        </div>
        <div>{post.intro}</div>

        <div className="md:w-3/4 my-8 rounded mx-auto shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden">
          <Image src={post.image} alt="" width={1600} height={900} />
        </div>

        {ArticleComponent ? <ArticleComponent /> : <p>Chargement...</p>}
      </div>
      {/* nav articles précédent / suivant */}
      <div className="flex w-full my-8 md:gap-4">
        {previousPost ? (
          <Link
            href={`/blog/${previousPost.slug}`}
            className="flex-1 p-2 md:p-4 min-w-0 flex flex-col hover:bg-gray-50 rounded-lg transition-all duration-300 group"
          >
            <span className="text-xs text-gray-500 mb-1">← Précédent</span>
            <span className="flex-grow text-sm md:text-base break-words line-clamp-2 group-hover:font-semibold duration-300">
              {previousPost.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="flex-1 p-2 md:p-4 min-w-0 flex flex-col hover:bg-gray-50 rounded-lg transition-all duration-300 group"
          >
            <span className="text-xs text-gray-500 mb-1 self-end">
              Suivant →
            </span>
            <span className="flex-grow text-sm md:text-base break-words line-clamp-2 group-hover:font-semibold duration-300 text-right">
              {nextPost.title}
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </section>
  )
}
