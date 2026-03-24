function Contact(){
    function fun(a){
        alert(a)
    }
    return(
        <>
        <h1>Contact Page</h1>
        <button onClick={()=>fun("data")}>click here</button>
        </>
    )
}
export default Contact
