import Link from 'next/link'

export default function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-2 md:px-6 pt-24 pb-12">
      <h1 className="text-4xl pt-20 mb-10 text-center dark:text-secondary-color">
        Mes posts sur le risque chimique
      </h1>
      <div className="text-left p-4 md:p-10">
        <p className="mt-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          La série vient de commencer. Vous pouvez retrouver un nouveau post
          tous les mercredis. N'hésitez pas à me{' '}
          <Link
            className="font-bold underline hover:text-secondary-color"
            href="/#contact"
          >
            contacter
          </Link>{' '}
          si vous souhaitez plus d'informations ou si vous souhaitez que
          j'aborde un sujet spécifique.
        </p>
      </div>

      <article className="flex flex-wrap justify-center gap-2 ">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7416895810975735808?collapsed=1"
          height="567"
          width="400"
          frameborder="0"
          allowfullscreen=""
          title="Post intégré"
        ></iframe>
      </article>
    </section>
  )
}
