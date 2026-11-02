import { Router, type RequestHandler } from "express";
import { getAllUsers } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.get("/all-users", getAllUsers as RequestHandler);

export default userRouter;
