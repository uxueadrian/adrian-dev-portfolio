import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div
      className="
        transition-all
        duration-300
        dark:bg-black
        dark:text-white
        bg-white
        text-black
      "
    >
      <Navbar />

      <Hero />

      <About />

      <Experience />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
