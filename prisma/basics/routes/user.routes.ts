import { Router, type RequestHandler } from "express";
import {
  deleteUser,
  getAllUsers,
  getMarriedUsers,
  updateUser,
} from "../controllers/user.controllers.js";

const userRouter = Router();

userRouter.get("/all-users", getAllUsers as RequestHandler);
userRouter.get("/married-users", getMarriedUsers as RequestHandler);
userRouter.patch("/update-user/:id", updateUser as RequestHandler);
userRouter.delete("/delete-user/:id", deleteUser as RequestHandler);

export default userRouter;
