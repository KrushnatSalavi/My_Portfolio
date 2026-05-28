import { NextResponse } from "next/server";

import connectDB from "../../../../lib/mongodb";
import Project from "../../../../models/Project";

type ParamsType = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(
  req: Request,
  { params }: ParamsType
) {
  try {
    await connectDB();

    const { id } = await params;

    await Project.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Project deleted",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Delete failed",
      },
      {
        status: 500,
      }
    );
  }
}