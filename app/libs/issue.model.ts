import mongoose from "mongoose";

const issueSchema = mongoose.Schema.create(
  {
    title: String,
    description: String,
    status: {
      enum: ["Open", "Progess", "Closed"],
      required: true,
    },
  },
  { timestamps: true }
);
