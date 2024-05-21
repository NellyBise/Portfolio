import { Card } from '../Card/Card'

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl mt-2 mb-10 text-center text-main-color">
        SÉLECTION DE PROJETS
      </h2>
      <div className="grid grid-cols-2 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}
