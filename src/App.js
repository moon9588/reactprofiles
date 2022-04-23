// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/Navbar.js';
import Mamona from './components/Mamona';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavBar/>
      <br></br>
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/Mamona' component={Mamona} />
      </Switch>
      <br></br>
      <Footer/>
      </Router>
  );
}

export default App;
