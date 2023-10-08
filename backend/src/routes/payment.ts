import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
// import Payment, { validatePayment } from "../models/stripePayment";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

type paymentOrder = {
  id: string;
  quantity: number;
  customerName: string;
  address: string;
  email: string;
  phone: number;
  productName: string;
  price: number;
};

router.post("/", async (req: Request, res: Response) => {
  const subscription_items = req.body.orderItems.map((item: paymentOrder) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.customerName,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });
  console.log(subscription_items);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: subscription_items,
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });
    console.log(session.url);
    res.json({ url: session.url });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      console.log("Unexpected error", error);
    }
  }
});
module.exports = router;
