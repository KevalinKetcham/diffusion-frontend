import React from 'react';
import LandingNavbar from '../../components/navbars/LandingNavbar';

// Share btns
import ShareBtns from '../../components/share btns/ShareBtns';

// Illustrations
import educationIllustration from '../../assets/illustrations/educationIllustrationOrange.svg';
import shareIllustration from '../../assets/illustrations/shareIllustrationYellow.svg';
import monetizationIllustration from '../../assets/illustrations/monetizationIllustrationOrange.svg';
import supportIllustration from '../../assets/illustrations/supportIllustrationBlue.svg';

// Background Elements
import blue1 from '../../assets/background elements/blue1.svg';
import yellow2 from '../../assets/background elements/yellow2.svg';

import './Landing.css';

function Landing() {
  return (
    <>
        <LandingNavbar></LandingNavbar>
        <div className="container1">
            <div>
              <h1>YouTube for books</h1>
              <p>The best place to read and publish books. You simply upload a peice (however much you want to start with) of your book and we’ll handle distribution, monetization, and guide you along the way. As a reader you’ll get access to some of the best liturature for free.</p>
              <button>Sign Up</button>
            </div>
            <img className="educationIllustration" src={educationIllustration} alt="education illustration"></img>
        </div>
        <div className="container2">
          <div>
            <h2>Democratizing books for all</h2>
            <p>The internet has democratized everything from education to entertainment. The friction involved with consuming and publishing books is absurd. These days everyone can be a creator. We’re bringing this fact to literature by putting ads in ebooks.</p>
          </div>
        </div>
        <div className="container3">
          <div className="features">
            <div>
              <img src={shareIllustration} alt="share illustration"></img>
              <h4>Distribution</h4>
              <p>Simply post your book to Diffusion & we automatically distribute your book to readers on Diffusion.</p>
            </div>
            <div>
              <img src={monetizationIllustration} alt="monetization illustration"></img>
              <h4>Monetization</h4>
              <p>You don’t have to create a payment portal or sell in some store. Ads are automatically embedded so you get paid as people enjoy your book.</p>
            </div>
            <div>
              <img src={supportIllustration} alt="support illustration"></img>
              <h4>Support</h4>
              <p>Get help from a community of authors. You’ll be more motivated and produce better work.</p>
            </div>
          </div>
        </div>
        <img id="blue1Landing" className="background" src={blue1}></img>
        <img id="yellow2Landing" className="background" src={yellow2}></img>
        <ShareBtns></ShareBtns>
    </>
  );
}

export default Landing;
