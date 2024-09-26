import Image from 'next/image'
import Tags from './Tags'
import github from '../src/github.svg'
import githubDark from '../src/github-dark.svg'
import web from '../src/web.svg'
import webDark from '../src/web-dark.svg'

export default function Card2({ project }) {
  return (
    <article className="group relative p-6 flex flex-col justify-start rounded-xl bg-white dark:bg-dark-color shadow-cardshadow shadow-black/10 dark:shadow-white/20 overflow-hidden">
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
            />
            <Image
              className="hidden dark:block"
              src={webDark}
              alt="lien vers le site"
              width={40}
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
      <div className="flex-grow"></div>
      <Tags tagsContent={project.techno} />
    </article>
  )
}
