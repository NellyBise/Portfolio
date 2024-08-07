import Tags from '@/app/components/Tags'
import Slideshow from '@/app/components/Slideshow'
import Error from './Error'
import github from '../src/github.png'
import githubDark from '../src/github_dark.png'
import puce from '../src/puce.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Project({ project }) {
  return project ? (
    <>
      <section className="max-w-7xl mx-auto mt-20 px-4">
        <Link
          className="text-3xl font-bold text-main-color dark:text-secondary-color m-6 md:m-12"
          href="/#projects"
          aria-label="Retour à l'ensemble des projets"
        >
          <span aria-hidden="true">&lt;-</span>
        </Link>
        <h1 className="uppercase text-4xl mt-6 md:mt-0 mb-12 md:mb-20 text-center text-main-color dark:text-secondary-color">
          {project.name}
        </h1>
        <div className="flex flex-col md:flex-row justify-around p-6 md:p-0 mb-24">
          <div className="md:w-1/2 md:pr-20 flex flex-col">
            <div className="flex items-start">
              <Image
                className="mr-2"
                src={puce}
                alt=""
                width={30}
                height={30}
              ></Image>
              <h2 className="text-3xl text-center text-main-color dark:text-secondary-color">
                LA MISSION
              </h2>
            </div>
            <p className="pl-6 my-8">{project.mission}</p>
            <div className="flex items-start">
              <Image
                className="mr-2"
                src={puce}
                alt=""
                width={30}
                height={30}
              ></Image>
              <h2 className="text-3xl text-center text-main-color dark:text-secondary-color">
                TECHNOLOGIES
              </h2>
            </div>
            <Tags tagsContent={project.techno} />
            <div className="flex justify-center gap-8 mt-6">
              {project.link ? (
                <a
                  className="w-44 self-end text-center pointer-events-auto rounded-3xl bg-secondary-color px-3 py-1 text-s md:text-lg drop-shadow-lg dark:text-black duration-300 hover:bg-secondary-color/50"
                  href={project.link}
                  target="_blank"
                >
                  Visiter le site
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
          <div className="md:w-1/2 mt-12 md:mt-0 flex flex-col justify-center">
            <Slideshow pictures={project.images} />
          </div>
        </div>
      </section>
    </>
  ) : (
    <Error />
  )
}
