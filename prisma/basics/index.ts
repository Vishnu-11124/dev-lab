import express, { type Response, type Request } from "express";
import "dotenv/config.js";
import prisma from "./config/db.js";

const app = express();

app.use(express.json());

app.get("/users", async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    return res.status(200).json({
      users,
      message: "Users retrieved successfully",
    });
  } catch (error) {
    console.error("Database error:", error);

    return res.status(500).json({
      message: "Failed to retrieve users",
    });
  }
});

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the Prisma Basics API" });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
