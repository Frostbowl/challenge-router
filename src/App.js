import React from "react";
import {Routes, Route} from "react-router-dom";
import Nav from './pages/Nav';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Time from "./pages/Time";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/time" element={<Time/>}/>
      </Routes>
    </div>
  );
}

export default App;
