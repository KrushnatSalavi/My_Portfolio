"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Project {
  _id: string;
  title: string;
  description: string;
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
    const res = await fetch(
      "/api/projects"
    );

    const data = await res.json();

    setProjects(data);
  }

  async function addProject() {
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
          tech,
        }),
      }
    );

    if (res.ok) {
      setTitle("");
      setDescription("");
      setTech("");

      fetchProjects();
    }
  }

  async function deleteProject(
    id: string
  ) {
    await fetch(
      `/api/projects/${id}`,
      {
        method: "DELETE",
      }
    );

    fetchProjects();
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

              <button
                onClick={addProject}
                className="rounded-xl bg-indigo-500 px-6 py-3"
              >
                Add Project
              </button>
            </div>
          </div>

          {/* PROJECTS */}

          <div className="mt-10 grid gap-6">
            {projects.map((project) => (
              <div
                key={project._id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {project.description}
                </p>

                <p className="mt-3 text-indigo-400">
                  {project.tech}
                </p>

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