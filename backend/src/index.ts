// import dotenv from "dotenv";
// dotenv.config();
import express from "express";
import "../src/config/database";
import cors from "cors";
const app = express();
// const product = require("./routes/products");
const material = require("./routes/paintingMaterial");
const services = require("./routes/services");
const payment = require("./routes/payment");
app.use(
  cors({
    origin: "https://lighthearted-cannoli-141dbc.netlify.app/",
  }),
);
// app.use(cors);
app.use(express.json());
app.use("/materials", material);
app.use("/services", services);
app.use("/checkout", payment);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
