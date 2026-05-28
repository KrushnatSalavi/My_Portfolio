import mongoose, {
  Schema,
  models,
  model,
} from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Blog =
  models.Blog ||
  model("Blog", BlogSchema);

export default Blog;