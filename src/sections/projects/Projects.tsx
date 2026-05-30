"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

interface Project {
  _id: string;

  title: string;

  description: string;

  image: string;

  tech: string[];

  github: string;

  live: string;
}

export default function Projects() {
  const [projects, setProjects] =
    useState<Project[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const res = await fetch(
        "/api/projects"
      );

      const data = await res.json();

      console.log(
        "Projects API Response:",
        data
      );

      // HANDLE DIFFERENT RESPONSE SHAPES

      if (Array.isArray(data)) {
        setProjects(data);
      } else if (
        Array.isArray(data.projects)
      ) {
        setProjects(data.projects);
      } else {
        console.error(
          "Projects data is not array"
        );

        setProjects([]);
      }
    } catch (error) {
      console.log(
        "Fetch Error:",
        error
      );

      setProjects([]);
    } finally {
      setLoading(false);
    }
  }

  function normalizeImageSrc(src: unknown) {
    if (typeof src !== "string") return "/images/krushna1.png";

    const normalized = src.trim().replace(/\\/g, "/");
    if (!normalized) return "/images/krushna1.png";

    if (normalized.startsWith("/")) return normalized;
    if (normalized.startsWith("./") || normalized.startsWith("../")) return normalized;

    return `/${normalized}`;
  }

  return (
    <section
      id="projects"
      className="px-6 py-28"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl"
      >
        {/* HEADER */}

        <div className="mb-16">
          <h2 className="text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mt-4 text-gray-400">
            Real production-ready
            applications.
          </p>
        </div>

        {/* LOADING */}

        {loading && (
          <p className="text-gray-400">
            Loading projects...
          </p>
        )}

        {/* EMPTY */}

        {!loading &&
          projects.length === 0 && (
            <p className="text-red-400">
              No projects found.
            </p>
          )}

        {/* PROJECT GRID */}

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => {
            const imageSrc = normalizeImageSrc(project.image);

            return (
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
                {/* IMAGE */}

                <div className="relative mb-6 h-48 overflow-hidden rounded-2xl">
                  <Image
                    src={imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TITLE */}

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-4 text-gray-400">
                  {project.description}
                </p>

                {/* TECH STACK */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {Array.isArray(project.tech) ? (
                    project.tech.map((item, index) => (
                      <span
                        key={index}
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
                    ))
                  ) : (
                    <span
                      className="
                        rounded-full
                        bg-indigo-500/10
                        px-4
                        py-1
                        text-sm
                        text-indigo-300
                      "
                    >
                      {project.tech}
                    </span>
                  )}
                </div>

                {/* LINKS */}

                <div className="mt-8 flex gap-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-2xl text-gray-400 hover:text-white" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="text-gray-400 hover:text-white" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}