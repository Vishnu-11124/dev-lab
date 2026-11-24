import { Worker } from "bullmq";
import sendEmail from "./config/sendEmail.js";
import redis from "./config/redis.js";

const worker = new Worker(
  "emailQueue",
  async (job) => {
    const email = job.data.email;
    await sendEmail(email);
    console.log("Job completed");
  },
  { connection: { redis, maxRetriesPerRequest: null } },
);
