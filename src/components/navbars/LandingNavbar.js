import React from 'react';
import Logo from '../../assets/logo/logo.svg';
import './Navbar.css';

function LandingNavbar() {
  return (
    <>
        <nav>
            <div className="branding">
                <img src={Logo} alt="logo"></img>
                <p>Diffusion</p>
            </div>
            <div>
                <button className="navbarBtn" id="signupBtn">Sign Up</button>
                <button className="navbarBtn" id="signinBtn">Sign In</button>
            </div>
        </nav>
    </>
  );
}

export default LandingNavbar;
