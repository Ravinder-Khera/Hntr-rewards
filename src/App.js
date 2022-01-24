import './App.css';

import Headerbar from './components/navbar/navbar';
import Home from './components/Home/home'

import React from "react";
import Menu from './components/menu/pools/pools';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


 
  return (

    <Router>
    <div className="App">
       
    {/* ---------------------- navbar ----------------------------------- */}
        <Headerbar /> 

{/* ------------------------------- content  -------------------------------------------- */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
      </Routes>
            
</div>
</Router>
  );
}

export default App;

