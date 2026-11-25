import Redis from "ioredis";
import express from "express";

const app = express();
app.use(express.json());

const publisher = new Redis("redis://localhost:6379");

app.post("/notifications", async (req, res) => {
  const payload = {
    title: req.body.title,
    createdAt: new Date().toDateString(),
  };

  const receivers = await publisher.publish(
    "notifications",
    JSON.stringify(payload),
  );
});
res.json({ message: "notification send", data: receivers });

app.listen(3000, () => console.log("Server is running"));
