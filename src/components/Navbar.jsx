import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm mb-4"
      style={{
        background: darkMode ? "var(--bs-nav-bg)" : "#fff",
        zIndex: 1050,
        transition: "background 0.3s",
      }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold fs-2 text-primary text-uppercase" to="/">
          MyPortfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((prev) => !prev)}
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            padding: 8,
            borderRadius: 8,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28">
            <rect y="6" width="28" height="3" rx="1.5" fill={darkMode ? "#fff" : "#1c3965"} />
            <rect y="13" width="28" height="3" rx="1.5" fill={darkMode ? "#fff" : "#1c3965"} />
            <rect y="20" width="28" height="3" rx="1.5" fill={darkMode ? "#fff" : "#1c3965"} />
          </svg>
        </button>

        <div className={`collapse navbar-collapse${navOpen ? " show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/skills", label: "Skills" },
              { to: "/projects", label: "Projects" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <Link
                  className={
                    "nav-link fw-semibold fs-5" +
                    (location.pathname === item.to
                      ? " active text-primary "
                      : darkMode
                      ? " text-light"
                      : " text-dark")
                  }
                  to={item.to}
                  style={{
                    fontWeight: location.pathname === item.to ? "bold" : "normal",
                    letterSpacing: "1px",
                  }}
                  onClick={() => setNavOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="btn btn-outline-primary ms-3 fw-semibold px-4 py-2 mt-3 mt-lg-0"
            onClick={() => setDarkMode((prev) => !prev)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
