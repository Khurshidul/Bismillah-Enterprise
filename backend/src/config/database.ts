import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

interface Err {
  message: string;
}

mongoose
  .connect(
    `mongodb+srv://bismillah:${process.env.password}@cluster0.n3ufssj.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err: Err) =>
    console.error("Could not connect to MongoDB...", err.message),
  );
