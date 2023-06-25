import Contact from "./Components/Contact"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"


const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-100%">
    <div>
      <Navbar />
    </div>
    <div >
      <Hero />
    </div>
    <div>
      <h1 className="text-white text-center text-5xl font-bold pb-8">Projects</h1>
      <Projects />
    </div>
    <div>
      <Skills />
    </div>
    <div>
      <Contact />
    </div>
  </div>
  )
}

export default Home