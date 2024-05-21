import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Form from './components/Form/Form'

import Footer from './components/Footer/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <div>
        <Head>
          <title>Nelly Bise</title>
        </Head>
      </div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </main>
  )
}
