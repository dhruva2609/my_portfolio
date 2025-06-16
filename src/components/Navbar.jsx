import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-primary-50/80 dark:bg-primary-900/80 backdrop-blur-md border-b border-primary-200 dark:border-primary-700 shadow-sm w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <Link
          className="font-bold text-2xl uppercase tracking-widest text-primary-700 dark:text-primary-200"
          to="/"
        >
          MyPortfolio
        </Link>
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-600"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((prev) => !prev)}
        >
          <svg width="28" height="28" viewBox="0 0 28 28">
            <rect y="6" width="28" height="3" rx="1.5" fill={darkMode ? "rgb(186,230,253)" : "rgb(14,165,233)"} />
            <rect y="13" width="28" height="3" rx="1.5" fill={darkMode ? "rgb(186,230,253)" : "rgb(14,165,233)"} />
            <rect y="20" width="28" height="3" rx="1.5" fill={darkMode ? "rgb(186,230,253)" : "rgb(14,165,233)"} />
          </svg>
        </button>
        <div
          className={`${
            navOpen ? "block" : "hidden"
          } md:flex md:items-center w-full md:w-auto transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 items-center">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/skills", label: "Skills" },
              { to: "/projects", label: "Projects" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  className={`block px-3 py-2 rounded-lg font-semibold text-lg tracking-wide transition
                    ${
                      location.pathname === item.to
                        ? "text-primary-700 dark:text-primary-200 font-bold bg-primary-100 dark:bg-primary-800"
                        : "text-neutral-700 dark:text-primary-200 hover:text-primary-700 dark:hover:text-primary-300"
                    }`}
                  to={item.to}
                  onClick={() => setNavOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 md:mt-0 md:ml-4">
              <button
                className="border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-200 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 font-semibold px-4 py-2 rounded-lg transition"
                onClick={() => setDarkMode((prev) => !prev)}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
