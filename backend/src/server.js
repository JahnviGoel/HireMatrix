import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";

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

app.listen(ENV.PORT, () => {
  console.log("Server is running at:", ENV.PORT);
});