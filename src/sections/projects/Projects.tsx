"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>(
    []
  );

  useEffect(() => {
    async function fetchProjects() {
      const res = await fetch("/api/projects");

      const data = await res.json();

      setProjects(data);
    }

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-4 text-gray-400">
            Real production-ready applications.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project._id}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              transition
              hover:-translate-y-2
              "
            >
              <div className="mb-6 h-48 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />

              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech?.map(
                  (item: string) => (
                    <span
                      key={item}
                      className="
                      rounded-full
                      bg-indigo-500/10
                      px-4
                      py-1
                      text-sm
                      text-indigo-300
                      "
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-8 flex gap-5">

                <a
                  href={project.github}
                  target="_blank"
                >
                  <FaGithub className="text-2xl text-gray-400 hover:text-white" />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                >
                  <ExternalLink className="text-gray-400 hover:text-white" />
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}