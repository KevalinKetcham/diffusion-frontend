import React from 'react';
import AuthorNavbar from '../../components/navbars/AuthorNavbar';

// Share btns
import ShareBtns from '../../components/share btns/ShareBtns';

// Illustration
import uploadIllustration from '../../assets/illustrations/uploadIllustrationYellow.svg';

// Help Btn
import HelpBtn from '../../components/help btn/HelpBtn';

import './Write.css';

function Write() {
  return (
    <>
        <AuthorNavbar></AuthorNavbar>
        <div className="container1">
            <div>
                <h1>Simply start by uploading a book</h1>
                <p>Upload a peice (however much you want to start with) of your book and we’ll handle distribution, monetization, and guide you along the way.</p>
                <p>This will start the auto formating process. You will be able to proceed when your book has finished formating. Again, you can upload a small peice or the entire thing.</p>
                <button>Get Started!</button>
            </div>
            <img src={uploadIllustration} alt="question illustration"></img>
        </div>
        <ShareBtns></ShareBtns>
        <HelpBtn></HelpBtn>
    </>
  );
}

export default Write;
