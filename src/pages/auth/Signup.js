import { render } from '@testing-library/react';
import React from 'react';

import {
  Link
} from "react-router-dom";

// CSS
import './Auth.css'

class Signup extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('localhost:3001/signup', {
      method: 'POST',
      body: data
    })
  }

  render() {
    return (
      <>
      <div className="screen">
        <div className="auth">
          <Link id="p--back" to="/"><p className="auth__p">back</p></Link>
          <h1>Sign Up</h1>
          <form onSumbit={this.handleSubmit} className="auth__form" noValidate>
              <label className="form__label" for="username">Email</label>
              <input name="username" className="form__text" id="email" placeholder="john.smith@example.com" type="email" autocomplete="off" required></input>
              <label className="form__label" for="password">Password</label>
              <input name="password" className="form__text" id="password" placeholder="8+ characters" type="text" autocomplete="off" required></input>
              <button className="authBtn">Sign Up</button>
          </form>
          <Link to="/signin"><p className="auth__p">Already have an account? Sign in here!</p></Link>
        </div>
      </div>
      </>
    )
  }
}

export default Signup;
