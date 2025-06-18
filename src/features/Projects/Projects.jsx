import React, { useEffect, useState } from "react";
import PopUp from "../../components/PopUp";
import MangaReaderImg from './MangaReader.png';
import SahilFoodsImg from './SahilFoods.png';
import FreelanceImg from './FreelanceHub.png';

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
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const fadeClass = show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <section id="projects" className="container mx-auto py-8 px-4">
      <h2
        className={`mb-8 text-center text-3xl md:text-4xl font-bold text-blue-700 dark:text-primary-100 transition-all duration-1000 ${fadeClass}`}
      >
        Projects
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`w-full md:w-[48%] lg:w-[31%] transition-all duration-1000 ${fadeClass}`}
            style={{ transitionDelay: `${0.2 + i * 0.2}s` }}
          >
            <PopUp
              className="
                bg-white dark:bg-primary-900
                shadow-lg dark:shadow-[0_2px_24px_0_rgba(56,189,248,0.14)]
                hover:shadow-xl dark:hover:shadow-[0_4px_32px_0_rgba(56,189,248,0.21)]
                rounded-xl h-full flex flex-col
                transition
              "
            > 
            {project.img && (
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-t-xl w-full h-48 object-contain bg-neutral-50 dark:bg-primary-800"
                />
              )}
              <div className="flex flex-col p-6 flex-1">
                <h5 className="text-xl font-semibold mb-2 text-primary-800 dark:text-primary-200">{project.title}</h5>
                <p className="text-neutral-700 dark:text-neutral-900 mb-3">{project.desc}</p>
                <div className="mb-2 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
  key={tech}
  className="
    bg-blue-100 dark:bg-primary-800
    text-blue-700 dark:text-primary-100 border border-blue-900
    px-2 py-0.5 rounded-full text-xs font-semibold
    shadow-md dark:shadow-[0_2px_8px_0_rgba(56,189,248,0.12)]
    hover:shadow-lg dark:hover:shadow-[0_4px_16px_0_rgba(56,189,248,0.18)]
    transition
    cursor-pointer
  "
>
  {tech}
</span>

                  ))}
                </div>
                <ul className="mb-3 space-y-1">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="text-green-600 dark:text-green-400 text-sm flex items-center">
                      <i className="fas fa-check-circle mr-2"></i>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-2">
                  <a
                    href={project.live}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white dark:text-primary-900 font-semibold px-4 py-2 rounded-lg text-sm transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="border border-primary-600
                    text-primary-600
                    dark:border-primary-200
                    dark:text-primary-100
                    dark:hover:text-white
                    font-semibold px-4 py-2 rounded-lg text-sm transition"
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
      <div
  className={`text-center mt-8 transition-all duration-1000 ${fadeClass}`}
  style={{ transitionDelay: "0.8s" }}
>
  <a
    href="https://github.com/yourusername"
    className="
      inline-flex items-center
      border border-black
      text-black
      hover:bg-neutral-100
      dark:border-white
      dark:text-white
      dark:hover:bg-primary-800
      font-semibold px-6 py-3 rounded-lg text-base transition
    "
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fab fa-github mr-2"></i>
    See More on GitHub
  </a>
</div>

    </section>
  );
};

export default Projects;
