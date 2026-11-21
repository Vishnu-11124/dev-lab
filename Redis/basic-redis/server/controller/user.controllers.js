import redis from "../config/redis.js";
import User from "../model/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({
      username,
      email,
      password,
    });

    await redis.del("user:all");

    return res.status(201).json({
      status: 201,
      data: user,
      message: "User created successfully",
    });
  } catch (error) {
    console.log("User creation failed");
  }
};

export const getUser = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json({
      data: users,
      message: "Users fetched successfully",
    });
  } catch (error) {
    console.log("Error in fetch users");
  }
};

export const getUserWithRedis = async (req, res) => {
  try {
    const data = await redis.get("user:all");
    if (data) {
      const users = JSON.parse(data);
      return res.status(200).json({
        data: users,
        message: "Users fetched successfully",
      });
    }

    const users = await User.find({});
    await redis.set("user:all", JSON.stringify(users));

    return res.status(200).json({
      data: users,
      message: "Users fetched successfully",
    });
  } catch (error) {
    console.log("Error in fetch users");
  }
};
