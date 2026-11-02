import { Router, type RequestHandler } from "express";
import { getAllUsers, getMarriedUsers } from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.get("/all-users", getAllUsers as RequestHandler);
userRouter.get("/married-users", getMarriedUsers as RequestHandler);

export default userRouter;
