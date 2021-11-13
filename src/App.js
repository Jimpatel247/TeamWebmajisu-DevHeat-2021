
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';

import React, { useState } from 'react';



function App() {
    const [mode,setMode] = useState('light');

    const toggleMode=()=>{
      if(mode==='light')
      {
        setMode('dark');
        document.body.style.background='#0c403d';
      }
      else{
        setMode('light');
        document.body.style.background='white';
      }
    }
  return (
  <>
   
<Navbar title ="Study Easy"  aboutus="About us " mode={mode} toggleMode= {toggleMode}/>
<div className="container  my-2" >

{/* <About/> */}
</div>
  </>
  );
}

export default App;
