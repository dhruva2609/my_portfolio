import React, { useEffect, useState } from "react";
import PopUp from "../../components/PopUp";


const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeClass = show ? "fade show" : "fade";

  return (
    <section id="about" className="container py-3">
      <h2 className={`mb-4 text-center ${fadeClass}`} style={{ transition: "opacity 1s" }}>
        About Me
      </h2>
      <PopUp
        className={`card shadow p-4 ${fadeClass}`}
        scale={1.02}
        style={{
          background: "var(--bs-card-bg)",
          color: "var(--bs-card-color)",
          maxWidth: 900,
          margin: "0 auto",
          transition: "transform 0.2s, box-shadow 0.2s, opacity 1s 0.2s",
          boxShadow: "var(--bs-card-shadow)",
        }}
      >
        <div className="row g-4">
          {/* Left Column: Personal Summary */}
          <div className={`col-md-6 ${fadeClass}`} style={{ transition: "opacity 1s 0.4s" }}>
            <h3 className="mb-3 text-primary">Who I Am</h3>
            <p className="lead mb-4">
              I'm a passionate second-year B.Tech student specializing in front-end development, 
              with strong expertise in React and modern web technologies. I focus on creating 
              intuitive, responsive user experiences that solve real-world problems.
            </p>
            <p className="mb-0">
              When I'm not coding, you'll find me contributing to open-source projects, 
              experimenting with new tools, or participating in hackathons.
            </p>
          </div>

          {/* Right Column: Education & Skills */}
          <div className={`col-md-6 ${fadeClass}`} style={{ transition: "opacity 1s 0.6s" }}>
            <h3 className="mb-3 text-primary">Education</h3>
            <ul className="list-unstyled mb-4">
              <li className="mb-3 pb-2 border-bottom border-secondary-subtle">
                <h5 className="mb-1">B.Tech Computer Science</h5>
                <div className="small" style={{ color: "var(--bs-secondary)" }}>
                  Birla Vishvakarma Mahavidhyalaya<br />
                  2023 - 2027 | CGPA: 9.29/10
                </div>
              </li>
              <li>
                <h5 className="mb-1">Higher Secondary School</h5>
                <div className="small" style={{ color: "var(--bs-secondary)" }}>
                  RPTP Higher Secondary Science School<br />
                  Graduated 2022
                </div>
              </li>
            </ul>

            <h3 className="mb-3 text-primary">Technical Skills</h3>
            <div className="d-flex flex-wrap gap-2">
              {[
                "React", "JavaScript (ES6+)", "HTML5 & CSS3",
                "Bootstrap 5", "Git & GitHub", "Node.js",
                "REST APIs", "TypeScript", "Redux", "Sass/SCSS"
              ].map((skill) => (
                <div
                  key={skill}
                  scale={1.08}
                  style={{ display: "inline-block" }}
                >
                  <span className="btn btn-primary rounded-pill px-3 py-2" style={{ fontSize: "0.9rem" }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Quote */}
        <div className={`mt-4 pt-3 text-center ${fadeClass}`} style={{ transition: "opacity 1s 0.8s" }}>
          <blockquote className="blockquote mb-0 fst-italic" style={{ color: "var(--bs-secondary)" }}>
            <p className="mb-0">“Strive not to be a success, but rather to be of value.”</p>
            <footer className="blockquote-footer mt-2" style={{ color: "var(--bs-secondary)" }}>Albert Einstein</footer>
          </blockquote>
        </div>
      </PopUp>
    </section>
  );
};

export default About;
