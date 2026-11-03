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

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { age } = req.body;

    if (!age) {
      return res.status(400).json({
        message: "Age is required",
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { age },
    });

    return res.status(200).json({
      user: updatedUser,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await prisma.user.delete({
      where: { id: Number(id) },
    });

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Failed to delete user",
    });
  }
};
