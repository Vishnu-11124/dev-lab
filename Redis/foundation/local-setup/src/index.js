import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import redis from "./config/redis.js";

const app = express();

const port = process.env.PORT || 5000;

app.get("/redis", async (req, res) => {
  const reply = await redis.ping();
  res.json({ redis: reply });
});

app.get("/mongo", async (req, res) => {
  const url = process.env.MONGO_URL || "mongodb://localhost:27017/my_mongo_db";

  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(url);
  }

  res.json({ mongo: "connected", database: mongoose.connection.name });
});

app.listen(port, () => console.log(`The server is running on port ${port}`));
