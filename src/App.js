import React from 'react'
import './App.css';
import Home from './components/pages/Home'
import WFHPage from './components/pages/WFHPage'
import MissionPage from './components/pages/MissionPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar  />
        <div className = "pseudo-nav"></div>
        <Switch >
          <Route path='/' exact component={Home} />
          <Route path='/wfhpage' exact component={WFHPage} />
          <Route path='/mission' exact component={MissionPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
