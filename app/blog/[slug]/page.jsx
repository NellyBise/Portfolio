'use client'

import { useParams } from 'next/navigation'
import posts from '../../data/blog.json'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts?.find((post) => post.slug === slug)
  const [ArticleComponent, setArticleComponent] = useState(null)

  useEffect(() => {
    if (post) {
      import(`../../data/blog/${post.component}`)
        .then((module) => setArticleComponent(() => module.default))
        .catch((error) => console.error('Erreur de chargement :', error))
    }
  }, [post])

  if (!post) return <p>Article introuvable.</p>

  return (
    <section className="container flex flex-col gap-6 mx-auto pt-24 md:px-4 py-12 md:max-w-7xl">
      <div className="p-6">
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

        <h1 className="text-4xl mt-2 text-center dark:text-secondary-color">
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
    </section>
  )
}
