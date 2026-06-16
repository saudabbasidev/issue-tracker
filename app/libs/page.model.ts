import mongoose from "mongoose";

const Pageschema = mongoose.Schema.create(
  {
    authorId: { type: String },
    name: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    links: [
      {
        title: String,
        url: String,
      },
    ],
  },
  { timestamps: true },
);
let PageModel = mongoose.models.Page || mongoose.model("Page", Pageschema);

export default PageModel;
