import React from 'react';
import {
  Link
} from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
// CSS
import './Auth.css';

import { useSetRecoilState } from 'recoil';
import { alertState } from '../../state/Atoms';

const Signin = () => {
  const setAlert = useSetRecoilState(alertState);

  let ORIGIN = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://diffusion-backend-development.up.railway.app';

  document.title = 'Signin | Diffusion'

  return (
  <>
    <div className="screen">
      <div className="auth">
      <Link id="p--back" to="/"><p className="auth__p">back</p></Link>
      <h1>Sign In</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={yup.object({
          email: yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: yup.string()
            .required('Required')
        })}
        onSubmit={(values) => {
          fetch(`${ORIGIN}/auth/signin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
          })
          .then(response => response.json())
          .then(data => {
            if(data.auth === true) {
              document.cookie = `session=${data.session}`
              window.location.reload()
            } else {
              setAlert({ display: true, message: data.err });
            }
          })
        }}
      >
        <Form className="auth__form">
          <label className="form__label" htmlFor="email">Email</label>
          <Field className="form__text" id="email" name="email" type="text" placeholder="Email" />
          <ErrorMessage name="email">{msg => <div className="inputError">{msg}</div>}</ErrorMessage>

          <label className="form__label" htmlFor="password">Password</label>
          <Field className="form__text" id="password" name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password">{msg => <div className="inputError">{msg}</div>}</ErrorMessage>

          <button className="authBtn" type="submit">Sign In</button>
        </Form>
      </Formik>

      <Link to="/signup"><p className="auth__p">Don't have an account? Sign up here!</p></Link>
      </div>
    </div>
  </>
  )
}

export default Signin;
