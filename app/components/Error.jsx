import Image from 'next/image'
import Link from 'next/link'

export default function Error() {
  return (
    <section className="flex flex-col md:flex-row justify-center min-h-screen">
      <div className="md:w-2/5 flex flex-col justify-center">
        <h2 className="text-5xl md:text-7xl text-center md:text-left mt-2 mb-12 text-main-color dark:text-secondary-color">
          Oups !
        </h2>
        <h3 className="text-3xl md:text-5xl text-center md:text-left text-main-color pr-12 dark:text-secondary-color">
          La page que vous cherchez semble introuvable
        </h3>
        <Link
          className="w1/4 md:w-1/3 self-center text-center pointer-events-auto rounded-3xl bg-secondary-color mt-12 md:mt-20 px-3 py-1 text-sm md:text-lg dark:text-black drop-shadow-lg duration-300 hover:bg-secondary-color/50"
          href="/"
        >
          Accueil
        </Link>
      </div>
      <figure className="md:w-2/5 flex flex-col items-center justify-center">
        <Image
          src="/src/Error.png"
          alt="personne perdue"
          width={500}
          height={500}
        />
        <figcaption className="text-xs text-right">
          <Link href="https://storyset.com/travel">
            Travel illustrations by Storyset
          </Link>
        </figcaption>
      </figure>
    </section>
  )
}
