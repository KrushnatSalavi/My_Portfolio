import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();  

    const userMessage = body.message;

    if (!userMessage) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const chatCompletion =
      await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: userMessage,
          },
        ],

        model: "llama-3.1-8b-instant",
      });

    return NextResponse.json({
      reply:
        chatCompletion.choices[0].message.content,
    });
  } catch (error) {
    console.log("AI ERROR:", error);

    return NextResponse.json(
      {
        error: "AI request failed",
      },
      { status: 500 }
    );
  }
}