import Router from "express";
import { createUser, getUser } from "../controller/user.controllers.js";

const userRouter = Router();

userRouter.post("/create-user", createUser);

userRouter.get("/", getUser);

export default userRouter;
