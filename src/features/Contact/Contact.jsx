import React, { useState, useEffect } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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

  const fadeClass = show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";

  return (
    <section id="contact" className="container mx-auto py-10 px-4 max-w-xl">
      <h2
        className={`mb-6 text-3xl font-bold text-primary-700 dark:text-primary-100 text-center transition-all duration-1000 ${fadeClass}`}
      >
        Contact
      </h2>
      <form
        className={`bg-white dark:bg-primary-900 shadow-lg rounded-xl p-6 transition-all duration-1000 ${fadeClass}`}
        style={{ transitionDelay: "0.2s" }}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-neutral-700 dark:text-primary-100">
            Name
          </label>
          <input
            name="name"
            className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-primary-700 bg-neutral-50 dark:bg-primary-800 text-neutral-900 dark:text-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-500 transition"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-neutral-700 dark:text-primary-100">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-primary-700 bg-neutral-50 dark:bg-primary-800 text-neutral-900 dark:text-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-500 transition"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-neutral-700 dark:text-primary-100">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-primary-700 bg-neutral-50 dark:bg-primary-800 text-neutral-900 dark:text-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-500 transition resize-vertical"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white dark:text-primary-900 font-semibold py-2 px-6 rounded-lg transition disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
        {status && (
          <div
            className="mt-4 px-4 py-3 rounded-lg text-center text-base font-medium bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-100"
            role="alert"
          >
            {status}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
