import Card2 from './Card2'

export default async function Projects({ projects }) {
  return projects ? (
    <section id="projects" className=" py-12 md:py-36 m-auto">
      <h2 className="bg-secondary-color dark:bg-dark-color text-4xl pt-16 pb-36 text-center text-main-color dark:text-secondary-color">
        SÉLECTION DE PROJETS
      </h2>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 md:max-w-7xl mx-auto -mt-20 gap-12 px-6">
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
