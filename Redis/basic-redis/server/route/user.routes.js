import Router from "express";
import { createUser, getUser, getUserWithRedis } from "../controller/user.controllers.js";

const userRouter = Router();

userRouter.post("/create-user", createUser);

userRouter.get("/", getUser);

userRouter.get("/with-redis", getUserWithRedis);

export default userRouter;
