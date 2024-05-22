import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Form from "./components/Form";
import Footer from "./components/Footer";

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
