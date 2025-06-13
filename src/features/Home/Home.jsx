import React, { useEffect, useState } from "react";
import PopUp from "../../components/PopUp";
import profileImg from './Dhruva.jpg';

const socialLinks = [
  { icon: "fab fa-github", url: "https://github.com/dhruva2609", label: "GitHub" },
  { icon: "fab fa-linkedin", url: "https://linkedin.com/in/dhruva-pandya-145618287", label: "LinkedIn" },
  { icon: "fas fa-envelope", url: "mailto:pandyadhruva09@gmail.com", label: "Email" },
];

const highlights = [
  { title: "CGPA", value: "9.29/10", icon: "fas fa-graduation-cap" },
  { title: "Hackathons", value: "Winner x2", icon: "fas fa-trophy" },
  { title: "Open Source", value: "Contributor", icon: "fas fa-code-branch" },
  { title: "Certifications", value: "AWS, Google", icon: "fas fa-certificate" },
];

const Home = () => {
  // Animation state
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Helper for fade-in class
  const fadeClass = show ? "fade show" : "fade";

  return (
    <section className="container py-5" style={{ minHeight: "80vh" }}>
      <div className="row align-items-center">
        {/* Profile image and social links */}
        <div className={`col-md-4 text-center mb-4 mb-md-0 ${fadeClass}`} style={{ transition: "opacity 1s" }}>
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-circle shadow"
            style={{
              width: 220,
              height: 220,
              objectFit: "cover",
              border: "6px solid var(--bs-primary)",
              transition: "box-shadow 0.5s, border-color 0.5s"
            }}
          />
          <div className="mt-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm mx-1"
                aria-label={link.label}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        {/* Hero info */}
        <div className={`col-md-8 text-center text-md-start ${fadeClass}`} style={{ transition: "opacity 1s 0.2s" }}>
          <h1 className="display-4 fw-bold mb-1">
            Hi, I'm <span className="text-primary">Dhruva Pandya</span>
          </h1>
          <h2 className="h4 mb-3 text-secondary">
            Second Year B.Tech Student | Front-End Developer | Tech Enthusiast
          </h2>
          <p className="lead mb-4">
            I’m passionate about building impactful web experiences with React, JavaScript, and modern tech.
            <br />
            I love solving problems, contributing to open source, and collaborating on innovative projects.
          </p>
          <a href="/projects" className="btn btn-primary btn-lg me-2">
            View My Work
          </a>
          <a href="/contact" className="btn btn-outline-secondary btn-lg">
            Contact Me
          </a>
        </div>
      </div>
      {/* Highlights */}
      <div className="row mt-5 justify-content-center">
        {highlights.map((item, idx) => (
          <div
            key={item.title}
            className={`col-6 col-md-3 mb-3 fade${show ? " show" : ""}`}
            style={{ transition: `opacity 1s ${0.3 + idx * 0.1}s` }}
          >
            <PopUp
              className="card shadow-sm text-center h-100"
              style={{
                background: "var(--bs-card-bg)",
                boxShadow: "var(--bs-card-shadow)",
              }}
            >
              <div className="card-body">
                <i className={`${item.icon} fa-2x mb-2 text-primary`}></i>
                <h5 className="card-title mb-1">{item.value}</h5>
                <p className="card-text text-muted small">{item.title}</p>
              </div>
            </PopUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
