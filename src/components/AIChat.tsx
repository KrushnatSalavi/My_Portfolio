"use client";

import { useState } from "react";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  async function sendMessage() {
    const res = await fetch("/api/ai-chat", {
      method: "POST",
      body: JSON.stringify({
        message,
      }),
    });

    const data = await res.json();

    setReply(data.response);
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-4 text-2xl font-bold text-white">
        Ask AI About Krushnat
      </h2>

      <input
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Ask something..."
        className="w-full rounded-xl bg-black/20 p-4 text-white"
      />

      <button
        onClick={sendMessage}
        className="mt-4 rounded-xl bg-indigo-500 px-6 py-3 text-white"
      >
        Ask AI
      </button>

      {reply && (
        <div className="mt-6 rounded-2xl bg-black/20 p-4 text-gray-300">
          {reply}
        </div>
      )}
    </div>
  );
}