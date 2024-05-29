'use client'

import projects from '../db/Projects.json'
import { useParams } from 'next/navigation'
import Tags from '@/app/components/Tags'
import Title3 from '@/app/components/Title3'
import Slideshow from '@/app/components/Slideshow'
import Error from './Error'
import github from '../src/github.png'
import githubDark from '../src/github_dark.png'
import Image from 'next/image'

export default function Project() {
  const { id } = useParams()
  const projectId = parseInt(id, 10)
  const project2 = projects?.find((project) => project.id === projectId)

  return project2 ? (
    <>
      <section className="max-w-7xl mx-auto mt-2">
        <a
          className="text-3xl font-bold text-main-color dark:text-secondary-color p-6 md:p-12"
          href="/#projects"
        >
          &lt;-
        </a>
        <h2 className="uppercase text-4xl mb-20 text-center text-main-color dark:text-secondary-color">
          {project2.name}
        </h2>
        <div className="flex flex-col md:flex-row justify-around p-6 md:p-0">
          <div className="md:w-2/5 flex flex-col">
            <Title3 title="LA MISSION" />
            <p className="pl-6 my-8">{project2.description}</p>
            <Title3 title="TECHNOLOGIES" />
            <Tags tagsContent={project2.techno} />
            <div className="flex justify-center gap-8 mt-6 mb-24">
              {project2.link ? (
                <a
                  className="w-44 self-end text-center pointer-events-auto rounded-3xl bg-secondary-color px-3 py-1 text-s md:text-lg drop-shadow-lg duration-500 hover:bg-main-color hover:text-white"
                  href={project2.link}
                  target="_blank"
                >
                  Visiter le site
                </a>
              ) : (
                ''
              )}
              {project2.github ? (
                <a
                  className="hover:scale-125"
                  href={project2.github}
                  target="_blank"
                >
                  <Image
                    className="block dark:hidden"
                    src={github}
                    alt="lien vers GitHub"
                    width={35}
                  />
                  <Image
                    className="hidden dark:block"
                    src={githubDark}
                    alt="lien vers GitHub"
                    width={35}
                  />
                </a>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="md:w-2/5">
            <Slideshow pictures={project2.images} />
          </div>
        </div>
      </section>
    </>
  ) : (
    <Error />
  )
}
