import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.json({ message: "Welcome to auth server..." }));

app.listen(port, () => console.log(`Auth server running on port ${port}`));
