import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const body = await req.json();

  const { email, password } = body;

  if (
    email === "admin@gmail.com" &&
    password === "123456"
  ) {
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    return NextResponse.json({ token });
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}