import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <About />
      <Skills />
      <Projects />
      <Form />
      <Footer />
    </main>
    </>
  );
}
