import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const userMessage = body.message;

    const chatCompletion =
      await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",

        messages: [
          {
            role: "system",

            content: `
You are an AI assistant for Krushna Salavi's portfolio website.

About Krushna Salavi:
- BCA student from Kolhapur, India
- MERN Stack Developer
- Skills: HTML, CSS, JavaScript, React, Next.js, Node.js, MongoDB
- Also knows C, C++, PHP, Bootstrap, WordPress
- Web Development Intern at Walstar Technology
- Interested in AI, Full Stack Development, and modern web apps
- Built portfolio and web development projects
- Best Intern of the Batch award winner

Answer questions only related to Krushna Salavi, his skills, projects, education, and career.
Keep answers short, professional, and friendly.
`,
          },

          {
            role: "user",
            content: userMessage,
          },
        ],
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