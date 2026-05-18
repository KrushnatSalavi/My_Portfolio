import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import Project from "../../../models/Project";
export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const project = await Project.create(body);

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const projects = await Project.find().sort({
      createdAt: -1,
    });

    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { id } = await req.json();

    await Project.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Project deleted",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      id,
      title,
      description,
      github,
      live,
      tech,
    } = body;

    const updatedProject =
      await Project.findByIdAndUpdate(
        id,
        {
          title,
          description,
          github,
          live,
          tech,
        },
        { new: true }
      );

    return NextResponse.json(
      updatedProject
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}