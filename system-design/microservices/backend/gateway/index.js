import express from "express";
import "dotenv/config";
import proxy from "express-http-proxy";

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) =>
  res.json({ message: "Welcome to Gateway server..." }),
);

app.use("/auth", proxy("http://localhost:8001"));
app.use("/order", proxy("http://localhost:8002"));
app.use("/product", proxy("http://localhost:8003"));

app.listen(port, () => console.log(`Gateway server running on port ${port}`));
