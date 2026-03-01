import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();
const __dirname = path.resolve();

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "success from API" });
});

// Sample API route
app.get("/books", (req, res) => {
  res.status(200).json({ msg: "this is book endpoint" });
});

// Serve frontend in production
if (ENV.NODE_ENV === "production") {
  // Serve static assets
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Catch-all: send back index.html for SPA routing
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend","dist","index.html"));
  });
}
// once we connect to the dataBase then we will listen
// Start Server AFTER DB connection
const startServer = async () => {
  try {
    console.log("Connecting to database...");
    await connectDB();                     // <-- DB connects first
    console.log("Database connected!");

    app.listen(ENV.PORT, () => {          // <-- THEN server starts
      console.log("Server listening on:", ENV.PORT);
    });
  } catch (error) {
    console.error("❌ Failed to connect to DB. Server NOT started.");
    console.error(error);
    process.exit(1);                      // Stop app — prevents server from running without DB
  }
};
  startServer();