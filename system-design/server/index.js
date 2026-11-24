import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRouter from "./route/user.routes.js";

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => res.send("Server is running"));

app.use("/users", userRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
