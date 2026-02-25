import Link from 'next/link'
import posts from '../data/blog.json'
import Image from 'next/image'

export default function Blog() {
  return (
    <div>
      <h1 className="text-4xl md:pt-20 mb-10 text-center dark:text-secondary-color">
        La prévention du risque chimique
      </h1>
      <div className="text-left p-4 md:p-10">
        <p>
          Les produits chimiques sont présents dans tous les secteurs
          d'activité, du laboratoire de recherche à l'atelier de production.
          Pourtant, le risque chimique reste souvent mal évalué, voire négligé.
        </p>
        <p>
          Forte de mon expérience en laboratoire et en HSE, je partage ici des
          conseils pratiques pour une meilleure gestion du risque chimique au
          quotidien.
        </p>
        <p className="mt-4">
          Une question ? Un sujet à suggérer ? N'hésitez pas à me{' '}
          <Link
            className="font-bold underline hover:text-secondary-color"
            href="/#contact"
          >
            contacter.
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-4 mb-12 p-4 md:p-0 md:flex-row flex-wrap py-4 justify-center">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="group flex flex-col w-full md:max-w-80 bg-white rounded-lg dark:bg-dark-color shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden transition-shadow duration-300"
          >
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

            {/* Image */}
            <div className="shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden">
              <Image
                className="group-hover:scale-105 duration-500"
                src={post.image}
                alt=""
                width={1600}
                height={900}
              />
            </div>

            {/* Contenu */}
            <div className="p-3 flex flex-col flex-1">
              <h2 className="text-2xl py-2 dark:text-secondary-color">
                {post.title}
              </h2>

              <p className="text-gray-600 dark:text-white py-2">
                {post.excerpt}
              </p>

              {/* Call to action en bas */}
              <p className="mt-auto self-end text-gray-600 group-hover:font-semibold group-hover:text-secondary-color duration-300 dark:text-white py-2">
                Lire →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
