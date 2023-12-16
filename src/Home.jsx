import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Experience from "./Components/Experience"

const Home = () => {
  return (
    <div className="">
    <div>
      <Navbar />
    </div>
    <div >
      <Hero />
    </div>
    <div>
      <Experience />
    </div>
    <div className="text-center" >
    <h1 className=" font-bold font-serif text-5xl underline pt-0 pb-20 max-sm:text-4xl">Projects</h1>
      <Projects />
    </div>
    <div >
      <Contact />
    </div>
  </div>
  )
}

export default Home