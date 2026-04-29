import { useState } from "react"
import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
import img3 from "./assets/3.jpg"

function Imagepage(){
    let[image,setimage]=useState(img1)

    return(
        <>
        <img src={img1} height={"100px"} onMouseEnter={()=>setimage(img1)} alt="" />
        <img src={img2} height={"100px"} onMouseEnter={()=>setimage(img2)} alt="" />
        <img src={img3} height={"100px"} onMouseEnter={()=>setimage(img3)} alt="" />
        <div>
            <img src={image} height={"500px"} alt="" />
        </div>
        </>
    )
}
export default Imagepage