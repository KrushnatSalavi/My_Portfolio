
export default function Contact() {
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
          Open for internships, freelance projects,
          and full-stack development opportunities.
        </p>

        <form className="mt-10 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={6}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none"
          />

          <button
            className="rounded-2xl bg-indigo-500 px-8 py-4 font-medium text-white transition hover:bg-indigo-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}