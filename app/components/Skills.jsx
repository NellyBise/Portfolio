import Skill from './Skill'
import Image from 'next/image'
import puce from '../src/puce.png'

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
          <article className="bg-white bg-gradient-to-br dark:from-grey dark:to-grey/80 md:w-96 drop-shadow-lg rounded-3xl py-12 flex flex-col items-center">
            <div className="flex items-start">
              <Image
                className="mr-2"
                src={puce}
                alt=""
                width={30}
                height={30}
              ></Image>
              <h3 className="text-3xl text-center text-main-color dark:text-secondary-color">
                TECHNOLOGIES
              </h3>
            </div>
            <ul className="flex flex-wrap mt-16 px-6 justify-center gap-4">
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
          <article className="bg-white bg-gradient-to-br dark:from-grey dark:to-grey/80 md:w-96 drop-shadow-lg rounded-3xl py-12 flex flex-col items-center">
            <div className="flex items-start">
              <Image
                className="mr-2"
                src={puce}
                alt=""
                width={30}
                height={30}
              ></Image>
              <h3 className="text-3xl text-center text-main-color dark:text-secondary-color">
                OUTILS
              </h3>
            </div>
            <ul className="flex flex-wrap mt-16 px-6 justify-center gap-4">
              {allToolSkills &&
                allToolSkills.map((skill) => (
                  <Skill image={skill.img} name={skill.name} key={skill.name} />
                ))}
            </ul>
          </article>
        </div>
        <a
          className="mt-12 md:mt-20 text-center pointer-events-auto rounded-3xl bg-secondary-color my-12 md:mt-20 px-6 py-1 text-s md:text-lg dark:text-black drop-shadow-lg duration-300 hover:bg-secondary-color/50"
          href="./Nelly_Bise_developpeuse_front-end.pdf"
          target="_blank"
          aria-label="Cliquer pour ouvrir mon CV en PDF dans une nouvelle fenêtre"
        >
          Voir mon CV
        </a>
      </div>
    </section>
  )
}

export default Skills
