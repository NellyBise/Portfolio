import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Form from './components/ContactForm'
import Footer from './components/Footer'
import BackTop from './components/BackTopButton'
import skills from './data/skills.json'
import Allprojects from './data/projects.json'

export default async function Home() {
  const allFrontSkills = skills.front
  const allBackSkills = skills.back
  const allToolSkills = skills.toolSkills
  const allStack = skills.stack
  const projects = Allprojects

  return (
    <>
      <main>
        <BackTop />
        <About />
        <Projects projects={projects} />
        <Form />
      </main>
    </>
  )
}
