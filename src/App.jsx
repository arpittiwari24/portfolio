import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./Home"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Blog from "./Components/Blogs"

function App() {


  return (
    <BrowserRouter>
    <Routes>
    <Route index element= {<Home />} />
    <Route path='/projects' element= {<Projects />} />
    <Route path='/blogs' element= {<Blog />} />
    <Route path='/contact' element= {<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
