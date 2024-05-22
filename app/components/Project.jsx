'use client'

import projects from '../db/Projects.json'
import { useParams } from 'next/navigation'
import Tags from '@/app/components/Tags'
import Title3 from '@/app/components/Title3'
import Slideshow from '@/app/components/Slideshow'
import github from '../src/github.png'
import Image from 'next/image'

export default function Project() {
  const { id } = useParams()
  const projectId = parseInt(id, 10)

  const project2 = projects?.find((project) => project.id === projectId)
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div>retour</div>
        <h2 className="uppercase text-4xl my-20 text-center text-main-color">
          {project2.name}
        </h2>
        <div className="flex justify-around">
          <div className="w-2/5 flex flex-col">
            <Title3 title="LA MISSION" />
            <p className="pl-6 my-8">{project2.description}</p>
            <Title3 title="TECHNOLOGIES" />
            <Tags tagsContent={project2.techno} />
            <div className="flex justify-center gap-8 mt-12 mb-24">
              {project2.link ? (
                <a
                  className="w-1/3 self-end text-center pointer-events-auto rounded-3xl bg-secondary-color px-3 py-1 text-s md:text-lg drop-shadow-lg duration-500 hover:bg-main-color hover:text-white"
                  href={project2.link}
                  target="_blank"
                >
                  Visiter le site
                </a>
              ) : (
                ''
              )}
              {project2.github ? (
                <a href={project2.link} target="_blank">
                  <Image src={github} alt="lien vers GitHub" width={30} />
                </a>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="w-2/5 ">
            <Slideshow pictures={project2.images} />
          </div>
        </div>
      </section>
    </>
  )
}
