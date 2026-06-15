import mongoose from "mongoose";

const Pageschema = mongoose.Schema.create(
  {
    name:String,
    bio:String,
    links:[{
      title:String,
      url:String,
    }]
  },
  { timestamps: true }
);
let PageModel = mongoose.models.Page || mongoose.model("Page", Pageschema);

export default PageModel;
