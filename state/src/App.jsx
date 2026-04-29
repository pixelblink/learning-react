import { useState } from "react"
import Home from "./assets/home"
import Contact from "./contact"
import Imagepage from "./image"




function App(){
// syntax of usestate hook
// let [variable,function]=useState(initial state/value)

let [data,setdata]=useState(10) //stored integer
let [data1,setdata1]=useState({name:"person1"}) //stored object
let [data2,setdata2]=useState(["data",12.12]) //stored array


let [color,setcolor]=useState()
function black(){
  setcolor("black")
}
function silver(){
  setcolor("silver")
}
function orange(){
  setcolor("orange")
}
function purple(){
  setcolor("purple")
}
// set is not a keyword here, but it is used to diffrentiate from the variable name
  return(
    <>
    <h1>Lorem ipsum dolor sit amet. {data} </h1>
    <h1>Lorem ipsum dolor sit amet.  {data.name} </h1>
    <h1>Lorem ipsum dolor sit amet. {data[0]}</h1>
    <Home />
    <hr /><br /> <hr />
    <div style={{backgroundColor:color}}>
    <button onClick={black}>black</button> <br />
    <button onClick={silver}>silver</button> <br />
    <button onClick={orange}>orange</button> <br />
    <button onClick={purple}>purple</button> <br />
    {/* or can be done this way, which doesnt require you to make any extra functions */}
    <button onClick={()=>setcolor("blue")}>blue</button> <br />
    </div>
    <Contact />
    <br /><br /><br /><br />
    <Imagepage />
    </>
  )
}
export default App