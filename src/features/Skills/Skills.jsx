import React, { useEffect, useState } from "react";
import PopUp from "../../components/PopUp";

// Skill data with categories, levels, and icons (FontAwesome)
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

// Brand badge color mapping (with dark mode support)
const levelColors = {
  Advanced: "bg-primary-700 dark:bg-primary-100 text-white dark:text-primary-900",
  Intermediate: "bg-primary-500 dark:bg-primary-200 text-white dark:text-primary-900",
  Beginner: "bg-primary-300 dark:bg-primary-300 text-white dark:text-primary-900",
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

  const fadeClass = show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <section id="skills" className="container mx-auto py-8 px-4">
      <h2
        className={`mb-8 text-center text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-100 transition-all duration-1000 ${fadeClass}`}
      >
        Skills
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        {skillCategories.map((cat, idx) => (
          <div
            className={`w-full md:w-1/3 transition-all duration-1000 ${fadeClass}`}
            style={{ transitionDelay: `${0.2 + idx * 0.2}s` }}
            key={cat.category}
          >
            <PopUp className="bg-white dark:bg-primary-900
                shadow-lg dark:shadow-[0_2px_24px_0_rgba(56,189,248,0.14)]
                hover:shadow-xl dark:hover:shadow-[0_4px_32px_0_rgba(56,189,248,0.21)]
                rounded-xl h-full flex flex-col
                transition">
              <div className="p-6">
                <h4 className="text-primary-600 dark:text-primary-200 text-xl font-semibold mb-4 text-center">
                  {cat.category}
                </h4>
                <ul className="space-y-3" role="list">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-primary-50 dark:hover:bg-primary-800 transition"
                      role="listitem"
                    >
                      <span className="flex items-center gap-2 text-neutral-800 dark:text-primary-100">
                        <i className={`${skill.icon} text-lg`} />
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold ${levelColors[skill.level]}`}
                      >
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
      <div
        className={`mt-10 text-center transition-all duration-1000 ${fadeClass}`}
        style={{ transitionDelay: "0.8s" }}
      >
        <h5 className="mb-4 text-primary-600 dark:text-primary-200 text-lg font-semibold">Soft Skills</h5>
        <div className="flex flex-wrap justify-center gap-3 py-3">
          {softSkills.map((skill) => (
            <PopUp key={skill}>
              <span
                className="inline-block bg-primary-500 dark:bg-primary-200 text-white dark:text-primary-900 px-5 py-2 rounded-full font-medium text-sm tracking-wide shadow hover:bg-primary-600 dark:hover:bg-primary-300 transition cursor-pointer"
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
