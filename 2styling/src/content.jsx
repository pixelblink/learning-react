function Content(){
    let mystyle={
        backgroundColor:"beige",
        color:"brown",
        padding:"20px"
    }
    return(
        <>
            <h1 style={{backgroundColor:"beige", color:"purple", padding:"20px"}}>TEXT FROM CONTENT, USING INLINE CSS</h1>
            <h1 style={mystyle}>TEXT FROM CONTENT, USING INLINE CSS USING VARIABLE</h1>
        </>
    )
}
export default Content