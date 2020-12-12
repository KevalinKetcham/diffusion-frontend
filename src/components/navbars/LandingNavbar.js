import React from 'react';
import Logo from '../../assets/logo/logo.svg';
import './Navbar.css';

import {
  Link
} from "react-router-dom";

function LandingNavbar() {
  return (
    <>
        <nav>
            <div className="branding">
                <img src={Logo} alt="logo"></img>
                <p>Diffusion</p>
            </div>
            <div>
                <Link to="/signup"><button className="navbarBtn" id="signupBtn">Sign Up</button></Link>
                <Link to="/signin"><button className="navbarBtn" id="signinBtn">Sign In</button></Link>
            </div>
        </nav>
    </>
  );
}

export default LandingNavbar;
