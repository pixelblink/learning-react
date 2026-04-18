import img1 from "./assets/1.jpg"
import img2 from "./assets/2.jpg"
function App(){
  return(
    <>
    <h1>yeahhhhh</h1>
    <h1>using import method from assets folder</h1>

    <img src={img1} alt="" />
    <br />
    <hr />
    <br />
    <img src={img2} alt="" />
    <h1>yeahhhhh</h1>
    <br />
    <br />
    <hr />
    <hr />
    <br />
    <br />
    <h1>using img directly from public folder</h1>

    <img src="3.jpg" alt="" />
    <br />
    <hr />
    <br />
    <img src="4.jpg" alt="" />
    </>
  )
}
 export default App