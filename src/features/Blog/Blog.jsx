import React, { useEffect, useState } from "react";
import PopUp from "../../components/PopUp";

// Example blog posts for Dhruva Pandya
const blogPosts = [
  {
    title: "Building My First React App: Lessons & Surprises",
    date: "June 2025",
    tags: ["React", "Web Development", "Student Life"],
    summary:
      "A candid look at my journey creating a portfolio site with React, including the challenges I faced, the resources I used, and what I’d do differently next time.",
    url: "https://dhruvapandya.com/blog/first-react-app",
  },
  {
    title: "Top 7 Productivity Tools for College Coders",
    date: "May 2025",
    tags: ["Productivity", "Tools", "Student Tips"],
    summary:
      "From VS Code extensions to time management apps, here are the tools that help me stay organized, focused, and efficient as a CS student.",
    url: "https://dhruvapandya.com/blog/productivity-tools",
  },
  {
    title: "Hackathon Hacks: How I Built a Winning Project in 24 Hours",
    date: "April 2025",
    tags: ["Hackathon", "Teamwork", "Tech Projects"],
    summary:
      "My experience at CodeSprint 2025: how our team brainstormed, built, and pitched a full-stack app in a single day—and what you can learn from our process.",
    url: "https://dhruvapandya.com/blog/hackathon-hacks",
  },
];

const Blog = () => {
  // Animation state
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const fadeClass = show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <section id="blog" className="container mx-auto py-8 px-4">
      <h2
        className={`mb-8 text-center text-3xl md:text-4xl font-bold text-blue-700 dark:text-primary-100 transition-all duration-1000 ${fadeClass}`}
      >
        Blog
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className={`w-full md:w-[48%] lg:w-[31%] transition-all duration-1000 ${fadeClass}`}
            style={{ transitionDelay: `${0.2 + idx * 0.2}s` }}
          >
            <PopUp className="bg-white dark:bg-primary-900
                shadow-lg dark:shadow-[0_2px_24px_0_rgba(56,189,248,0.14)]
                hover:shadow-xl dark:hover:shadow-[0_4px_32px_0_rgba(56,189,248,0.21)]
                rounded-xl h-full flex flex-col
                transition">
              <div className="flex flex-col p-6 flex-1">
                <h5 className="text-xl font-semibold mb-2 text-primary-800 dark:text-primary-200">{post.title}</h5>
                <div className="mb-1 text-neutral-500 dark:text-neutral-700 text-sm">{post.date}</div>
                <div className="mb-2 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
            <span
              key={tag}
              className="
                bg-blue-100 dark:bg-primary-800
                text-blue-700 dark:text-primary-100
                border border-blue-100 dark:border-primary-700
                px-2 py-0.5 rounded-full text-xs font-semibold
                shadow-md dark:shadow-[0_2px_8px_0_rgba(56,189,248,0.12)]
                hover:shadow-lg dark:hover:shadow-[0_4px_16px_0_rgba(56,189,248,0.18)]
                transition
                cursor-pointer
              "
            >
              {tag}
            </span>

  ))}
</div>

                <p className="text-neutral-700 dark:text-neutral-900 mb-4">{post.summary}</p>
                <a
  href={post.url}
  className="
    mt-auto inline-block text-lg text-center
    border border-blue-600
    text-blue-600 text-lg
    dark:border-primary-200 dark:text-primary-100
    hover:bg-blue-600 hover:text-white
    dark:hover:bg-primary-800 dark:hover:text-white
    font-semibold px-4 py-2 rounded-lg text-sm transition
  "
  target="_blank"
  rel="noopener noreferrer"
>
  Read More
</a>

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
          href="https://dhruvapandya.com/blog"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white dark:text-primary-900 font-semibold px-6 py-3 rounded-lg text-base transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-blog mr-2"></i>
          See All Posts by Dhruva Pandya
        </a>
      </div>
    </section>
  );
};

export default Blog;
