import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected!!!")
  } catch (error) {
    console.log("Some thing went wrong");
  }
};

export default connectDB