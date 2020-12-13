import React from 'react';
import Branding from '../branding/Branding';
import './Navbar.css';

import {
  Link
} from "react-router-dom";

function LandingNavbar() {
  return (
    <>
        <nav>
            <Branding></Branding>
            <div>
                <Link to="/signin"><button className="navbarBtn" id="signinBtn">Sign In</button></Link>
                <Link to="/signup"><button className="navbarBtn" id="signupBtn">Sign Up</button></Link>
            </div>
        </nav>
    </>
  );
}

export default LandingNavbar;
