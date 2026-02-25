import Link from 'next/link'
import posts from '../data/blog.json'
import Image from 'next/image'

export default function TimeBlogLastArticles() {
  return (
    <section id="parcours" className="mx-auto max-w-5xl flex flex-col md:px-6">
      <h2 className="text-3xl pt-28 mb-10 text-center dark:text-secondary-color">
        Mes derniers articles
      </h2>
      <div className="flex flex-col p-4 md:p-0 gap-6 md:flex-row flex-wrap py-8 justify-center">
        {posts.slice(0, 3).map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="group flex flex-col w-full md:w-1/4 bg-white rounded-lg dark:bg-dark-color shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden transition-shadow duration-300"
          >
            <div>
              <div className="self-center shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden">
                <Image
                  className="group-hover:scale-110 duration-500"
                  src={post.image}
                  alt=""
                  width={1600}
                  height={900}
                />
              </div>
              <div className="flex flex-col p-3">
                <h2 className="text-xl pt-2 dark:text-secondary-color">
                  {post.title}
                </h2>
                <p className="text-gray-400 py-2 texte-sm">{post.date}</p>
                <p className="self-end text-gray-600 dark:text-white py-2">
                  Lire →
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        className="md:w-1/3 mt-4 md:mt-12 self-center pointer-events-auto border-2 border-violet-600 text-center rounded px-6 py-1 duration-500 hover:bg-violet-600/10"
        href="/blog"
      >
        Voir tous les articles →
      </Link>
    </section>
  )
}
