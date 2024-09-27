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
          Je crée des applications web maintenables et accessibles.
        </p>
        <div className="flex justify-center gap-4 md:gap-6 wrap">
          <a
            className="text-center border-[1px] border-secondary-color text-center pointer-events-auto  outline outline-1 -outline-offset-1 outline-secondary-color/60 hover:outline-offset-8 hover:drop-shadow-none hover:outline-main-color/0  rounded-3xl bg-secondary-color my-12 md:mt-20 px-6 py-2 text-base md:text-xl dark:text-black drop-shadow-lg duration-500 hover:shadow-def"
            href="#contact"
            aria-label="cliquer pour envoyer un email"
          >
            Contactez-moi
          </a>
        </div>
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
