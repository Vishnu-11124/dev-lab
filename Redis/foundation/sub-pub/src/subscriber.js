import Redis from "ioredis";

const subscriber = new Redis("redis://localhost:6379");

subscriber.subscribe("notifications", (err) => {
  if (err) {
    console.log("Failed to subscriber", err.message);
  }
  console.log("Subscribed successfully");
});

subscriber.on("message", (channel, message) => {
  console.log("Recieved on:", channel, ";", JSON.parse(message));
});
