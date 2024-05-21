import { Card } from '../Card/Card'

export function Projects() {
  return (
    <section id="projects" className="py-24 max-w-screen-xl m-auto">
      <h2 className="text-4xl mt-2 mb-16 text-center text-main-color">
        SÉLECTION DE PROJETS
      </h2>
      <div className="grid grid-cols-2 gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}
