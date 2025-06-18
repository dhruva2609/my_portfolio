import React, { useState, useEffect } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(""); // For feedback messages
  const [loading, setLoading] = useState(false); // For submit button state

  useEffect(() => {
    // Trigger fade-in after mount
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
    setLoading(false);
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
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
        {status && (
          <div className="mt-3 alert alert-info" role="alert">
            {status}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
