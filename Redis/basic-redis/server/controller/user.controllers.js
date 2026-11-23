import redis from "../config/redis.js";
import User from "../model/user.model.js";
import emailQueue from "../queue.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    await redis.del("user:all");

    const user = await User.create({
      username,
      email,
      password,
    });

    await emailQueue.add("send-email", { email });

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

export const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await redis.set(`otp:${email}`, otp, "EX", 120);

    return res.json({ message: "Otp sended", otp });
  } catch (error) {
    console.log("Failed to send otp");
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const savedOtp = await redis.get(`otp:${email}`);
    if (!savedOtp) {
      return res.json({
        message: " Otp not found or expired",
      });
    }

    if (otp !== savedOtp) {
      return res.json({
        message: "Incorrect otp",
      });
    }

    await redis.del(`otp:${email}`);
    return res.json({ message: "Otp Matched" });
  } catch (error) {
    console.log("Failed to send otp");
  }
};
