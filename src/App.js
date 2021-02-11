import Landing from './pages/landing/Landing';
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import FAQ from './pages/faq/FAQ';
import Write from './pages/write/Write';
import Read from './pages/read/Read';

import ProtectedRoute from './components/ProtectedRoute';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <div style={{ margin: '0 10% 0 10%' }}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing></Landing>
          </Route>
          <Route path="/signup" exact>
            <Signup></Signup>
          </Route>
          <Route path="/signin" exact>
            <Signin></Signin>
          </Route>
          <Route path="/faq" exact>
            <FAQ></FAQ>
          </Route>
          <ProtectedRoute path="/write" component={Write} exact></ProtectedRoute>
          <ProtectedRoute path="/read" component={Read} exact></ProtectedRoute>
          <Route>
            <div style={{ textAlign: "center", marginTop: "25%" }}>
              <h1>Error 404</h1>
              <p>Page not found --> <a href="/">home</a></p>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
