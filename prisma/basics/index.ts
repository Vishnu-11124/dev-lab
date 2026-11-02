import express, { type Response, type Request } from "express";
import "dotenv/config.js";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/users", userRouter);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the Prisma Basics API" });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
