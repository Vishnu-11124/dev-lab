import prisma from "../config/db.js";
import type { Request, Response } from "express";

export const getAllUsers = async (_req: Request, res: Response) => {
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
};

export const getMarriedUsers = async (_req: Request, res: Response) => {
  try {
    const marriedUsers = await prisma.user.findMany({
      where: { isMarried: true },
    });
    if (marriedUsers.length === 0) {
      return res.status(404).json({
        message: "No married users found",
      });
    }
    return res.status(200).json({
      users: marriedUsers,
      message: "Married users retrieved successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to retrieve users",
    });
  }
};
