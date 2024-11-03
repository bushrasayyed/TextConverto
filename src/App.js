import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import{
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";
function App() {
  return (
    <>
 <BrowserRouter>
<Navbar/>
<div className='container my-3'>

  <Routes>
   <Route path="/" element={<TextForm />}>
  </Route>
  </Routes>
  
  </div>

 </BrowserRouter> 
  </>
  );
}
export default App;
