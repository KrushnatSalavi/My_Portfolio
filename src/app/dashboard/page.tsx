"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tech: string;
}

export default function Dashboard() {
  const router = useRouter();

  const [projects, setProjects] =
    useState<Project[]>([]);

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [image, setImage] =
    useState("");

  const [github, setGithub] =
    useState("");

  const [live, setLive] =
    useState("");

  const [tech, setTech] =
    useState("");

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }

    fetchProjects();
  }, []);

  async function fetchProjects() {
    try {
      const res = await fetch(
        "/api/projects"
      );

      const data = await res.json();

      console.log(data);

      if (
        data.projects &&
        Array.isArray(data.projects)
      ) {
        setProjects(data.projects);
      } else {
        setProjects([]);
        console.error(
          "Projects is not array"
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function addProject() {
    try {
      const res = await fetch(
        "/api/projects",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            title,
            description,
            image,
            github,
            live,
            tech,
          }),
        }
      );

      const data = await res.json();

      console.log(data);

      if (res.ok) {
        setTitle("");
        setDescription("");
        setImage("");
        setGithub("");
        setLive("");
        setTech("");

        fetchProjects();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProject(
    id: string
  ) {
    try {
      await fetch(
        `/api/projects/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">

        {/* SIDEBAR */}

        <div className="w-72 border-r border-white/10 bg-white/5 p-6">
          <h1 className="text-3xl font-bold">
            Admin Panel
          </h1>

          <div className="mt-10 space-y-4">
            <button className="w-full rounded-xl bg-indigo-500 p-4 text-left">
              Projects
            </button>

            <button className="w-full rounded-xl bg-white/5 p-4 text-left">
              Messages
            </button>

            <button className="w-full rounded-xl bg-white/5 p-4 text-left">
              Skills
            </button>
          </div>
        </div>

        {/* MAIN */}

        <div className="flex-1 p-10">
          <h2 className="text-4xl font-bold">
            Manage Projects
          </h2>

          {/* FORM */}

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-6 text-2xl font-semibold">
              Add Project
            </h3>

            <div className="space-y-4">

              {/* TITLE */}

              <input
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                placeholder="Project Title"
                className="w-full rounded-xl bg-black/20 p-4 outline-none"
              />

              {/* DESCRIPTION */}

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
                placeholder="Description"
                className="w-full rounded-xl bg-black/20 p-4 outline-none"
              />

              {/* IMAGE */}

              <input
                value={image}
                onChange={(e) =>
                  setImage(
                    e.target.value
                  )
                }
                placeholder="/images/project.png"
                className="w-full rounded-xl bg-black/20 p-4 outline-none"
              />

              {/* GITHUB */}

              <input
                value={github}
                onChange={(e) =>
                  setGithub(
                    e.target.value
                  )
                }
                placeholder="GitHub Link"
                className="w-full rounded-xl bg-black/20 p-4 outline-none"
              />

              {/* LIVE */}

              <input
                value={live}
                onChange={(e) =>
                  setLive(
                    e.target.value
                  )
                }
                placeholder="Live Website Link"
                className="w-full rounded-xl bg-black/20 p-4 outline-none"
              />

              {/* TECH */}

              <input
                value={tech}
                onChange={(e) =>
                  setTech(
                    e.target.value
                  )
                }
                placeholder="Tech Stack"
                className="w-full rounded-xl bg-black/20 p-4 outline-none"
              />

              {/* BUTTON */}

              <button
                onClick={addProject}
                className="rounded-xl bg-indigo-500 px-6 py-3"
              >
                Add Project
              </button>
            </div>
          </div>

          {/* PROJECT LIST */}

          <div className="mt-10 grid gap-6">

            {projects.map((project) => (
              <div
                key={project._id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >

                {/* IMAGE */}

                <div className="relative mb-6 h-56 w-full overflow-hidden rounded-2xl">

                  <Image
                    src={
                      project.image ||
                      "/images/default.png"
                    }
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TITLE */}

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}

                <p className="mt-3 text-gray-400">
                  {project.description}
                </p>

                {/* TECH */}

                <p className="mt-3 text-indigo-400">
                  {project.tech}
                </p>

                {/* LINKS */}

                <div className="mt-4 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-xl bg-white/10 px-4 py-2"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="rounded-xl bg-indigo-500 px-4 py-2"
                  >
                    Live
                  </a>
                </div>

                {/* DELETE */}

                <button
                  onClick={() =>
                    deleteProject(
                      project._id
                    )
                  }
                  className="mt-6 rounded-xl bg-red-500 px-5 py-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}