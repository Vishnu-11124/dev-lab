import express from "express";
import Redis from "ioredis";

const app = express();

app.use(express.json());

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

app.post("/otp", async (req, res) => {
  const { phone } = req.body;
  const otp = Math.floor(100000 + Math.random() + 900000).toString();
  await redis.set(`otp:${phone}`, otp, "EX", 60);
  res.json({ otp, message: "otp send" });
});

app.post("/otp-verify", async (req, res) => {
  const { phone, otp } = req.body;

  const storedOtp = await redis.get(`otp:${phone}`);
  if (!storedOtp) {
    return res.json({ message: "OTP expired or not found" });
  }

  if (otp !== storedOtp) {
    return res.json({ message: "Incorrect otp" });
  }

  await redis.del(`otp:${phone}`);
  res.json({ message: "otp matched successfully" });
});

const port = 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
