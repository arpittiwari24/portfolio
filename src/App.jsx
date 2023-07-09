import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Home"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"

function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route index element= {<Home />} />
    <Route path='/projects' element= {<Projects />} />
    <Route path='/skills' element= {<Skills />} />
    <Route path='/contact' element= {<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
