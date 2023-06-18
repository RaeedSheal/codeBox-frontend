
import './App.css'
import { Route,Routes} from "react-router-dom";
// import Footer from './Component/Footer'
// import NavBar from './Component/NavBar'
// import SignUp from './Component/SignUp'
import Login from './Component/Login';
// import LandingPage from './Pages/LandingPage'
import LandingPage2 from './Pages/LandingPage2';
import SingnUp2 from './Component/SingnUp2';
import SingnUp from './Component/SignUp'
import Home from './Pages/Home';
import Box2 from './Pages/Box2';
import BoxIdea from './Pages/BoxIdea'
function App() {


  return (
    <>
 

      {/* Routers */}
      <Routes>
      <Route path='/' element={<LandingPage2/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Box2' element={<Box2/>}></Route>
      <Route path='/Box' element={<BoxIdea/>}></Route>
      <Route path='/SignUp2' element={<SingnUp2/>}></Route>
      <Route path='/SignUp' element={<SingnUp/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
