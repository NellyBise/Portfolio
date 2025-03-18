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
      import(`../../components/posts/${post.component}`)
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

        <h1 className="text-4xl mt-2 text-center uppercase text-main-color dark:text-secondary-color">
          {post.title}
        </h1>
        <div className="text-sm text-gray-500 text-center mt-2 mb-10">
          {post.date}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <div className="md:w-1/4 rounded self-center shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden">
            <Image
              className="group-hover:scale-110 duration-500"
              src={post.image}
              alt=""
              width={1600}
              height={900}
            />
          </div>
          <div className="md:w-3/4 leading-8">{post.intro}</div>
        </div>
        {ArticleComponent ? <ArticleComponent /> : <p>Chargement...</p>}
      </div>
    </section>
  )
}
