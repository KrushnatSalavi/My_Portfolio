import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const completion =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "system",
            content: `
You are Krushna's AI portfolio assistant.

Answer questions about:
- MERN skills
- projects
- experience
- frontend development
- backend development

Keep responses concise and professional.
`,
          },
          {
            role: "user",
            content: body.message,
          },
        ],
      });

    return NextResponse.json({
      response:
        completion.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "AI error" },
      { status: 500 }
    );
  }
}