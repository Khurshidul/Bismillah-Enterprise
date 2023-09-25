// import dotenv from "dotenv";
// dotenv.config();
import express from "express";
import "../src/config/database";
import cors from "cors";
const app = express();
const product = require("./routes/products");
const material = require("./routes/paintingMaterial");
const orders = require("./routes/order");
const services = require("./routes/services");
const checkout = require("./routes/payment");

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
// app.use(cors);
app.use(express.json());
app.use("/works", product);
app.use("/materials", material);
app.use("/orders", orders);
app.use("/services", services);
app.use("/checkout", checkout);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
