import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";

const app = express();

connectDB()

app.get("/", (req, res) => res.send("Server is running"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
