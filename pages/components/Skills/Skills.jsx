import skills from '../../db/Skills.json'
import { Skill } from '../Skill/Skill'

export function Skills() {
  return (
    <section className="w-4/5 mx-auto py-4 px-6 bg-light-color rounded-3xl">
      <h2 className="text-4xl mt-2 mb-10 text-center">COMPÉTENCES</h2>
      <h3 className="text-3xl mt-12 mb-4">TECHNOLOGIES</h3>
      <div className="flex px-6  justify-around">
        {skills.map((skill) => (
          <Skill image={skill.img} name={skill.name} key={skill.name} />
        ))}
      </div>
      <h3 className="text-3xl mt-12 mb-4">LOGICIELS</h3>
      <div className="flex px-6  justify-around">
        {skills.map((skill) => (
          <Skill image={skill.img} name={skill.name} key={skill.name} />
        ))}
      </div>
      <div className="text-right">
        <button className="pointer-events-auto rounded-3xl bg-secondary-color mt-6 px-3 py-2 text-xs drop-shadow-lg hover:bg-main-color">
          Télécharger mon CV
        </button>
      </div>
    </section>
  )
}
