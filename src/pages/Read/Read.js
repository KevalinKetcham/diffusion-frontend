import React from 'react';
import ReaderNavbar from '../../components/navbars/ReaderNavbar';

// Share btns
import ShareBtns from '../../components/share btns/ShareBtns';

// Illustration
import waitingIllustration from '../../assets/illustrations/waitingIllustrationOrange.svg';

// Help Btn
import HelpBtn from '../../components/help btn/HelpBtn';

import Background from '../../components/background/Background';

import './Read.css';

function Read() {
  return (
    <>
        <ReaderNavbar></ReaderNavbar>
        <div className="container1">
            <div>
                <h1>Content coming soon...</h1>
                <p>We'll email you when we go live!</p>
            </div>
            <img src={waitingIllustration} alt="waiting illustration"></img>
        </div>
        <ShareBtns></ShareBtns>
        <HelpBtn></HelpBtn>
        <Background></Background>
    </>
  );
}

export default Read;
