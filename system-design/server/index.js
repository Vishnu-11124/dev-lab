import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRouter from "./route/user.routes.js";

const app = express();

connectDB();

app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send(`Server  ${process.env.SERVER_NAME}`));

app.use("/users", userRouter);



app.listen(port, () => console.log(`Server is running on port ${port}`));
