import Image from 'next/image'
import photo from '../../src/photo.png'

export function About() {
  return (
    <section className="min-h-screen pt-48">
      <div className="flex flex-col items-center md:flex-row md:justify-around">
        <div className="md:w-2/5">
          <h1 className="font-bold leading-snug text-7xl">Nelly Bise</h1>
          <h2 className="text-4xl">DÉVELOPPEUSE FRONT-END</h2>
        </div>
        <div className="md:w-2/5 flex justify-center">
          <Image src={photo} alt="portrait" width={200} />
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-around">
        <p className="leading-loose md:w-2/5 sm:text-xs md:text-xl">
          Passionnée par l’amélioration continue et la productivité, je me suis
          naturellement tournée vers le développement web et plus
          particulièrement le Front-End. Je suis conquise par le côté modulaire
          de React mais apprécie la technicité de JavaScript. J’ai à cœur, dans
          ma pratique, de prendre soin de la maintenabilité et de
          l’accessibilité.
        </p>
        <div className="md:w-2/5"></div>
      </div>
    </section>
  )
}
