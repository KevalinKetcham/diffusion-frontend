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
            <div className="navLinks">
                <ul>
                    <li>FAQs</li>
                    <li>Write</li>
                </ul>
                <span>|</span>
                <div>
                    <p className="navUsername">Jimmy John</p>
                </div>
            </div>
        </nav>
    </>
  );
}

export default LandingNavbar;
