import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Project from "../../../models/Project";

export async function GET() {
  try {
    await connectDB();

    const projects =
      await Project.find().sort({
        createdAt: -1,
      });

    return NextResponse.json({
      success: true,
      projects,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch projects",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(
  req: Request
) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      title,
      description,
      image,
      tech,
      github,
      live,
    } = body;

    const project =
      await Project.create({
        title,
        description,
        image,
        tech,
        github,
        live,
      });

    return NextResponse.json({
      success: true,
      project,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to create project",
      },
      {
        status: 500,
      }
    );
  }
}