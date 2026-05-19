"use client";

import { useEffect, useState } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>(
    []
  );

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const res = await fetch("/api/blogs");

    const data = await res.json();

    setBlogs(data);
  }

  return (
    <div className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-16 text-6xl font-bold">
          Blogs
        </h1>

        <div className="space-y-10">

          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              "
            >
              <h2 className="text-3xl font-bold">
                {blog.title}
              </h2>

              <p className="mt-6 whitespace-pre-line text-gray-300">
                {blog.content}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                {blog.tags?.map(
                  (
                    tag: string,
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
                      #{tag}
                    </span>
                  )
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}