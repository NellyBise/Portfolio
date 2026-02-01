import Link from 'next/link'
import posts from '../data/blog.json'
import Image from 'next/image'

export default function Blog() {
  return (
    <div>
      <h1 className="text-4xl pt-20 mb-10 text-center dark:text-secondary-color">
        La prévention du risque chimique
      </h1>
      <div className="text-left p-4 md:p-10">
        <p>
          Les produits chimiques font partie de notre quotidien professionnel.
          Pourtant, le risque chimique reste souvent mal compris, mal évalué ou
          sous-estimé. Je partage aujourd'hui mon expérience dans des articles
          pratiques.
        </p>
        <p className="mt-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          N'hésitez pas à me{' '}
          <Link
            className="font-bold underline hover:text-secondary-color"
            href="/#contact"
          >
            contacter
          </Link>{' '}
          si vous souhaitez plus d'informations ou si vous avez un sujet
          spécifique à me suggérer.
        </p>
      </div>

      <div className="gap-8 flex flex-col md:flex-row p-4 justify-center">
        {posts.reverse().map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="group flex flex-col w-min-96 w-full md:w-1/3 gap-4 bg-white rounded-lg dark:bg-dark-color shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden transition-shadow duration-300"
          >
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
              <div className="self-center shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden">
                <Image
                  className="group-hover:scale-110 duration-500"
                  src={post.image}
                  alt=""
                  width={1600}
                  height={900}
                />
              </div>
              <div className="p-3">
                <h2 className="text-2xl py-2 dark:text-secondary-color">
                  {post.title}
                </h2>
                <p className="text-gray-600 py-2">{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
