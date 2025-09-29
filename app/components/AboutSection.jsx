// components/AboutSection.jsx
import React from 'react'
import Image from 'next/image'
import photo from '../src/photoID.JPG'
import { motion } from 'framer-motion'

const variants = {
  visible: { x: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { x: -200, opacity: 0, filter: 'blur(5px)' },
}

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-4xl px-2 md:px-6 pt-24 pb-12">
      <div className="p-4 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative h-36 w-36 md:h-44 md:w-44 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
              <Image
                src={photo}
                alt="portrait"
                width={700}
                height={700}
                priority
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <h1 className="text-3xl font-semibold text-center md:text-left dark:text-white">
            Technicienne de laboratoire & développeuse passionnée par
            l’optimisation
          </h1>
        </div>
      </div>
      <div className="text-left p-4 md:p-10">
        <p className="mt-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          Je suis Nelly,{' '}
          <span className="bg-teal-600 p-1 rounded text-white">
            technicienne de laboratoire
          </span>{' '}
          depuis 20 ans, mon parcours m’a menée de la chimie aux travaux publics
          en passant par l’industrie, toujours avec un même fil conducteur : la
          rigueur et l’amélioration continue.
          <br />
          <br />
          Passionnée par l’
          <span className="bg-violet-600 p-1 rounded text-white">
            informatique
          </span>
          , j’ai développé en parallèle des projets numériques : outils internes
          et automatisations de processus. J’ai complété cette pratique par une
          formation diplômante en développement web me permettant de créer des
          applications web.
        </p>
      </div>
    </section>
  )
}
