"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [github, setGithub] = useState("");
  const [live, setLive] = useState("");
  const [tech, setTech] = useState("");

  const router = useRouter();

  const [projects, setProjects] = useState<any[]>(
    []
  );

  const [editingId, setEditingId] =
    useState("");

  const [isEditing, setIsEditing] =
    useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const res = await fetch("/api/projects");

    const data = await res.json();

    setProjects(data);
  }

  async function deleteProject(id: string) {
    const res = await fetch("/api/projects", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      fetchProjects();
    }
  }

  function editProject(project: any) {
    setTitle(project.title);

    setDescription(project.description);

    setGithub(project.github);

    setLive(project.live);

    setTech(project.tech.join(","));

    setEditingId(project._id);

    setIsEditing(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function addProject(e: any) {
    e.preventDefault();

    const method = isEditing
      ? "PUT"
      : "POST";

    const bodyData = {
      id: editingId,
      title,
      description,
      github,
      live,
      tech: tech.split(","),
    };

    const res = await fetch(
      "/api/projects",
      {
        method,
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify(bodyData),
      }
    );

    if (res.ok) {
      alert(
        isEditing
          ? "Project Updated!"
          : "Project Added!"
      );

      setTitle("");
      setDescription("");
      setGithub("");
      setLive("");
      setTech("");

      setEditingId("");

      setIsEditing(false);

      fetchProjects();
    }
  }

  useEffect(() => {
  const token =
    localStorage.getItem("token");

  if (!token) {
    router.push("/login");
  } else {
    fetchProjects();
  }
}, []);

  return (
    <div className="min-h-screen bg-black p-10 text-white">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-10 text-5xl font-bold">
          Admin Dashboard
        </h1>
        <div className="mb-10 flex justify-end">

  <button
    onClick={() => {
      localStorage.removeItem(
        "token"
      );

      router.push("/login");
    }}
    className="
    rounded-xl
    bg-red-500/20
    px-6
    py-3
    text-red-400
    transition
    hover:bg-red-500/30
    "
  >
    Logout
  </button>

</div>

        <form
          onSubmit={addProject}
          className="
          max-w-3xl
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
          "
        >
          <h2 className="mb-6 text-3xl font-bold">
            {isEditing
              ? "Edit Project"
              : "Add Project"}
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Project Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="
              w-full
              rounded-xl
              bg-black/30
              p-4
              outline-none
              "
            />

            <textarea
              placeholder="Project Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              className="
              min-h-[120px]
              w-full
              rounded-xl
              bg-black/30
              p-4
              outline-none
              "
            />

            <input
              type="text"
              placeholder="GitHub Link"
              value={github}
              onChange={(e) =>
                setGithub(e.target.value)
              }
              className="
              w-full
              rounded-xl
              bg-black/30
              p-4
              outline-none
              "
            />

            <input
              type="text"
              placeholder="Live Demo Link"
              value={live}
              onChange={(e) =>
                setLive(e.target.value)
              }
              className="
              w-full
              rounded-xl
              bg-black/30
              p-4
              outline-none
              "
            />

            <input
              type="text"
              placeholder="React, Node.js, MongoDB"
              value={tech}
              onChange={(e) =>
                setTech(e.target.value)
              }
              className="
              w-full
              rounded-xl
              bg-black/30
              p-4
              outline-none
              "
            />

            <div className="flex gap-4">

              <button
                className="
                rounded-xl
                bg-indigo-500
                px-8
                py-4
                transition
                hover:bg-indigo-600
                "
              >
                {isEditing
                  ? "Update Project"
                  : "Add Project"}
              </button>

              {isEditing && (
                <button
                  type="button"
                  onClick={() => {
                    setTitle("");
                    setDescription("");
                    setGithub("");
                    setLive("");
                    setTech("");

                    setEditingId("");

                    setIsEditing(false);
                  }}
                  className="
                  rounded-xl
                  bg-gray-700
                  px-8
                  py-4
                  transition
                  hover:bg-gray-600
                  "
                >
                  Cancel
                </button>
              )}

            </div>

          </div>
        </form>

        <div className="mt-16">

          <h2 className="mb-8 text-3xl font-bold">
            Manage Projects
          </h2>

          <div className="space-y-6">

            {projects.map((project) => (
              <div
                key={project._id}
                className="
                flex
                flex-col
                gap-6
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                md:flex-row
                md:items-center
                md:justify-between
                "
              >
                <div>
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {project.tech?.map(
                      (
                        item: string,
                        index: number
                      ) => (
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
                      )
                    )}

                  </div>
                </div>

                <div className="flex items-center gap-4">

                  <button
                    onClick={() =>
                      editProject(project)
                    }
                    className="
                    rounded-xl
                    bg-indigo-500/20
                    px-5
                    py-3
                    text-indigo-400
                    transition
                    hover:bg-indigo-500/30
                    "
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteProject(
                        project._id
                      )
                    }
                    className="
                    rounded-xl
                    bg-red-500/20
                    px-5
                    py-3
                    text-red-400
                    transition
                    hover:bg-red-500/30
                    "
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}