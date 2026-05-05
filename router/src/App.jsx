import { Route, Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"

function App(){
  return(
    <>
      {/* <h1>yes</h1> */}
      <Routes>
        <Route path="/home" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
      </Routes>
    </>
  )
}
export default App