
import './App.css'
import { Route,Routes} from "react-router-dom";
// import Footer from './Component/Footer'
// import NavBar from './Component/NavBar'
import SignUp from './Component/SignUp'
import Login from './Component/Login';
import LandingPage from './Pages/LandingPage'
function App() {


  return (
    <>
 

      {/* Routers */}
      <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
