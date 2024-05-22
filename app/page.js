import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Form from './components/Form'
import Footer from './components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Form />
        <Footer />
      </main>
    </>
  )
}
