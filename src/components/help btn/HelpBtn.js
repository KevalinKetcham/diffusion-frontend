import React from 'react';
import './HelpBtn.css';

import exit from '../../assets/icons/exit.svg';

class HelpBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      qBtn: true,
      clickedQBtn: false
    }
  }

  toggleComponent() {
    this.setState({ qBtn: this.state.clickedQBtn });
    this.setState({ clickedQBtn: this.state.qBtn });
  };

  clickaway() {
    if(this.state.clickedQBtn === true) {
      this.setState({ qBtn: this.state.clickedQBtn });
      this.setState({ clickedQBtn: this.state.qBtn });
    } else {
      console.log("Hello!");
    }
  }

  render() {
    let { qBtn, clickedQBtn } = this.state;
    return (
      <>
        {
          qBtn
          &&
          <button className="qBtn" onClick={()=>this.toggleComponent()}>?</button>
        }
        {
          clickedQBtn
          &&
          <div className="clickedQBtn">
            <button onClick={()=>this.toggleComponent()}>
                <img src={exit} alt="exit icon"></img>
            </button>
            <p>For any help feel free to reach out to <b>hello@diffusionapp.com</b></p>
          </div>
        }
        <div className="clickaway" onClick={()=>this.clickaway()}></div>
      </>
    );
  }
}

export default HelpBtn;
