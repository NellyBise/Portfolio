import Image from 'next/image'
import photo from '../../src/photo.png'

function About() {
  return (
    <section className="min-h-screen pt-24 md:pt-48 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-around">
          <div className="md:w-2/5 text-center md:text-left text-main-color">
            <h1 className="leading-snug text-7xl">Nelly Bise</h1>
            <h2 className="text-4xl mb-12 md:mb-6">DÉVELOPPEUSE FRONT-END</h2>
          </div>
          <div className="w-1/2 md:w-2/5 md:relative flex justify-center md:self-start">
            <Image
              className="md:absolute md:top-10"
              src={photo}
              alt="portrait"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-12 md:mt-6 md:flex-row md:justify-around">
          <div className="flex flex-col md:w-2/5 px-8 md:px-0">
            <p className="leading-loose text-s md:text-xl">
              Passionnée par l&rsquo;amélioration continue et la productivité,
              je me suis spécialisée dans le développement web Front-End.
              J&rsquo;apprécie particulièrement la modularité de React et la
              technicité de JavaScript. Dans mon travail, je m&rsquo;efforce
              toujours de garantir la maintenabilité et l&rsquo;accessibilité de
              mes projets. Je suis toujours à la recherche de nouveaux défis et
              de projets passionnants, alors n&rsquo;hésitez pas à me contacter.
            </p>
            <a
              className="w-1/2 self-end text-center pointer-events-auto rounded-3xl bg-secondary-color my-12 md:mt-20 px-3 py-1 text-s md:text-lg drop-shadow-lg duration-500 hover:bg-main-color hover:text-white"
              href="mailto:nelly.bise@free.fr"
            >
              Contactez-moi
            </a>
          </div>
          <div className="md:w-2/5"></div>
        </div>
      </div>
    </section>
  )
}

export default About
