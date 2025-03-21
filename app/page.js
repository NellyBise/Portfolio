import About from './components/About'
import Projects from './components/Projects'
import Form from './components/ContactForm'
import Allprojects from './data/projects.json'

export default async function Home() {
  const projects = Allprojects

  return (
    <>
      <main>
        <About />
        <Projects projects={projects} />
        <Form />
      </main>
    </>
  )
}
