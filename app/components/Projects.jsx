import Card from './Card'
import Link from 'next/link'

export default async function Projects({ projects }) {
  return projects ? (
    <section
      id="projects"
      className="py-12 px-6 md:py-24 max-w-screen-lg m-auto"
    >
      <h2 className="text-4xl mt-2 mb-16 text-center text-main-color dark:text-secondary-color">
        SÉLECTION DE PROJETS
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects
          .slice()
          .reverse()
          .map((project) => (
            <Link key={project._id} href={`/Projects/${project._id}`}>
              <Card
                cover={project.cover}
                name={project.name}
                key={`${project.name}-${project._id}`}
              />
            </Link>
          ))}
      </div>
    </section>
  ) : (
    <div>Erreur de chargement</div>
  )
}
