'use client'

import Image from 'next/image'
import photo from '../src/photo.png'

import { motion } from 'framer-motion'

const variants = {
  visible: { x: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { x: -200, opacity: 0, filter: 'blur(5px)' },
}

function About() {
  return (
    <section className="overflow-hidden w-full pt-24 md:pt-48 md:mb-28 flex flex-col-reverse items-center md:flex-row md:justify-center gap-12  xl:gap-36">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="md:w-2/5 text-left px-12 md:px-0 xl:px-12"
      >
        <h1 className="leading text-5xl lg:text-7xl text-main-color dark:text-secondary-color">
          Bonjour, je suis Nelly, développeuse web !
        </h1>
        <p className="leading-loose text-lg md:text-2xl mt-6">
          Avec une expérience en laboratoire et en développement web, j’aime
          comprendre, optimiser et améliorer les outils avec lesquels je
          travaille.
        </p>
        <p className="leading-loose text-lg md:text-2xl mt-6">
          J’aime concevoir des applications web maintenables et accessibles.
        </p>
      </motion.div>

      <div className="-mt-48 md:-mt-96 -mr-96">
        <Image
          className=""
          src={photo}
          alt="portrait"
          width={700}
          height={700}
        />
      </div>
    </section>
  )
}

export default About
