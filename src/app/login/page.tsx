"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] =
  useState(false);

  async function handleLogin(e: any) {
  e.preventDefault();

  setLoading(true);

  const res = await fetch(
    "/api/login",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  const data = await res.json();

  setLoading(false);

  if (data.token) {
    localStorage.setItem(
      "token",
      data.token
    );

    window.location.href =
      "/admin";
  } else {
    alert(data.error);
  }
}

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <h1 className="mb-8 text-3xl font-bold text-white">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-xl bg-black/30 p-4 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded-xl bg-black/30 p-4 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full rounded-xl bg-indigo-500 p-4 text-white">
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}