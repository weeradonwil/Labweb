import React from "react";
import "./Navbar.css";
import logo from "../../assets/react.svg"

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Biography</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>

    )
}

export default Navbar;