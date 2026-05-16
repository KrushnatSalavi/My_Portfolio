"use client";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const projects = [
  {
    title: "Full Stack E-Commerce",
    description:
      "Built a scalable MERN e-commerce platform with authentication, admin dashboard, cart system, and payment integration.",
    tech: ["Next.js", "MongoDB", "Tailwind", "Node.js"],
  },
  {
    title: "AI Interview Platform",
    description:
      "AI-powered interview preparation platform with dynamic question generation and real-time feedback.",
    tech: ["React", "OpenAI", "Express", "MongoDB"],
  },
  {
    title: "Real-Time Chat App",
    description:
      "Socket.io based live chat application with authentication and group messaging features.",
    tech: ["Socket.io", "React", "Node.js"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Production-ready applications focused on
            scalability, UI/UX, and performance.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-indigo-500/30"
            >
              <div className="mb-6 h-48 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />

              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-5">
                <FaGithub className="cursor-pointer text-gray-400 hover:text-white" />
                <ExternalLink className="cursor-pointer text-gray-400 hover:text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}