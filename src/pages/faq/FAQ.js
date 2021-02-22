import React from 'react';
import FAQNavbar from '../../components/navbars/FAQNavbar';

// Share btns
import ShareBtns from '../../components/share btns/ShareBtns';

// Illustration
import questionIllustration from '../../assets/illustrations/questionMarkIllustrationOrange.svg';

// Help Btn
import HelpBtn from '../../components/help btn/HelpBtn';

import Background from '../../components/background/Background';

import './FAQ.css';

function FAQ() {
  document.title = 'FAQs | Diffusion'

  return (
    <>
    <FAQNavbar></FAQNavbar>
    <div className="container1">
        <div>
            <h1>FAQs</h1>
            <h4>How do authors make money?</h4>
            <p>Large cut of ad revenue.</p>
            <h4>How many ads are there?</h4>
            <p>About one banner ad every few chapters.</p>
            <h4>How do you deal with copyright?</h4>
            <p>We’re not responsible for copyrighted work on our platform. Authors agree to publish their own work. Disputes are settled independantly.</p>
            <h4>I have a question, where can I ask?</h4>
            <p>Feel free to send us an email at <b>hello@diffusionapp.com</b>. We’ll get back to you quickly!</p>
        </div>
        <img src={questionIllustration} alt="question illustration"></img>
    </div>
    <ShareBtns></ShareBtns>
    <HelpBtn></HelpBtn>
    <Background></Background>
    </>
  );
}

export default FAQ;
