'use client'

import Skill from './Skill'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { y: 50, opacity: 0, filter: 'blur(2px)' },
}

function Skills({ allStack }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      variants={variants}
      ref={ref}
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      id="skills"
      className="bg-light-color dark:bg-grey py-8 md:py-24"
    >
      <div className="md:w-4/5 mx-auto md:py-4 px-6 flex flex-col items-center">
        <h2 className="text-4xl mt-2 mb-12 md:mb-24 text-center text-main-color dark:text-secondary-color">
          COMPÉTENCES
        </h2>
        <article className="animate-fadeIn duration-300 bg-white dark:bg-white/40 shadow-cardshadow shadow-black/10 dark:shadow-white/20 rounded-3xl py-6 mb-12">
          <ul className="flex px-12 justify-center flex-wrap gap-4 lg:gap-8">
            {allStack &&
              allStack.map((skill) => (
                <Skill
                  image={skill.img}
                  name={skill.name}
                  key={`${skill.name}-${skill.id}`}
                />
              ))}
          </ul>
        </article>
      </div>

      <div className="flex justify-center">
        <a
          className="mt-12 md:mt-20 text-center pointer-events-auto border-[1px] border-secondary-color outline outline-1 -outline-offset-1 outline-secondary-color/60 hover:outline-offset-8 hover:drop-shadow-none hover:outline-main-color/0  rounded-3xl bg-secondary-color my-12 md:mt-20 px-6 py-2 text-s md:text-lg dark:text-black drop-shadow-lg duration-500 hover:shadow-def"
          href="./BISE_Nelly-CV-developpeuse_web.pdf"
          target="_blank"
          aria-label="Cliquer pour ouvrir mon CV en PDF dans une nouvelle fenêtre"
        >
          Mes autres compétences - CV
        </a>
      </div>
    </motion.section>
  )
}

export default Skills
