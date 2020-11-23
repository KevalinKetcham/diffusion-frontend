import LandingNavbar from './components/navbars/LandingNavbar';
import FAQNavbar from './components/navbars/FAQNavbar';
import AuthorNavbar from './components/navbars/AuthorNavbar';
import ReaderNavbar from './components/navbars/ReaderNavbar';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div style={{ margin: '0 10% 0 10%' }}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingNavbar></LandingNavbar>
          </Route>
          <Route path="/faq" exact>
            <FAQNavbar></FAQNavbar>
          </Route>
          <Route path="/write" exact>
            <AuthorNavbar></AuthorNavbar>
          </Route>
          <Route path="/read" exact>
            <ReaderNavbar></ReaderNavbar>
          </Route>
          <Route>
            <div style={{ textAlign: "center", marginTop: "25%" }}>
              <h1>Error 404</h1>
              <p>Page not found :(</p>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
