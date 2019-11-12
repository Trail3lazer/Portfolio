import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './App.css';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Portfolio from './Components/pages/Portfolio'
import Nav from './Components/Global/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/about'><About/></Route>
          <Route path='/portfolio'><Portfolio/></Route>
          <Route exact path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
