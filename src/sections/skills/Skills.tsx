// src/sections/skills/Skills.tsx

const skills = {
  Frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["Git", "GitHub", "Postman", "Vercel"],
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Skills & Technologies
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-indigo-400">
                {category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}