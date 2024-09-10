import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/home" className="navbar-link" >HOME</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/history" className="navbar-link" >HISTORY</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/experiences" className="navbar-link" >EXPERIENCES</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/gallery" className="navbar-link" >GALLERY</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/booking" className="navbar-link" >BOOKING</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className="navbar-link" >CONTACT US</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;