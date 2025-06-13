import React from "react";

const socialLinks = [
  { href: "https://github.com/dhruva2609", icon: "fab fa-github", label: "GitHub" },
  { href: "https://linkedin.com/in/dhruva-pandya-145618287", icon: "fab fa-linkedin", label: "LinkedIn" },
  { href: "mailto:pandyadhruva09@gmail.com", icon: "fas fa-envelope", label: "Email" },
];

const Footer = () => (
  <footer
    className="text-center py-4 mt-5 border-top"
    style={{
      background: "var(--bs-card-bg)",
      color: "var(--bs-card-color)",
      fontSize: "1.08rem",
      letterSpacing: "0.2px",
    }}
  >
    <div className="mb-2 d-flex justify-content-center gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-decoration-none"
          style={{
            color: "var(--bs-primary)",
            fontSize: "1.3rem",
            transition: "color 0.18s",
          }}
          onMouseOver={e => (e.currentTarget.style.color = "var(--bs-secondary)")}
          onMouseOut={e => (e.currentTarget.style.color = "var(--bs-primary)")}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
    <div style={{ opacity: 0.85 }}>
      &copy; {new Date().getFullYear()} <span className="fw-bold">Dhruva Pandya</span> &mdash; All rights reserved.
    </div>
    <div className="mt-1 small text-muted">
      Made with <span style={{ color: "#f44336" }}>♥</span> using React
    </div>
  </footer>
);

export default Footer;
