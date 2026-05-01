import { useState } from "react"
import speed from "./assets/speed.jpg"
function App(){

    let[image,setimage]=useState("")

  return(
    <div>
 
      <h4>Q.on mouse hover make a text appear on the image and then mouse leaves the text removes aswell</h4>

      <img src={speed} height={"500px"} onMouseEnter={()=>setimage('speed')} onMouseLeave={()=>setimage('')} />
    
     <h1 style={{position:"absolute", top:"250px", left:"10%", fontSize:"50px"}}>{image}</h1>
    </div>
  )
}
export default App