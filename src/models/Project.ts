import mongoose from "mongoose";

const ProjectSchema =
  new mongoose.Schema(
    {
      title: String,
      description: String,
      github: String,
      live: String,
      tech: [String],
    },
    {
      timestamps: true,
    }
  );

export default mongoose.models.Project ||
  mongoose.model(
    "Project",
    ProjectSchema
  );