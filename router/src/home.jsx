import { useNavigate } from "react-router-dom"

function Home(){
    let navigate = useNavigate()
    function fun(){
        navigate('/about')
    }
    return(
        <>
        <h1>homepage</h1>
        <button onClick={fun}>click to go to about page,made using useNavigate hook</button>
        </>
    )
}
export default Home