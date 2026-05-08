import { Link } from "react-router-dom"


function About(){
    return(
        <>
        <h1>aboutpage</h1>
        <button><Link to="/contact">click to go to contact page</Link></button>
        </>
    )
}
export default About