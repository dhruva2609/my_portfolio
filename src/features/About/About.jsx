import React, { useEffect, useState } from "react";
import PopUp from "../../components/PopUp";

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeClass = show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <section id="about" className="container mx-auto py-10 px-4">
      <h2
        className={`mb-8 text-center text-3xl md:text-4xl font-bold text-blue-700 dark:text-primary-100 transition-all duration-1000 ${fadeClass}`}
      >
        About Me
      </h2>
      <PopUp
        className={`
          bg-white dark:bg-primary-900
          shadow-lg dark:shadow-[0_2px_24px_0_rgba(56,189,248,0.15)]
          hover:shadow-xl dark:hover:shadow-[0_4px_32px_0_rgba(56,189,248,0.23)]
          rounded-xl p-8 max-w-4xl mx-auto
          border border-gray-200 dark:border-primary-800
          transition-all duration-1000
          ${fadeClass}
        `}
        scale={1.02}
        style={{ transitionDelay: "0.2s" }}
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Personal Summary */}
          <div className={`w-full md:w-1/2 transition-all duration-1000 ${fadeClass}`} style={{ transitionDelay: "0.4s" }}>
            <h3 className="mb-3 text-blue-600 dark:text-primary-200 text-xl font-semibold">Who I Am</h3>
            <p className="text-lg text-gray-700 dark:text-neutral-900 mb-4">
              I'm a passionate second-year B.Tech student specializing in front-end development, 
              with strong expertise in React and modern web technologies. I focus on creating 
              intuitive, responsive user experiences that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-neutral-800">
              When I'm not coding, you'll find me contributing to open-source projects, 
              experimenting with new tools, or participating in hackathons.
            </p>
          </div>

          {/* Right Column: Education & Skills */}
          <div className={`w-full md:w-1/2 transition-all duration-1000 ${fadeClass}`} style={{ transitionDelay: "0.6s" }}>
            <h3 className="mb-3 text-blue-600 dark:text-primary-200 text-xl font-semibold">Education</h3>
            <ul className="mb-4">
              <li className="mb-4 pb-2 border-b border-gray-200 dark:border-neutral-700">
                <h5 className="font-semibold text-gray-800 dark:text-neutral-900">B.Tech Computer Science</h5>
                <div className="text-sm text-gray-500 dark:text-neutral-700">
                  Birla Vishvakarma Mahavidhyalaya<br />
                  2023 - 2027 | CGPA: 9.29/10
                </div>
              </li>
              <li>
                <h5 className="font-semibold text-gray-800 dark:text-neutral-900">Higher Secondary School</h5>
                <div className="text-sm text-gray-500 dark:text-neutral-700">
                  RPTP Higher Secondary Science School<br />
                  Graduated 2022
                </div>
              </li>
            </ul>

            <h3 className="mb-3 text-blue-600 dark:text-primary-200 text-xl font-semibold">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React", "JavaScript (ES6+)", "HTML5 & CSS3",
                "Bootstrap 5", "Git & GitHub", "Node.js",
                "REST APIs", "TypeScript", "Redux", "Sass/SCSS"
              ].map((skill) => (
                <span
                  key={skill}
                  className="
                    bg-blue-100 dark:bg-primary-800
                    text-blue-700 dark:text-primary-100
                    px-3 py-2 rounded-full text-sm font-semibold
                    shadow-md dark:shadow-[0_2px_8px_0_rgba(56,189,248,0.12)]
                    hover:shadow-lg dark:hover:shadow-[0_4px_16px_0_rgba(56,189,248,0.18)]
                    transition
                    cursor-pointer
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Quote */}
        <div className={`mt-8 pt-4 text-center transition-all duration-1000 ${fadeClass}`} style={{ transitionDelay: "0.8s" }}>
          <blockquote className="italic text-gray-500 dark:text-neutral-700">
            <p className="mb-2">“Strive not to be a success, but rather to be of value.”</p>
            <footer className="text-sm text-gray-400 dark:text-neutral-600">Albert Einstein</footer>
          </blockquote>
        </div>
      </PopUp>
    </section>
  );
};

export default About;
