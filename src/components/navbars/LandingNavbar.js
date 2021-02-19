import React from 'react';
import Branding from '../branding/Branding';
import User from './user/User';

import './Navbar.css';

function LandingNavbar() {
  return (
    <>
        <nav>
            <Branding></Branding>
            <User />
        </nav>
    </>
  );
}

export default LandingNavbar;
