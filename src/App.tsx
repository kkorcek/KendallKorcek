// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { generateClient } from "aws-amplify/data";
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import './styles/variables.css';
import './styles/global.css';



function App() {


  return (
    <BrowserRouter>
  <div className='app-container'>
    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>

  </div>
</BrowserRouter>
  );
}

export default App;
