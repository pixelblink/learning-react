// import one from "./assets/one.jpg"
function Nav(){
    return(
        <>
        <nav className="nav">
            <ul className="nav_ul">
                <li><a href="/Home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/Blog">Blog</a></li>
                <li><a href="/Socials">Socials</a></li>
            </ul>
        </nav>
        
        <div >
            <img src="/one.jpg" alt="" />
            <h1>Jojos Bizzare Adventure</h1>
        </div>
        </>
    )
}
export default Nav