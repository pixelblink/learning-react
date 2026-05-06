import { Route, Routes } from "react-router-dom"
import Page1 from "./page1"
import Page2 from "./page2"
import Page3 from "./page3"
import Page4 from "./page4"
import Page5 from "./page5"


function App(){
  return(
    <>
    <h1>appPage</h1>
    <Routes>
      <Route path="/page1" element={<Page1/>}/>
      <Route path="/page2" element={<Page2/>}/>
      <Route path="/page3" element={<Page3/>}/>
      <Route path="/page4" element={<Page4/>}/>
      <Route path="/page5" element={<Page5/>}/>
    </Routes>

    </>
  )
}
export default App