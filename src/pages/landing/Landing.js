import React from 'react';
import LandingNavbar from '../../components/navbars/LandingNavbar';
import educationIllustration from '../../assets/illustrations/educationIllustrationOrange.svg';
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
          Feature #1 | Feature #2 | Feature #3
        </div>
    </>
  );
}

export default Landing;
