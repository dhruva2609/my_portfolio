import React, { useEffect, useState } from "react";
import PopUp from "../../components/PopUp";

// Example skill data with categories, levels, and icons (FontAwesome)
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Advanced", icon: "fab fa-react" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "fab fa-js-square" },
      { name: "HTML5", level: "Advanced", icon: "fab fa-html5" },
      { name: "CSS3", level: "Advanced", icon: "fab fa-css3-alt" },
      { name: "Bootstrap 5", level: "Advanced", icon: "fab fa-bootstrap" },
    ],
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: "fab fa-node-js" },
      { name: "Express.js", level: "Intermediate", icon: "fas fa-server" },
      { name: "MongoDB", level: "Intermediate", icon: "fas fa-database" },
      { name: "Git & GitHub", level: "Advanced", icon: "fab fa-git-alt" },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "TypeScript", level: "Intermediate", icon: "fas fa-code" },
      { name: "Redux", level: "Intermediate", icon: "fas fa-exchange-alt" },
      { name: "Sass/SCSS", level: "Intermediate", icon: "fab fa-sass" },
      { name: "REST APIs", level: "Intermediate", icon: "fas fa-plug" },
    ],
  },
];

const levelColors = {
  Advanced: "success",
  Intermediate: "primary",
  Beginner: "secondary",
};

const softSkills = [
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Leadership",
  "Time Management",
  "Adaptability",
];

const Skills = () => {
  // Animation state for fade-in
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const fadeClass = show ? "fade show" : "fade";

  return (
    <section id="skills" className="container py-3">
      <h2 className={`mb-4 text-center ${fadeClass}`} style={{ transition: "opacity 1s" }}>
        Skills
      </h2>
      <div className="row">
        {skillCategories.map((cat, idx) => (
          <div
            className={`col-md-4 mb-4 ${fadeClass}`}
            style={{ transition: `opacity 1s ${0.2 + idx * 0.2}s` }}
            key={cat.category}
          >
            <PopUp
              className="card shadow h-100"
              style={{
                background: "var(--bs-card-bg)",
                color: "var(--bs-card-color)",
                boxShadow: "var(--bs-card-shadow)",
              }}
            >
              <div className="card-body">
                <h4 className="card-title text-primary mb-3 text-center">
                  {cat.category}
                </h4>
                <ul className="list-group list-group-flush" role="list">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="list-group-item d-flex align-items-center justify-content-between"
                      style={{
                        background: "var(--bs-card-bg)",
                        color: "var(--bs-card-color)",
                      }}
                      role="listitem"
                    >
                      <span>
                        <i className={`${skill.icon} me-2`} style={{ fontSize: "1.2rem" }}></i>
                        {skill.name}
                      </span>
                      <span className={`badge bg-${levelColors[skill.level]} text-white`}>
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </PopUp>
          </div>
        ))}
      </div>
      {/* Soft skills */}
      <div className={`mt-5 text-center ${fadeClass}`} style={{ transition: "opacity 1s 0.8s" }}>
        <h5 className="mb-3 text-secondary">Soft Skills</h5>
        <div className="d-flex flex-wrap justify-content-center gap-3 py-3">
          {softSkills.map((skill) => (
            <PopUp key={skill} scale={1.08} style={{ display: "inline-block" }}>
              <span
                className="badge rounded-pill bg-primary text-white px-4 py-2 fs-6"
                style={{
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                  cursor: "pointer",
                }}
              >
                {skill}
              </span>
            </PopUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
