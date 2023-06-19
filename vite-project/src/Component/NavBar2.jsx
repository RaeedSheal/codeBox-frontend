import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Component/NavBar.css";

export default function NavBar2() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <div>
        <header>
        <img src='../public/logoBox3.png ' alt="logo" width="100" height="300"></img>
			<nav ref={navRef}>
				<a href="/Home">Home</a>
				{/* <a href="/#">My work</a> */}
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
