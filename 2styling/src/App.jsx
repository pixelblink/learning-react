import Home from "./home"
import About from "./about"
import Content from "./content"
import { Gallery, Gallery1 } from "./gallery"
import Reactimg from "./assets/react.svg"
function App(){
  return(
    <>
    <h1>yeahhhhh</h1>
    <Home />
    <About/>
    <Content />
    <Gallery />
    <Gallery1 />
    {/* used directly from public folder */}
    <img src="favicon.svg" alt="" /> 
    <br />
    {/* imported from assets folder then used from public folder */}
    <img src={Reactimg} alt="" />
    </>
  )
}
export default App