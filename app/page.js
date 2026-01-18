import AboutSection from './components/AboutSection'
import Form from './components/ContactForm'
import Timeline from './components/Timeline'
//import Allprojects from './data/projects.json'
//import Projects from './components/Projects'

export default async function Home() {
  // const projects = Allprojects

  return (
    <>
      <main>
        <AboutSection />
        <Timeline />
        <Form />
      </main>
    </>
  )
}
