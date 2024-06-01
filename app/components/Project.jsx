import Tags from '@/app/components/Tags'
import Title3 from '@/app/components/Title3'
import Slideshow from '@/app/components/Slideshow'
import Error from './Error'
import github from '../src/github.png'
import githubDark from '../src/github_dark.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Project({ project }) {
  return project ? (
    <>
      <section className="max-w-7xl mx-auto mt-2">
        <Link
          className="text-3xl font-bold text-main-color dark:text-secondary-color m-6 md:m-12"
          href="/#projects"
        >
          &lt;-
        </Link>
        <h2 className="uppercase text-4xl mb-20 text-center text-main-color dark:text-secondary-color">
          {project.name}
        </h2>
        <div className="flex flex-col md:flex-row justify-around p-6 md:p-0 mb-24">
          <div className="md:w-1/2 md:pr-20 flex flex-col">
            <Title3 title="LA MISSION" />
            <p className="pl-6 my-8">{project.mission}</p>
            <Title3 title="TECHNOLOGIES" />
            <Tags tagsContent={project.techno} />
            <div className="flex justify-center gap-8 mt-6">
              {project.link ? (
                <a
                  className="w-44 self-end text-center pointer-events-auto rounded-3xl bg-secondary-color px-3 py-1 text-s md:text-lg drop-shadow-lg duration-500 hover:bg-main-color hover:text-white"
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
                  className="hover:scale-125"
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
