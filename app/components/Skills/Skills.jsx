import skills from '../../db/Skills.json'
import Skill from '../Skill/Skill'
import puce from '../../src/puce3.png'
import Image from 'next/image'

function Skills() {
  return (
    <section id="skills" className="bg-light-color py-24">
      <div className="w-4/5 mx-auto py-4 px-6 flex flex-col items-center">
        <h2 className="text-4xl mt-2 mb-24 text-center text-main-color">
          COMPÉTENCES
        </h2>
        <div className="flex justify-around md:flex-row flex-col gap-16">
          <article className="bg-white w-96 drop-shadow-lg rounded-3xl py-12">
            <div className="flex justify-center items-start">
              <Image
                className="mr-2"
                src={puce}
                alt="flèche décorative"
                width={30}
                height={30}
              ></Image>
              <h3 className="text-3xl mb-16 text-center text-main-color">
                TECHNOLOGIES
              </h3>
            </div>
            <div className="flex flex-wrap px-6 justify-center">
              {skills.map((skill) => (
                <Skill
                  image={skill.img}
                  name={skill.name}
                  key={`${skill.name}-${skill.id}`}
                />
              ))}
            </div>
          </article>
          <article className="bg-white w-96 drop-shadow-lg rounded-3xl py-12  flex flex-col items-center">
            <div className="flex justify-center items-start">
              <Image
                className="mr-2"
                src={puce}
                alt="flèche décorative"
                width={30}
                height={30}
              ></Image>
              <h3 className="text-3xl mb-16 text-center text-main-color">
                LOGICIELS
              </h3>
            </div>
            <div className="flex flex-wrap px-6 justify-center">
              {skills.map((skill) => (
                <Skill image={skill.img} name={skill.name} key={skill.name} />
              ))}
            </div>
          </article>
        </div>
        <div className="text-center">
          <button className="pointer-events-auto rounded-3xl bg-secondary-color mt-20 px-3 py-1 sm:text-xs md:text-lg drop-shadow-lg duration-500 hover:bg-main-color hover:text-white">
            <a href="./CV_Nelly_Bise.pdf" download>
              Télécharger mon CV
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Skills
