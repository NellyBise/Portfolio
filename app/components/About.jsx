'use client'

import Image from 'next/image'
import photo from '../src/photo.png'
import { useState } from 'react'

function About() {
  const [isOpen, setIsOpen] = useState(false)
  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <section className="min-h-screen pt-24 md:pt-36 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-around">
          <div className="md:w-2/5 text-center md:text-left text-main-color dark:text-secondary-color">
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
              Passionnée par JavaScript et React, je crée des applications web
              maintenables et accessibles avec un souci constant de qualité.
              Toujours en quête de nouveaux défis, je suis prête à transformer
              vos idées en réalités, n&rsquo;hésitez pas à me contacter.
            </p>
            <div className="flex justify-end gap-4">
              <a
                className="text-center w-1/3 pointer-events-auto rounded-3xl bg-secondary-color my-12 md:mt-20 px-3 py-1 text-s md:text-lg dark:text-black drop-shadow-lg duration-300 hover:bg-secondary-color/50"
                href="mailto:nelly.bise@free.fr"
              >
                Mail
              </a>
              <p
                className="text-center w-1/3 pointer-events-auto rounded-3xl bg-secondary-color my-12 md:mt-20 px-3 py-1 text-s md:text-lg dark:text-black drop-shadow-lg duration-300 hover:bg-secondary-color/50"
                onClick={toggle}
              >
                {isOpen ? '06 20 14 30 13' : 'Téléphone'}
              </p>
            </div>
          </div>
          <div className="md:w-2/5"></div>
        </div>
      </div>
    </section>
  )
}

export default About
