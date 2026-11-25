import express from "express";
import emailQueue from "./queue.js";

const app = express();

app.use(express.json());

app.post("/welcome-email", async (req, res) => {
  emailQueue.add("send-email", {
    email: req.body.email,
  },{
    attempts: 3
  });
});

app.listen(3000, () =>
  console.log(`server is running on port http://localhost:3000`),
);
