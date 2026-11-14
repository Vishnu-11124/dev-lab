import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Server running"));

const port = 5000;

app.listen(port, () => {
  console.log("App is listening on port");
});
