import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Form } from './components/Form/Form'

export default function Home() {
  return (
    <main>
      <About />
      <Skills />
      <Projects />
      <Form />
    </main>
  )
}
