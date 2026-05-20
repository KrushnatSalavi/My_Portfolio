import { NextResponse } from "next/server";

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content: `
You are an AI assistant for Krushna Salavi's portfolio.

Information about Krushna:

- BCA graduate
- MERN stack developer
- Skills:
  React.js
  Next.js
  Node.js
  Express.js
  MongoDB
  JavaScript
  Tailwind CSS

- Built:
  Full-stack portfolio
  Admin dashboard
  CRUD systems
  AI-integrated applications

- Interested in:
  Full-stack development
  Scalable web applications
  Modern UI/UX

Answer professionally and confidently.
            `,
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

    return NextResponse.json({
      reply:
        completion.choices[0].message
          .content,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "AI request failed" },
      { status: 500 }
    );
  }
}