import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Form from './components/Form'
import Footer from './components/Footer'
import BackTop from './components/BackTopButton'

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL
  const res = await fetch(`${apiUrl}/techSkills`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error(`Failed to fetch tech skills: ${res.status}`)
  }
  const allTechSkills = await res.json()

  const res2 = await fetch(`${apiUrl}/toolSkills`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  })
  if (!res2.ok) {
    throw new Error(`Failed to fetch tech skills: ${res2.status}`)
  }
  const allToolSkills = await res2.json()

  return (
    <>
      <main>
        <Header />
        <BackTop />
        <About />
        <Skills allTechSkills={allTechSkills} allToolSkills={allToolSkills} />
        <Projects />
        <Form />
        <Footer />
      </main>
    </>
  )
}
