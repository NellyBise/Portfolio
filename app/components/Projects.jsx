import Card from './Card'
import projects from '../db/Projects.json'
import Link from 'next/link'

function Projects() {
  return (
    <section
      id="projects"
      className="py-12 px-6  md:py-24 max-w-screen-xl m-auto"
    >
      <h2 className="text-4xl mt-2 mb-16 text-center text-main-color dark:text-secondary-color">
        SÉLECTION DE PROJETS
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:mx-24">
        {projects.map((project) => (
          <Link key={project.id} href={`/Projects/${project.id}`}>
            <Card
              cover={project.cover}
              name={project.name}
              key={`${project.name}-${project.id}`}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Projects
