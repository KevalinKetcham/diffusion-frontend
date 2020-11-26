import React from 'react';
import './HelpBtn.css';

import exit from '../../assets/icons/exit.svg';

function HelpBtn() {
  return (
    <>
        <button className="qBtn">?</button>
        <div className="clickedQBtn">
            <button>
                <img src={exit} alt="exit icon"></img>
            </button>
            <p>For any help feel free to reach out to <b>hello@diffusionapp.com</b></p>
        </div>
    </>
  );
}

export default HelpBtn;
