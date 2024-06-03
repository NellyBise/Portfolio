import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Form from './components/ContactForm'
import Footer from './components/Footer'
import BackTop from './components/BackTopButton'
import fetchData from './utils/Fetch'

export default async function Home() {
  const allTechSkills = await fetchData('techSkills')
  const allToolSkills = await fetchData('toolSkills')
  const projects = await fetchData('getProjects')

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
