import React from 'react';
import loading from '../assets/illustrations/loadingIllustrationOrange.svg';

function Formatting() {
  return (
    <>
    <div className="container1">
        <div>
            <h1>Formatting</h1>
            <p>This can take a while. Feel free to contact hello@diffusionapp.com for any reason. Once this process is complete you’ll be able to review and publish!</p>
        </div>
        <img src={loading} alt="question illustration"></img>
    </div>
    </>
  );
}

export default Formatting;