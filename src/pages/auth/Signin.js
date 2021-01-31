import React from 'react';
import {
  Link
} from "react-router-dom";

// CSS
import './Auth.css';

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    console.log(data)

    await fetch('http://localhost:3001/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  }

  render() {
    return (
      <>
      <div className="screen">
        <div className="auth">
          <Link id="p--back" to="/"><p className="auth__p">back</p></Link>
          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit} className="auth__form" noValidate>
              <label className="form__label" htmlFor="username">Email</label>
              <input onChange={this.handleChange} value={this.state.username} name="username" className="form__text" id="email" placeholder="john.smith@example.com" type="email" autoComplete="off" required></input>
              <label className="form__label" htmlFor="password">Password</label>
              <input onChange={this.handleChange} value={this.state.password} name="password" className="form__text" id="password" placeholder="8+ characters" type="password" autoComplete="off" minLength="8" required></input>
              <button className="authBtn">Sign In</button>
          </form>
          <Link to="/signup"><p className="auth__p">Don't have an account? Sign up here!</p></Link>
        </div>
      </div>
      </>
    )
  }
}

export default Signin;
