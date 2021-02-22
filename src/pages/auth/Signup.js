import React from 'react';
import {
  Link
} from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
// CSS
import './Auth.css';

const Signup = () => {
  document.title = 'Signup | Diffusion'

  return (
  <>
    <div className="screen">
      <div className="auth">
      <Link id="p--back" to="/"><p className="auth__p">back</p></Link>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={yup.object({
          email: yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: yup.string()
            .min(8, 'Must be 8+ characters')
            .required('Required')
        })}
        onSubmit={(values) => {
          fetch('https://diffusionapp.com/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
          })
          .then(response => response.json())
          .then(data => {
            if(data.status === 200) {
              window.location = 'https://diffusionapp.com/signin';
            } else {
              console.log('Response error!')
            }
          })
        }}
      >
        <Form className="auth__form">
          <label className="form__label" htmlFor="email">Email</label>
          <Field className="form__text" id="email" name="email" type="text" placeholder="Email" />
          <ErrorMessage name="email">{msg => <div className="inputError">{msg}</div>}</ErrorMessage>


          <label className="form__label" htmlFor="password">Password</label>
          <Field className="form__text" id="password" name="password" type="password" placeholder="8+ characters" />
          <ErrorMessage name="password">{msg => <div className="inputError">{msg}</div>}</ErrorMessage>

          <button className="authBtn" type="submit">Sign Up</button>
        </Form>
      </Formik>

      <Link to="/signin"><p className="auth__p">Already have an account? Sign in here!</p></Link>
      </div>
    </div>
  </>
  )
}

export default Signup;
