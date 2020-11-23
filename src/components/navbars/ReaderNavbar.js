import React from 'react';
import Logo from '../../assets/logo/logo.svg';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
                    <li><Link to="faq" className="reactLink">FAQs</Link></li>
                    <li><Link to="write" className="reactLink">Write</Link></li>
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
