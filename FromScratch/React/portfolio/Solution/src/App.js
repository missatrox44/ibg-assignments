import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import "./App.css";

import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul className="navbar">
              <li>
                <Link to="/">About Me</Link>
              </li>
              <li>
                <Link to="experience">Experience</Link>
              </li>
              <li>
                <Link to="education">Education</Link>
              </li>
              <li>
                <Link to="skills">Skills</Link>
              </li>
              <li>
                <Link to="projects">Projects</Link>
              </li>
              <li>
                <Link to="contact">Contact Me</Link>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
