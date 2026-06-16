import mongoose from "mongoose";

export default async function dbconnect() {
  const db = process.env.DBURI as string;
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose
    .connect(db)
    .then(() => console.log("DATABASE CONNECTED ✅✅✅"));
}
