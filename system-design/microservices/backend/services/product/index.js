import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) =>
  res.json({ message: "Welcome to product server..." }),
);

app.listen(port, () => console.log(`Product server running on port ${port}`));
