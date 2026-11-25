import { Worker } from "bullmq";

const connection = {
  host: "localhost",
  port: 6379,
};

const worker = new Worker(
  "emails",
  async (job) => {
    (console.log(
      "Processing email job...",
      job.id,
      job.name,
    )(await new Promise((resolve) => setTimeout(resolve, 1500))),
      console.log("Email job completed"));
  },
  { connection },
);

worker.on("completed", (job) => {
  console.log("job completed");
});

worker.on("failed", (job, err) => {
  console.log("job failed", job.id, job.data, err);
});
