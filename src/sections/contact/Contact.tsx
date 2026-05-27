"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "Yservice_5snja5l",
        "template_akkvz2l",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "9J2REqGjGDP1oGLAo"
      );

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      alert("Failed to send message");
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="px-6 py-28"
    >
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
        <h2 className="text-4xl font-bold text-white">
          Let’s Build Something Great
        </h2>

        <p className="mt-4 text-gray-400">
          Open for internships,
          freelance projects,
          and full-stack development opportunities.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none"
            required
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-2xl bg-indigo-500 px-8 py-4 font-medium text-white transition hover:bg-indigo-400"
          >
            {loading
              ? "Sending..."
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}