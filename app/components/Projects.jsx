import Card2 from './Card2'

export default async function Projects({ projects }) {
  return projects ? (
    <section
      id="projects"
      className="py-12 px-6 md:py-24 max-w-[1240px] m-auto"
    >
      <h2 className="text-4xl mt-2 mb-16 text-center text-main-color dark:text-secondary-color">
        SÉLECTION DE PROJETS
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects
          .slice()
          .reverse()
          .map((project) => (
            <Card2 project={project} key={`${project.name}-${project._id}`} />
          ))}
      </div>
    </section>
  ) : (
    <div>Erreur de chargement</div>
  )
}
