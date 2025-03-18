import Link from 'next/link'
import Image from 'next/image'
import posts from '../data/blog.json'

export const metadata = {
  title: 'Blog | Nelly Bise',
  description: 'Découvrez les articles de blog de Nelly Bise',
}

export default async function Blog() {
  return (
    <div className="container flex flex-col gap-6 mx-auto pt-24 px-4 py-12">
      <h1 className="text-4xl mt-2 mb-10 text-center uppercase text-main-color dark:text-secondary-color">
        Blog
      </h1>

      <div className="grid gap-8 flex flex-col justify-center">
        {posts.reverse().map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className={`group flex flex-col md:flex-row p-6 gap-4 max-w-[900px] bg-white rounded-lg dark:bg-dark-color shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden transition-shadow duration-300  ${
              post.id % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <div className="w-9/10">
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
              <span className="text-sm text-gray-500">{post.date}</span>
              <h2 className="text-3xl mt-2 mb-3 text-main-color dark:text-secondary-color">
                {post.title}
              </h2>

              <p className="text-gray-600 mb-4">{post.excerpt}</p>
            </div>
            <div className="w-1/10 rounded-xl self-center shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden">
              <Image
                className="group-hover:scale-110 duration-500"
                src={post.image}
                alt=""
                width={1600}
                height={900}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
