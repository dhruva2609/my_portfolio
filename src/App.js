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

const NotFound = () => (
  <div className="flex-1 flex flex-col justify-center items-center">
    <h2 className="text-2xl font-bold mb-2">404 - Page Not Found</h2>
    <p className="text-lg text-neutral-600 dark:text-neutral-400">The page you are looking for does not exist.</p>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 dark:from-primary-900 dark:via-primary-800 dark:to-primary-700 transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
