import { useState } from "react"


function Home(){

let [demo,setdemo]=useState("person name")

let [sum,setsum]=useState(0) //addition

function inc(){
    setsum(sum+1)
}
function dec(){ //minus
    if(sum>0){
    setsum(sum-1)
    }
    else{
        alert("not less than zero...")
    }
}
function zero(){ //reset to zero
    setsum(0)
}
function fun(){
    setdemo("working")
}
    return(
        <>
        <h1>this is home page {demo} </h1>
        <button onClick={fun}>click here</button>

        <h1>plus aur minus</h1>

        <h1>{sum}</h1>
        
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
        <button onClick={zero}>reset</button>
        
        </>
    )
}
export default Home