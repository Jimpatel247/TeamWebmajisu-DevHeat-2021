
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
import Csesemi from './components/Csesemi';
import Csesem2 from './components/cse/Csesem2';
import Csesem3 from './components/cse/Csesem3';
import Csesem4 from './components/cse/Csesem4';
import Csesem6 from './components/cse/Csesem6';
import Csesem7 from './components/cse/Csesem7';
import Csesem5 from './components/cse/Csesem5';
import Csesem8 from './components/cse/Csesem8';
import Ecesem1 from './components/ece/Ecesem1';
import Ecesem2 from './components/ece/Ecesem2';
import Ecesem4 from './components/ece/Ecesem4';
import Ecesem8 from './components/ece/Ecesem8';
import Ecesem7 from './components/ece/Ecesem7';
import Ecesem6 from './components/ece/Ecesem6';
import Ecesem3 from './components/ece/Ecesem3';
import Ecesem5 from './components/ece/Ecesem5';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#0c403d';
    }
    else if (mode==='dark') {
      setMode('light');
      document.body.style.background = '#bac1cf';
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
           
            <Route exact path="/csese" component={Csesemi}/>
            <Route exact path="/cse2" component={Csesem2}/>
            <Route exact path="/cse3" component={Csesem3}/> 
            <Route exact path="/cse4" component={Csesem4}/>
            <Route exact path="/cse5" component={Csesem5}/>
            <Route exact path="/cse6" component={Csesem6}/>
            <Route exact path="/cse7" component={Csesem7}/>
            <Route exact path="/cse8" component={Csesem8}/>

            <Route exact path="/ece1" component={Ecesem1}/>
            <Route exact path="/ece2" component={Ecesem2}/>
            <Route exact path="/ece3" component={Ecesem3}/>
            <Route exact path="/ece4" component={Ecesem4}/>
            <Route exact path="/ece5" component={Ecesem5}/>
            <Route exact path="/ece6" component={Ecesem6}/>
            <Route exact path="/ece7" component={Ecesem7}/>
            <Route exact path="/ece8" component={Ecesem8}/>
          </Switch>
          

        </div>
        <Footer/>
      </Router>
     
    </>
  );
}

export default App;
