import React from 'react';

import {
  Link
} from "react-router-dom";

// CSS
import './Auth.css'

function Signup() {
  return (
    <>
    <div className="screen">
      <div className="auth">
        <Link id="p--back" to="/"><p className="auth__p">back</p></Link>
        <h1>Sign Up</h1>
        <form className="auth__form">
            <label className="form__label" for="username">Username</label>
            <input className="form__input" id="username" placeholder="speedygoose214" type="text" autocomplete="off"></input>
            <label className="form__label" for="email">Email</label>
            <input className="form__input" id="email" placeholder="john.smith@example.com" type="text" autocomplete="off"></input>
            <label className="form__label" for="password">Password</label>
            <input className="form__input" id="password" placeholder="8+ characters" type="text" autocomplete="off"></input>
            <button className="authBtn">Sign Up</button>
        </form>
        <Link to="/signin"><p className="auth__p">Already have an account? Sign in here!</p></Link>
      </div>
    </div>
    </>
  );
}

export default Signup;
