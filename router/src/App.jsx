import { Route, Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Navbar from "./navbar"
import Structure from "./structure"

function App(){
  return(
    <>
      {/* <Navbar/> */}
      {/* <h1>yes</h1> */}
      <Routes>
        <Route path="/" element={<Structure/>}>
        <Route index element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/contact" element={ <Contact /> }/>
        </Route>
      </Routes>
    </>
  )
}
export default App