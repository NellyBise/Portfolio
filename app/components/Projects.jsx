'use client'
import Card2 from './Card2'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  hidden: { opacity: 0 },
}

const variantsleft = {
  visible: { x: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { x: -100, opacity: 0, filter: 'blur(2px)' },
}
const variantsright = {
  visible: { x: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { x: 100, opacity: 0, filter: 'blur(2px)' },
}

const variants = {
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { y: -100, opacity: 0, filter: 'blur(2px)' },
}

export default function Projects({ projects }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return projects ? (
    <motion.section
      id="projects"
      className="overflow-hidden py-12 md:py-36 m-auto"
    >
      <h2 className="bg-secondary-color dark:bg-dark-color text-4xl pt-16 pb-36 text-center text-main-color dark:text-secondary-color">
        SÉLECTION DE PROJETS
      </h2>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid md:grid-cols-2 lg:grid-cols-3 md:max-w-7xl mx-auto -mt-20 gap-12 px-6"
      >
        {projects
          .slice()
          .reverse()
          .map((project) => (
            <Card2 project={project} key={`${project.name}-${project._id}`} />
          ))}
      </motion.div>
    </motion.section>
  ) : (
    <div>Erreur de chargement</div>
  )
}
