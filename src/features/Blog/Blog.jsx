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

  const fadeClass = show ? "fade show" : "fade";

  return (
    <section id="blog" className="container py-3">
      <h2 className={`mb-4 text-center ${fadeClass}`} style={{ transition: "opacity 1s" }}>
        Blog
      </h2>
      <div className="row">
        {blogPosts.map((post, idx) => (
          <div
            className={`col-md-6 col-lg-4 mb-4 ${fadeClass}`}
            style={{ transition: `opacity 1s ${0.2 + idx * 0.2}s` }}
            key={idx}
          >
            <PopUp
              className="card h-100 shadow"
              style={{
                background: "var(--bs-card-bg)",
                color: "var(--bs-card-color)",
                boxShadow: "var(--bs-card-shadow)",
              }}
            >
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <div className="mb-2 text-muted small">{post.date}</div>
                <div className="mb-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="badge bg-secondary me-1 mb-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="card-text mb-3">{post.summary}</p>
                <a
                  href={post.url}
                  className="btn btn-outline-primary btn-sm mt-auto"
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
      <div className={`text-center mt-4 ${fadeClass}`} style={{ transition: "opacity 1s 0.8s" }}>
        <a
          href="https://dhruvapandya.com/blog"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-blog me-2"></i>
          See All Posts by Dhruva Pandya
        </a>
      </div>
    </section>
  );
};

export default Blog;
