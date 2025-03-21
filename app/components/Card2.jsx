'use client'
import Image from 'next/image'
import Tags from './Tags'

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
      <h3 className="text-2xl my-4 sm:text-3xl text-main-color dark:text-secondary-color">
        {project.name}
      </h3>

      <p>{project.mission}</p>
      <div className="flex justify-left gap-2 my-6">
        {project.link ? (
          <a
            className="hover:scale-125 duration-300"
            aria-label="lien vers le site web"
            href={project.link}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 24 24"
              className="transition-colors duration-200 dark:fill-white fill-black hover:fill-main-color dark:hover:fill-secondary-color"
            >
              <path d="m15.5 14l5 5l-1.5 1.5l-5-5v-.79l-.27-.28A6.47 6.47 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27zm-6-9.5l-.55.03c-.24.52-.61 1.4-.88 2.47h2.86c-.27-1.07-.64-1.95-.88-2.47c-.18-.03-.36-.03-.55-.03M13.83 7a4.94 4.94 0 0 0-2.68-2.22c.24.53.55 1.3.78 2.22zM5.17 7h1.9c.23-.92.54-1.69.78-2.22A4.94 4.94 0 0 0 5.17 7M4.5 9.5c0 .5.08 1.03.23 1.5h2.14l-.12-1.5l.12-1.5H4.73c-.15.47-.23 1-.23 1.5m9.77 1.5c.15-.47.23-1 .23-1.5s-.08-1.03-.23-1.5h-2.14a9.5 9.5 0 0 1 0 3zm-6.4-3l-.12 1.5l.12 1.5h3.26a9.5 9.5 0 0 0 0-3zm1.63 6.5c.18 0 .36 0 .53-.03c.25-.52.63-1.4.9-2.47H8.07c.27 1.07.65 1.95.9 2.47zm4.33-2.5h-1.9c-.23.92-.54 1.69-.78 2.22A4.94 4.94 0 0 0 13.83 12m-8.66 0a4.94 4.94 0 0 0 2.68 2.22c-.24-.53-.55-1.3-.78-2.22z" />
            </svg>
          </a>
        ) : (
          ''
        )}
        {project.github ? (
          <a
            className="hover:scale-125 duration-300"
            aria-label="lien vers le repo GitHub du projet"
            href={project.github}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              className="transition-colors duration-200 dark:fill-white fill-black hover:fill-main-color dark:hover:fill-secondary-color"
            >
              <path d="M11.963 2.382C.554 2.621-1.82 17.93 8.852 21.602c.498.093.684-.219.684-.478v-1.68c-2.79.601-3.38-1.317-3.38-1.317a2.6 2.6 0 0 0-1.121-1.442c-.902-.612.072-.602.072-.602a2.07 2.07 0 0 1 1.536 1.038a2.167 2.167 0 0 0 2.924.819c.052-.5.275-.965.633-1.317c-2.23-.25-4.564-1.1-4.564-4.875a3.76 3.76 0 0 1 1.038-2.645a3.46 3.46 0 0 1 .103-2.634s.84-.26 2.76 1.037a9.6 9.6 0 0 1 5.02 0c1.908-1.276 2.748-1.038 2.748-1.038c.365.828.398 1.763.093 2.614a3.75 3.75 0 0 1 1.037 2.645c0 3.786-2.344 4.626-4.574 4.865c1.038.55.602 4.086.664 4.522c0 .259.176.57.695.477c10.642-3.64 8.152-18.97-3.257-19.209" />
            </svg>
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
