import React from 'react';

import {
  Link
} from "react-router-dom";

// CSS
import './Auth.css'

function Signin() {
  return (
    <>
    <div className="screen">
      <div className="auth">
          <Link id="p--back" to="/"><p className="auth__p">back</p></Link>
          <h1>Sign In</h1>
          <form className="auth__form">
              <label className="form__label" for="email">Email</label>
              <input className="form__input" id="email" placeholder="john.smith@example.com" type="email" autocomplete="off"></input>
              <label className="form__label" for="password">Password</label>
              <input className="form__input" id="password" placeholder="8+ characters" type="text" autocomplete="off"></input>
              <button className="authBtn">Sign In</button>
          </form>
          <Link to="/signup"><p className="auth__p">Don't have an account? Sign up here!</p></Link>
      </div>
    </div>
    </>
  );
}

export default Signin;