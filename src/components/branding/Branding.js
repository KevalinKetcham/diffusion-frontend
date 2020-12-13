import React from 'react';
import Logo from '../../assets/logo/logo.svg';

// CSS
import './Branding.css';

import { Link } from 'react-router-dom';

function Branding() {
  return (
    <>
    <Link to="/" className="link--branding">
        <div className="branding">
            <img src={Logo} alt="logo"></img>
            <p>Diffusion</p>
        </div>
    </Link>
    </>
  );
}

export default Branding;
