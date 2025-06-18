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
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const fadeClass = show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <section className="container mx-auto py-10 min-h-[80vh] bg-gray-50 dark:bg-gradient-to-br dark:from-primary-900 dark:via-primary-800 dark:to-primary-700 transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center">
        {/* Profile image and social links */}
        <div className={`w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0 transition-all duration-1000 ${fadeClass}`}>
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-full shadow-lg border-4 border-blue-400 dark:border-primary-600"
            style={{ width: 220, height: 220, objectFit: "cover" }}
          />
          <div className="flex mt-4 space-x-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-primary-400 dark:hover:text-primary-200 p-2 rounded-full border border-blue-100 dark:border-primary-700 hover:bg-blue-50 dark:hover:bg-primary-800 transition"
                aria-label={link.label}
              >
                <i className={link.icon + " text-xl"}></i>
              </a>
            ))}
          </div>
        </div>
        {/* Hero info */}
        <div className={`w-full md:w-2/3 text-center md:text-left transition-all duration-1000 delay-200 ${fadeClass}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-primary-500 dark:text-primary-200">
            Hi, I'm <span className="text-blue-600 dark:text-primary-600">Dhruva Pandya</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-primary-600 dark:text-primary-200 mb-4">
            Second Year B.Tech Student | Front-End Developer | Tech Enthusiast
          </h2>
          <p className="text-lg font-light text-neutral-600 dark:text-primary-200 mb-6">
            I’m passionate about building impactful web experiences with React, JavaScript, and modern tech.
            <br />
            I love solving problems, contributing to open source, and collaborating on innovative projects.
          </p>
          <a
            href="/projects"
            className="text-lg inline-block bg-blue-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white dark:text-primary-900 font-semibold px-6 py-3 mr-3 rounded-lg text-base transition "
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="text-lg inline-block border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-primary-800 dark:border-primary-400 dark:text-primary-200 font-semibold px-6 py-3 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      {/* Highlights */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {highlights.map((item, idx) => (
          <div
            key={item.title}
            className={`w-1/2 md:w-1/4 transition-all duration-1000 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${0.3 + idx * 0.1}s` }}
          >
            <PopUp
              className="
                bg-white dark:bg-primary-900
                rounded-xl text-center p-6 h-full
                shadow-lg dark:shadow-[0_2px_24px_0_rgba(56,189,248,0.15)] border border-blue-100 dark:border-primary-700
                hover:shadow-xl dark:hover:shadow-[0_4px_32px_0_rgba(56,189,248,0.25)]
                transition
              "
            >
              <i className={`${item.icon} text-3xl mb-2 text-blue-500 dark:text-primary-400`}></i>
              <h5 className="text-xl font-semibold mb-1 text-primary-500 dark:text-primary-200">{item.value}</h5>
              <p className="text-primary-500 dark:text-primary-400 text-sm">{item.title}</p>
            </PopUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
