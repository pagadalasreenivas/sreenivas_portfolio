import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Resume from "./Components/Resume";
import NavBar from "./Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";


export function App() {
  return (
    <div style={{ 
      backgroundColor:"black" 
    }}>
    <Router>
        <NavBar />
        <Home/>
    </Router>
    </div>
  );
}

export default App;
