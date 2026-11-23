import { Queue } from "bullmq";
import redis from "./config/redis.js";

const emailQueue = new Queue("emailQueue", {
  connection: { redis, maxRetriesPerRequest: null },
});

export default emailQueue;
