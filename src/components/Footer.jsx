import React from "react";

const socialLinks = [
  { href: "https://github.com/dhruva2609", icon: "fab fa-github", label: "GitHub" },
  { href: "https://linkedin.com/in/dhruva-pandya-145618287", icon: "fab fa-linkedin", label: "LinkedIn" },
  { href: "mailto:pandyadhruva09@gmail.com", icon: "fas fa-envelope", label: "Email" },
];

const Footer = () => (
  <footer className="
    bg-primary-50/80 dark:bg-primary-900/80
    border-t border-primary-200 dark:border-primary-700
    text-center py-6
    text-neutral-700 dark:text-primary-200
    text-base tracking-wide
    transition-colors duration-300
  ">
    <div className="mb-2 flex justify-center gap-5">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="
            text-primary-600 hover:text-accent-500
            dark:text-primary-100 dark:hover:text-accent-400
            transition-colors duration-200 text-xl
          "
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
    <div className="opacity-85">
      &copy; {new Date().getFullYear()} <span className="font-bold">Dhruva Pandya</span> &mdash; All rights reserved.
    </div>
    <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
      Made with <span className="text-red-500">♥</span> using React
    </div>
  </footer>
);

export default Footer;
