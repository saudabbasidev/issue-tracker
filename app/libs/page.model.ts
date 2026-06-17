import mongoose from "mongoose";

const Pageschema = mongoose.Schema.create(
  {
    authorId: { type: String ,unique:true},
    username: {
      type: String,
      unique: true,
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
