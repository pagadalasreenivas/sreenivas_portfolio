import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/education" element ={<Education/>}/>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
