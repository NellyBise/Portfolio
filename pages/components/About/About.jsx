import Image from 'next/image'
import photo from '../../src/photo.png'

export function About() {
  return (
    <section className="min-h-screen pt-48 ">
      <div className="flex flex-col items-center md:flex-row md:justify-center">
        <div className="md:w-2/5 text-center md:text-left text-main-color">
          <h1 className="leading-snug text-7xl">Nelly Bise</h1>
          <h2 className="text-4xl mb-12 md:mb-6">DÉVELOPPEUSE FRONT-END</h2>
        </div>
        <div className="md:w-2/5 md:relative flex justify-center md:self-start">
          <Image
            className="md:absolute"
            src={photo}
            alt="portrait"
            width={300}
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-12 md:mt-6 md:flex-row md:justify-center">
        <div className="flex flex-col md:w-2/5">
          <p className="leading-loose  sm:text-xs md:text-xl">
            Passionnée par l'amélioration continue et la productivité, je me
            suis spécialisée dans le développement web Front-End. J'apprécie
            particulièrement la modularité de React et la technicité de
            JavaScript. Dans mon travail, je m'efforce toujours de garantir la
            maintenabilité et l'accessibilité de mes projets. Je suis toujours à
            la recherche de nouveaux défis et de projets passionnants, alors
            n'hésitez pas à me contacter.
          </p>
          <button className="w-1/3 self-end pointer-events-auto rounded-3xl bg-secondary-color mt-20 px-3 py-1 sm:text-xs md:text-lg drop-shadow-lg duration-500 hover:bg-main-color hover:text-white">
            Contactez-moi
          </button>
        </div>
        <div className="md:w-2/5"></div>
      </div>
    </section>
  )
}
