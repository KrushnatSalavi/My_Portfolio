"use client";

import { useState } from "react";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    try {
      setLoading(true);

      const res = await fetch("/api/ai-chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: message,
        }),
      });

      const data = await res.json();

      console.log(data);

      setReply(data.reply);
    } catch (error) {
      console.log(error);

      setReply("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-4 text-2xl font-bold text-white">
        Ask AI About Krushna
      </h2>

      <input
        type="text"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Ask something..."
        className="w-full rounded-xl bg-black/20 p-4 text-white outline-none"
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="mt-4 rounded-xl bg-indigo-500 px-6 py-3 text-white cursor-pointer"
      >
        {loading ? "Loading..." : "Ask AI"}
      </button>

      {reply && (
        <div className="mt-6 rounded-2xl bg-black/20 p-4 text-gray-300">
          {reply}
        </div>
      )}
    </div>
  );
}