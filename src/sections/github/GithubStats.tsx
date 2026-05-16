
export default function GithubStats() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          GitHub Activity
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-lg text-gray-400">
              Contributions
            </h3>

            <p className="mt-4 text-5xl font-black text-white">
              500+
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-lg text-gray-400">
              Repositories
            </h3>

            <p className="mt-4 text-5xl font-black text-white">
              30+
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-lg text-gray-400">
              Technologies
            </h3>

            <p className="mt-4 text-5xl font-black text-white">
              15+
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}