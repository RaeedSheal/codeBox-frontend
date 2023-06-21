import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Component/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

// import { useNavigate } from 'react-router-dom'
export default function Navbaradmin() {
    const navRef = useRef();
    const navigate = useNavigate();
    const cookie = new Cookies();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    const Logout = () => {
        cookie.remove("access_token");
        navigate("/");
    };
    return (
        <div>
            <header>
                <Link to={"/"}>
                    <img
                        src="../public/logoBox3.png "
                        alt="logo"
                        width="100"
                        height="300"
                    ></img>
                </Link>

                <nav ref={navRef}>
                    <a href="/ViewIdeas">Ideas</a>
                    <a href="/createidea">Create Ideas</a>
                    <a onClick={() => Logout()}>Log out</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}
                    >
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            </header>
        </div>
    );
}
