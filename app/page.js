import AboutSection from './components/AboutSection'
import Form from './components/ContactForm'
import Timeline from './components/Timeline'
import BlogLastArticles from './components/BlogLastArticles'

export default async function Home() {
  return (
    <>
      <main>
        <AboutSection />
        <Timeline />
        <BlogLastArticles />
        <Form />
      </main>
    </>
  )
}
