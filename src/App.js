import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import{
//   BrowserRouter,
//   Routes,
//   Route
  
// } from "react-router-dom";
function App() {
  return (
    <>
 {/* <BrowserRouter> */}
<Navbar/>
<div className='container my-3'>
<TextForm />
  {/* <Routes>
  <Route exact path="/about" element={<About />}>  </Route> */}
  {/* <Route exact path="/" element={<TextForm />}>
  </Route>
  </Routes> */}
  
  </div>

{/* </BrowserRouter> */}
  </>
  );
}
export default App;
