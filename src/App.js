import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div>
      <Nav />
      <Route exact path="/">
        <Index />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
