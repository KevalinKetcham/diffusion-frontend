import LandingNavbar from './components/navbars/LandingNavbar';
import FAQNavbar from './components/navbars/FAQNavbar';
import AuthorNavbar from './components/navbars/AuthorNavbar';
import ReaderNavbar from './components/navbars/ReaderNavbar';

import './App.css';

function App() {
  return (
    <div style={{ margin: '0 10% 0 10%' }}>
      <LandingNavbar></LandingNavbar>
      <FAQNavbar></FAQNavbar>
      <AuthorNavbar></AuthorNavbar>
      <ReaderNavbar></ReaderNavbar>
    </div>
  );
}

export default App;
