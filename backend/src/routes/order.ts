const _ = require("lodash");
import express, { Request, Response } from "express";
import Order, { validateOrder } from "../models/orders";
import Material from "../models/paintingMaterials";
import { ObjectId } from "mongodb";
const stripe = require("stripe")(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  // console.log(req.body);
  const { error } = validateOrder(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let order = await Order.findOne({ productId: req.body.productId });
  if (order) return res.status(400).send("User already registered");
  order = new Order({
    customerName: req.body.customerName,
    productName: req.body.productName,
    productId: req.body.id,
    quantity: req.body.quantity,
    price: req.body.price,
    discount: req.body.discount,
    totalPrice: req.body.totalPrice,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
  });
  try {
    await order.save();
    res.send(order);
  } catch (error) {
    console.log(error);
  }
});


router.post("/create-checkout-session", async (req:Request, res:Response) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.CLIENT_KEY}/checkout-success`,
    cancel_url: `${process.env.CLIENT_KEY}/`,
  });

  res.send({ url: session.url });
});
module.exports = router;
