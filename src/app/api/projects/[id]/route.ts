import { NextResponse } from "next/server";

import connectDB from "../../../../lib/mongodb";
import Project from "../../../../models/Project";
export async function DELETE(
  req: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  await connectDB();

  await Project.findByIdAndDelete(
    params.id
  );

  return NextResponse.json({
    success: true,
  });
}