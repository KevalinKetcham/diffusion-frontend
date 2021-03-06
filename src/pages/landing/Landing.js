import React from 'react';
import LandingNavbar from '../../components/navbars/LandingNavbar';

import {
  Link
} from "react-router-dom";

// Share btns
import ShareBtns from '../../components/share btns/ShareBtns';

// Help Btn
import HelpBtn from '../../components/help btn/HelpBtn';

// Illustrations
import educationIllustration from '../../assets/illustrations/educationIllustrationOrange.svg';
import shareIllustration from '../../assets/illustrations/shareIllustrationYellow.svg';
import monetizationIllustration from '../../assets/illustrations/monetizationIllustrationOrange.svg';
import supportIllustration from '../../assets/illustrations/supportIllustrationBlue.svg';

import Background from '../../components/background/Background';

import './Landing.css';

function Landing() {
  document.title = 'YouTube for Books | Diffusion'

  return (
    <>
        <LandingNavbar></LandingNavbar>
        <div className="container1">
            <div>
              <h1>YouTube for books</h1>
              <p>The best place to read and publish books. You simply upload a piece and we’ll handle distribution, monetization (with ads), and guide you along the way. As a reader you’ll get access to up-and-coming work for free.</p>
              <Link to="/signup"><button className="shadow--orange hover unhover">Sign Up</button></Link>
            </div>
            <img className="educationIllustration" src={educationIllustration} alt="education illustration"></img>
        </div>
        <div className="container2">
          <div>
            <h2>Democratizing books for all</h2>
            <p>The internet has democratized everything from education to entertainment. The friction involved with consuming and publishing books is absurd. We're giving everyone a platform with aligned incentives.</p>
          </div>
        </div>
        <div className="container3">
          <div className="features">
            <div>
              <img src={shareIllustration} alt="share illustration"></img>
              <h4>Distribution</h4>
              <p>Simply upload & we'll distribute your book to our readers.</p>
            </div>
            <div>
              <img src={monetizationIllustration} alt="monetization illustration"></img>
              <h4>Monetization</h4>
              <p>You don’t have to create a payments portal or battle for shelf space. Ads are discreetly embedded so you get paid as people enjoy your book.</p>
            </div>
            <div>
              <img src={supportIllustration} alt="support illustration"></img>
              <h4>Support & Feedback</h4>
              <p>Get help from a community of authors and use our analytics tools to better understand your readers.</p>
            </div>
          </div>
        </div>
        <ShareBtns></ShareBtns>
        <HelpBtn></HelpBtn>
        <Background></Background>
    </>
  );
}

export default Landing;
