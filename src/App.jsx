import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import WorkProcess from "./components/Workprocess";
import Projects from "./components/Projects";
import ExperienceEducation from "./components/ExperienceEducation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#07111F]">

      <Navbar />

      <Hero/>

      <About />

      <Services />

      <Skills />

      <WorkProcess />

      <Projects />

      <ExperienceEducation />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;