import AboutSection from './components/AboutSection'
import Projects from './components/Projects'
import Form from './components/ContactForm'
import Timeline from './components/Timeline'
import Allprojects from './data/projects.json'

export default async function Home() {
  const projects = Allprojects

  return (
    <>
      <main>
        <AboutSection />
        <Timeline />
        <Projects projects={projects} />
        <Form />
      </main>
    </>
  )
}
