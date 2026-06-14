import mongoose from "mongoose";

const issueSchema = mongoose.Schema.create(
  {
    title: String,
    description: String,
    status: {
      type:String,
      enum: ["Open", "Progess", "Closed"],
    },
  },
  { timestamps: true }
);
let IssueModel = mongoose.models.Issue || mongoose.model("Issue", issueSchema);

export default IssueModel;
