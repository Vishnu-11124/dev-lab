import Router from "express";
import {
  createUser,
  getUser,
  getUserWithRedis,
  sendOTP,
  verifyOTP,
} from "../controller/user.controllers.js";
import rateLimiter from "../middleware/ratelimit.js";

const userRouter = Router();

userRouter.post("/create-user", createUser);

userRouter.get("/", rateLimiter, getUser);

userRouter.get("/with-redis", getUserWithRedis);

userRouter.post("/send-otp", sendOTP);

userRouter.post("/verify-otp", verifyOTP);

export default userRouter;
