
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Footer from './components/Footer';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#0c403d';
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Study Easy" aboutus="About us " mode={mode} toggleMode={toggleMode} />
        <div className="container  my-2" >
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            
          </Switch>
          

        </div>
        
      </Router>
      <Footer/>
    </>
  );
}

export default App;
