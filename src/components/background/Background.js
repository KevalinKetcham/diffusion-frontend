import React from 'react';

// Background elements
import blue1 from '../../assets/background elements/blue1.svg';
import yellow1 from '../../assets/background elements/yellow1.svg';

// CSS
import './Background.css';


function Background() {
  return (
    <>
        <img id="blue1" className="background--element" src={blue1}></img>
        <img id="yellow1" className="background--element" src={yellow1}></img>
    </>
  );
}

export default Background;
