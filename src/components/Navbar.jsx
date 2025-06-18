import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav className="bg-primary-50/80 dark:bg-primary-900/80 backdrop-blur-md border-b border-primary-200 dark:border-primary-700 shadow-sm w-full z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
          <Link
            className="font-bold text-3xl uppercase tracking-widest text-blue-700 dark:text-primary-200"
            to="/"
          >
            MyPortfolio
          </Link>
          <button
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-600"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <svg width="28" height="28" viewBox="0 0 28 28">
              <rect y="6" width="28" height="3" rx="1.5" fill={darkMode ? "rgb(186,230,253)" : "rgb(28,57,101)"} />
              <rect y="13" width="28" height="3" rx="1.5" fill={darkMode ? "rgb(186,230,253)" : "rgb(28,57,101)"} />
              <rect y="20" width="28" height="3" rx="1.5" fill={darkMode ? "rgb(186,230,253)" : "rgb(28,57,101)"} />
            </svg>
          </button>
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center w-auto">
            <ul className="flex flex-row md:space-x-6 items-center">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    className={`block px-3 py-2 rounded-lg font-semibold text-lg tracking-wide transition
                      ${
                        location.pathname === item.to
                          ? "bg-blue-100 text-blue-800 shadow font-bold"
                          : "text-blue-700 hover:bg-blue-50 hover:text-blue-900"
                      }
                      dark:text-primary-200 dark:hover:text-primary-300 dark:bg-transparent dark:hover:bg-primary-800 dark:hover:text-white
                    `}
                    to={item.to}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="md:ml-4">
                <button
                  className="border border-blue-700 dark:border-primary-400 text-blue-700 dark:text-primary-200 hover:bg-blue-700 hover:text-white dark:hover:bg-primary-600 font-semibold px-4 py-2 rounded-lg transition"
                  onClick={() => setDarkMode((prev) => !prev)}
                >
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile menu (in flow, pushes content down) */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-primary-50/80 dark:bg-primary-900/95 shadow-sm w-full ${
            navOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col py-2 px-4 space-y-2">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  className={`block px-3 py-2 rounded-lg font-semibold text-lg tracking-wide transition
                    ${
                      location.pathname === item.to
                        ? "bg-blue-100 text-blue-800 shadow font-bold"
                        : "text-blue-700 hover:bg-blue-50 hover:text-blue-900"
                    }
                    dark:text-primary-200 dark:hover:text-primary-300 dark:bg-transparent dark:hover:bg-primary-800 dark:hover:text-white
                  `}
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="w-full border border-blue-700 dark:border-primary-400 text-blue-700 dark:text-primary-200 hover:bg-blue-700 hover:text-white dark:hover:bg-primary-600 font-semibold px-4 py-2 rounded-lg transition"
                onClick={() => setDarkMode((prev) => !prev)}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
