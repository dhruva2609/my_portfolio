import React, { useEffect, useState } from "react";
import PopUp from "../../components/PopUp";
import MangaReaderImg from './MangaReader.png';
import SahilFoodsImg from './SahilFoods.png';
import FreelanceImg from './FreelanceHub.png';

// Example projects (replace with your real projects!)
const projects = [
  {
    title: "FreelanceHub",
    desc: "A freelancing platform connecting clients and freelancers for projects, collaboration, and secure transactions. Features real-time chat, project management, and role-based access.",
    live: "https://freelancehub-demo.vercel.app/",
    code: "https://github.com/dhruva2609/FreelanceHub",
    img: FreelanceImg,
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    highlights: [
      "Real-time chat",
      "Project bidding and management",
      "Role-based access (admin, client, freelancer)",
      "Event calendar for deadlines",
      "Responsive design"
    ],
  },
  {
    title: "Sahil Foods",
    desc: "A delightful single-page website for a local bakery, showcasing products, menu, and contact information. Built with pure HTML, CSS, and JavaScript for smooth navigation and a delicious visual experience.",
    live: "https://sahilfoods-demo.vercel.app/",
    code: "https://github.com/dhruva2609/SahilFoods",
    img: SahilFoodsImg,
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Single-page smooth scrolling",
      "Product gallery",
      "Contact form",
      "Responsive design",
      "Animated menu sections"
    ],
  },
  {
    title: "Manga Reader",
    desc: "A sleek and fast single-page manga reader website built with React.js. Features smooth page navigation, search, and bookmarking for an immersive reading experience.",
    live: "https://mangareader-demo.vercel.app/",
    code: "https://github.com/yourusername/manga-reader",
    img: MangaReaderImg,
    tech: ["React"],
    highlights: [
      "Instant manga search",
      "Seamless page navigation",
      "Bookmark favorite manga",
      "Responsive design",
      "Dark mode"
    ],
  },
];

const Projects = () => {
  // Animation state
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    const timer = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Helper for fade-in class
  const fadeClass = show ? "fade show" : "fade";

  return (
    <section id="projects" className="container py-3">
      <h2 className={`mb-4 text-center ${fadeClass}`} style={{ transition: "opacity 1s" }}>
        Projects
      </h2>
      <div className="row">
        {projects.map((project, i) => (
          <div
            className={`col-md-6 col-lg-4 mb-4 ${fadeClass}`}
            style={{ transition: `opacity 1s ${0.2 + i * 0.2}s` }}
            key={i}
          >
            <PopUp
              className="card h-100 shadow"
              style={{
                background: "var(--bs-card-bg)",
                color: "var(--bs-card-color)",
                boxShadow: "var(--bs-card-shadow)",
              }}
            >
              {project.img && (
                <img
                  src={project.img}
                  alt={project.title}
                  className="card-img-top"
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "contain",
                    background: "#f8f9fa",
                    display: "block",
                  }}
                />
              )}

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.desc}</p>
                <div className="mb-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="badge bg-primary me-1 mb-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="list-unstyled mb-3">
                  {project.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="small"
                      style={{ color: "var(--bs-success)" }}
                    >
                      <i className="fas fa-check-circle me-1"></i>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href={project.live}
                    className="btn btn-primary btn-sm me-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="btn btn-outline-secondary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </PopUp>
          </div>
        ))}
      </div>
      <div className={`text-center mt-4 ${fadeClass}`} style={{ transition: "opacity 1s 0.8s" }}>
        <a
          href="https://github.com/yourusername"
          className="btn btn-outline-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github me-2"></i>
          See More on GitHub
        </a>
      </div>
    </section>
  );
};

export default Projects;
