import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Component/NavBar.css";
// import { useNavigate } from 'react-router-dom'
export default function NavBar2() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	// const [nav , setNav] = useState(false)

	// const navigate = useNavigate()
	// 	const SignIn = ()=>{
	// 		console.log("user SignUp");
	// 		navigate("/home")
	// 		setNav("")
	
	// 	}
	// 	const LogOut = ()=>{
	// 		console.log("user LogOut");
	// 		navigate("/") 
	// 		setNav(true)
	
	// 	}
  return (
    <div>
        <header>
        <img src='../public/logoBox3.png ' alt="logo" width="100" height="300"></img>
			<nav ref={navRef}>
				<a href="/Home">Home</a>
				<a href="/SignUp2">Sign up</a>
				<a href="/Login">Log in</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
    </div>
  )
}
