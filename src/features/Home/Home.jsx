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
    <section className="container mx-auto py-10 min-h-[80vh] bg-blue-50 transition-colors duration-300">
      <div className="flex flex-col md:flex-row items-center">
        {/* Profile image and social links */}
        <div className={`w-full md:w-1/3 flex flex-col items-center mb-8 md:mb-0 transition-all duration-1000 ${fadeClass}`}>
          <img
            src={profileImg}
            alt="Profile"
            className="rounded-full shadow border-4 border-blue-500"
            style={{ width: 220, height: 220, objectFit: "cover" }}
          />
          <div className="flex mt-3 space-x-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-blue-200 bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition"
                aria-label={link.label}
              >
                <i className={link.icon + " text-lg"}></i>
              </a>
            ))}
          </div>
        </div>
        {/* Hero info */}
        <div className={`w-full md:w-2/3 text-center md:text-left transition-all duration-1000 delay-200 ${fadeClass}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-1 text-gray-900">
            Hi, I'm <span className="text-blue-600">Dhruva Pandya</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-700 mb-3 font-semibold">
            Second Year B.Tech Student | Front-End Developer | Tech Enthusiast
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            I’m passionate about building impactful web experiences with React, JavaScript, and modern tech.
            <br />
            I love solving problems, contributing to open source, and collaborating on innovative projects.
          </p>
          <a
            href="/projects"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow me-2 transition"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="inline-block border border-gray-400 text-gray-700 bg-white hover:bg-gray-100 font-semibold px-6 py-3 rounded shadow transition"
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
              className="bg-white rounded-xl text-center p-6 h-full shadow-sm border border-gray-200 hover:shadow transition"
            >
              <i className={`${item.icon} text-2xl mb-2 text-blue-600`}></i>
              <h5 className="text-xl font-semibold mb-1 text-gray-900">{item.value}</h5>
              <p className="text-gray-500 text-sm">{item.title}</p>
            </PopUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
