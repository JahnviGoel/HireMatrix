import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB=async () => {
  try {
    const conn=await mongoose.connect(ENV.DB_URL);
    console.log("connected to mongoDB",conn.connection.host);
  } catch (error) {
    console.log("error connecting to DataBase",error)
    //0 means success and 1 means failure
    process.exit(1);
  }
} 