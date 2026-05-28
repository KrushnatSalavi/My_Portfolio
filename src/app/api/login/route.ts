import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = body;

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {
      const token = jwt.sign(
        { email },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "7d",
        }
      );

      return NextResponse.json({
        success: true,
        token,
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: "Invalid credentials",
      },
      { status: 401 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        error: "Server error",
      },
      { status: 500 }
    );
  }
}