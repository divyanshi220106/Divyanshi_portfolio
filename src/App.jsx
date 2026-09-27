import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Reveal from "./components/Reveal";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="bg-[#0a0a0f] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
       <Education/>
      <Achievements />
      <Certifications/>
      <Contacts />
      <Footer />
      <Reveal/>
    </div>
  );
}

export default App;
