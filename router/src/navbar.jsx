import { Link } from "react-router-dom"
import './App.css';

const Navbar=()=>{
    return(
        <>
            <nav className="nav">
                <h1>LOGO</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar