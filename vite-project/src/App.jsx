
import './App.css'
import { Route,Routes} from "react-router-dom";
import Login from './Component/Login';
import LandingPage2 from './Pages/LandingPage2';
import SingnUp2 from './Component/SingnUp2';
import Home from './Pages/Home';
import BoxIdea from './Pages/BoxIdea'
import ResetPassword from './Component/ResetPassword';
function App() {


  return (
    <>
 

      
      <Routes>
        
      <Route path='/' element={<LandingPage2/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Box' element={<BoxIdea/>}></Route>
      <Route path='/SignUp2' element={<SingnUp2/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/ResetPassword' element={<ResetPassword/>}></Route>
      </Routes>
    </>
  )
}

export default App
