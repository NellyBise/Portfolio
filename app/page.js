import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Form from './components/ContactForm'
import Footer from './components/Footer'
import BackTop from './components/BackTopButton'
import techSkills from './data/techSkills.json'
import toolSkills from './data/toolSkills.json'
import Allprojects from './data/projects.json'

export default async function Home() {
  const allTechSkills = techSkills
  const allToolSkills = toolSkills
  const projects = Allprojects

  return (
    <>
      <main>
        <Header />
        <BackTop />
        <About />
        <Skills allTechSkills={allTechSkills} allToolSkills={allToolSkills} />
        <Projects projects={projects} />
        <Form />
        <Footer />
      </main>
    </>
  )
}
