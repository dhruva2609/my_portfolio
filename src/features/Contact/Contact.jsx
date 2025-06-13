import React, { useState, useEffect } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  // Common style for input and textarea fields using Bootstrap CSS variables
  const inputStyle = {
    backgroundColor: "var(--bs-card-bg)",   // Use a defined Bootstrap variable
    color: "var(--bs-card-color)",
    borderColor: "var(--bs-border-color)",
    resize: "vertical",
  };

  // Fade-in class
  const fadeClass = show ? "fade show" : "fade";

  return (
    <section id="contact" className="container py-5">
      <h2 className={`mb-4 ${fadeClass}`} style={{ transition: "opacity 1s" }}>
        Contact
      </h2>
      <form
        className={`card shadow p-4 ${fadeClass}`}
        style={{
          background: "var(--bs-card-bg)",
          color: "var(--bs-card-color)",
          boxShadow: "var(--bs-card-shadow)",
          transition: "opacity 1s 0.2s",
        }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            className="form-control"
            style={inputStyle}
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            style={inputStyle}
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            style={inputStyle}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
