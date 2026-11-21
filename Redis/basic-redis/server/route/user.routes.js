import Router from "express";
import { createUser, getUser, getUserWithRedis, sendOTP, verifyOTP } from "../controller/user.controllers.js";

const userRouter = Router();

userRouter.post("/create-user", createUser);

userRouter.get("/", getUser);

userRouter.get("/with-redis", getUserWithRedis);

userRouter.post("/send-otp", sendOTP)

userRouter.post("/verify-otp", verifyOTP)

export default userRouter;
