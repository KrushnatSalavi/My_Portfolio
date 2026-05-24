import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const chatCompletion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: message,
          },
        ],

        model: "llama-3.1-8b-instant",
      });

    return NextResponse.json({
      reply:
        chatCompletion.choices[0]?.message
          ?.content || "No response",
    });

  } catch (error) {
    console.log("AI ERROR:", error);

    return NextResponse.json(
      { error: "AI failed" },
      { status: 500 }
    );
  }
}