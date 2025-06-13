import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Skills from "./features/Skills/Skills";
import Projects from "./features/Projects/Projects";
import Blog from "./features/Blog/Blog";
import Contact from "./features/Contact/Contact";

// Optional: NotFound component for unmatched routes
const NotFound = () => (
  <div className="container py-5 text-center">
    <h2>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Set the theme attribute on <body> when darkMode changes
  useEffect(() => {
  document.body.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
}, [darkMode]);

  return (
    <Router>
      <div
        style={{
          background: "var(--bs-body-bg)",
          color: "var(--bs-body-color)",
        }}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* Optional: 404 Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
