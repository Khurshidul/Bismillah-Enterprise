import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

interface Err {
  message: string;
}

mongoose
  .connect("mongodb://localhost/ask_qn")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err: Err) =>
    console.error("Could not connect to MongoDB...", err.message),
  );
