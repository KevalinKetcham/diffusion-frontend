import React from 'react';
import './ShareBtns.css';

// Social media icons
import twitter from '../../assets/icons/twitter.svg';
import gmail from '../../assets/icons/gmail.svg';
import facebook from '../../assets/icons/facebook.svg';
import reddit from '../../assets/icons/reddit.svg';

function ShareBtns() {
  return (
    <>
        <div className="socialIcons">
            <a id="twitter" href="https://twitter.com/intent/tweet?text=Check%20out%20@diffusionapp!%20They%27re%20building%20YouTube%20for%20books!" target="_blank" rel="noreferrer">
                <img src={twitter} alt="twitter icon"></img>
            </a>
            <a id="gmail" href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noreferrer">
                <img src={gmail} alt="gmail icon"></img>
            </a>
            <a id="facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img src={facebook} alt="facebook icon"></img>
            </a>
            <a id="reddit" href="https://reddit.com" target="_blank" rel="noreferrer">
                <img src={reddit} alt="reddit icon"></img>
            </a>
        </div>
    </>
  );
}

export default ShareBtns;
