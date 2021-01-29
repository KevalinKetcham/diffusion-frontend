import React from 'react';
import Branding from '../branding/Branding';
import Username from './username/Username';
import './Navbar.css';
import { Link } from 'react-router-dom';

function LandingNavbar() {
  return (
    <>
        <nav>
            <Branding></Branding>
            <div className="navLinks">
                <ul>
                    <li><a className="discord" href="https://www.discord.com" target="_blank" rel="noreferrer">Discord Server</a></li>
                    <li><Link to="faq" className="reactLink">FAQs</Link></li>
                    <li><Link to="write" className="reactLink">Write</Link></li>
                </ul>
                <Username />
            </div>
        </nav>
    </>
  );
}

export default LandingNavbar;
