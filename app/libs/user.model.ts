import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  onboarded: {
    type: Boolean,
    default:false
  },
});
const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;
