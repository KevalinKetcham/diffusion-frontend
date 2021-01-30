import React from 'react';
import Branding from '../branding/Branding';
import Username from './username/Username';
import './Navbar.css';

import { Link } from 'react-router-dom';

function AuthorNavbar() {
  return (
    <>
        <nav>
            <Branding></Branding>
            <div className="navLinks">
                <ul>
                    <li><a className="discord" href="https://discord.gg/K5cnABAk" target="_blank" rel="noreferrer">Discord Server</a></li>
                    <li><Link to="faq" className="reactLink">FAQs</Link></li>
                    <li><Link to="read" className="reactLink">Read</Link></li>
                </ul>
                <Username />
            </div>
        </nav>
    </>
  );
}

export default AuthorNavbar;
