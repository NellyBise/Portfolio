import Skill from './Skill'
import Title3 from './Title3'

function Skills({ allTechSkills, allToolSkills }) {
  return (
    <section
      id="skills"
      className="bg-light-color dark:bg-dark-color py-12 md:py-24"
    >
      <div className="md:w-4/5 mx-auto md:py-4 px-6 flex flex-col items-center">
        <h2 className="text-4xl mt-2 mb-12 md:mb-24 text-center text-main-color dark:text-secondary-color">
          COMPÉTENCES
        </h2>
        <div className="flex justify-around md:flex-row flex-col gap-6 md:gap-16">
          <article className="bg-white dark:bg-grey md:w-96 drop-shadow-lg rounded-3xl py-12 flex flex-col items-center">
            <Title3 title="TECHNOLOGIES" />
            <ul className="flex flex-wrap mt-16 px-6 justify-center">
              {allTechSkills &&
                allTechSkills.map((skill) => (
                  <Skill
                    image={skill.img}
                    name={skill.name}
                    key={`${skill.name}-${skill.id}`}
                  />
                ))}
            </ul>
          </article>
          <article className="bg-white dark:bg-grey md:w-96 drop-shadow-lg rounded-3xl py-12 flex flex-col items-center">
            <Title3 title="OUTILS" />
            <div className="flex flex-wrap mt-16 px-6 justify-center">
              {allToolSkills &&
                allToolSkills.map((skill) => (
                  <Skill image={skill.img} name={skill.name} key={skill.name} />
                ))}
            </div>
          </article>
        </div>
        <a
          className="mt-12 md:mt-20 text-center pointer-events-auto rounded-3xl bg-secondary-color my-12 md:mt-20 px-6 py-1 text-s md:text-lg dark:text-black drop-shadow-lg duration-300 hover:bg-secondary-color/50"
          href="./CV_Nelly_Bise.pdf"
          target="_blank"
        >
          Voir mon CV
        </a>
      </div>
    </section>
  )
}

export default Skills
