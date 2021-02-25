import Landing from './pages/landing/Landing';
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import FAQ from './pages/faq/FAQ';
import Write from './pages/write/Write';
import Read from './pages/read/Read';

import Alert from './components/alert/Alert'

import Authentication from './components/Authentication';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import React, {useEffect} from 'react';

import { useSetRecoilState } from 'recoil';
import { deploymentState } from './state/Atoms'


function App() {
  const setDeployment = useSetRecoilState(deploymentState)

  useEffect(() => {
    let ORIGIN = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://diffusion-backend-development.up.railway.app';
    setDeployment(ORIGIN);
    console.log(ORIGIN)
  }, []);

  return (
  <>
  <Alert />
  <div style={{ margin: '0 10% 0 10%' }}>
    <Router>
      <Switch>
        <Authentication component={Landing} path="/" exact />
        <Authentication component={Signup} path="/signup" exact />
        <Authentication component={Signin} path="/signin" exact />
        <Route path="/faq" exact>
          <FAQ></FAQ>
        </Route>
        <Authentication component={Write} path="/write" exact />
        <Authentication component={Read} path="/read" exact />
        <Route>
          <div style={{ textAlign: "center", marginTop: "25%" }}>
            <h1>Error 404</h1>
            <a href="/">home</a>
          </div>
        </Route>
      </Switch>
    </Router>
  </div>
  </>
  );
}

export default App;
