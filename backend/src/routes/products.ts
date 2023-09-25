const _ = require("lodash");
import express, { Request, Response } from "express";
import Product, { validateProduct } from "../models/products";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const products = await Product.find().sort("name");
  res.send(products);
});

router.post("/", async (req: Request, res: Response) => {
  const { error } = validateProduct(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let product = await Product.findOne({ image: req.body.image });
  if (product) return res.status(400).send("User already registered");
  product = new Product({
    image: req.body.image,
    work_title: req.body.work_title,
    team: req.body.team,
    description: req.body.description,
  });
  await product.save();
  res.send(product);
});
module.exports = router;
