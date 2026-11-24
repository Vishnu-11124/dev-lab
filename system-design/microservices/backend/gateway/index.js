import express from "express";
import "dotenv/config";
import proxy from "express-http-proxy";

const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) =>
  res.json({ message: `Welcome to Gateway server: ${process.env.GATEWAY_NAME}` }),
);

app.use("/auth", proxy("http://auth-service:8001"));
app.use("/order", proxy("http://order-service:8002"));
app.use("/product", proxy("http://product-service:8003"));

app.listen(port, () => console.log(`Gateway server running on port ${port}`));
