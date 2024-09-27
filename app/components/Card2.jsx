'use client'
import Image from 'next/image'
import Tags from './Tags'
import github from '../src/github.svg'
import githubDark from '../src/github-dark.svg'
import web from '../src/web.svg'
import webDark from '../src/web-dark.svg'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants = {
  visible: { x: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { x: 80, opacity: 0, filter: 'blur(2px)' },
}

export default function Card2({ project }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.article
      ref={ref}
      variants={variants}
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5 }}
      className="group relative p-6 flex flex-col justify-start rounded-xl bg-white dark:bg-dark-color shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden"
    >
      <div className="rounded-xl shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden">
        <Image
          className="group-hover:scale-110 duration-500"
          src={project.cover}
          alt=""
          width={1600}
          height={900}
        />
      </div>
      <h3 className="text-3xl my-4 sm:text-4xl text-main-color dark:text-secondary-color">
        {project.name}
      </h3>

      <p>{project.mission}</p>
      <div className="flex justify-left items-center gap-4 my-6">
        {project.link ? (
          <a
            className="hover:scale-125 duration-300"
            href={project.link}
            target="_blank"
          >
            <Image
              className="block dark:hidden"
              src={web}
              alt="lien vers le site"
              width={40}
              height={40}
            />
            <Image
              className="hidden dark:block"
              src={webDark}
              alt="lien vers le site"
              width={40}
              height={40}
            />
          </a>
        ) : (
          ''
        )}
        {project.github ? (
          <a
            className="hover:scale-125 duration-300"
            href={project.github}
            target="_blank"
          >
            <Image
              className="block dark:hidden"
              src={github}
              alt="lien vers GitHub"
              width={35}
              height={35}
            />
            <Image
              className="hidden dark:block"
              src={githubDark}
              alt="lien vers GitHub"
              width={35}
              height={35}
            />
          </a>
        ) : (
          ''
        )}
      </div>
      <div className="flex-grow"></div>
      <Tags tagsContent={project.techno} />
    </motion.article>
  )
}
