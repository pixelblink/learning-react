import { Link } from "react-router-dom"


function Contact(){
    return(
        <>
        <h1>contactPage</h1>
                <button><Link to="/about">click to go to about page, used Link component from ReactRouterDOM</Link></button>
                
        </>
    )
}
    export default Contact