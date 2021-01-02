import React from 'react'
import './App.css';
import Home from './components/pages/Home'
import WFHPage from './components/pages/WFHPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/wfhpage' exact component={WFHPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
