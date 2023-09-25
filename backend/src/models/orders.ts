const joi = require("joi");
import { Schema, model } from "mongoose";
interface Iorder {
  customerName: string;
  productName: string;
  productId: string;
  quantity: number;
  price: number;
  address: string;
  email: string;
  phone: number;
}
const workSchema = new Schema<Iorder>({
  customerName: {
    type: String,
    required: true,
    minlength: 3,
  },

  price: {
    type: Number,
    required: true,
    minlength: 2,
  },
  address: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
  },

  phone: {
    type: Number,
    required: true,
    minlength: 11,
    // maxlength: 50000,
  },
});
const Order = model<Iorder>("order", workSchema);
export default Order;
export const validateOrder = (order: Iorder) => {
  const schema = joi.object({
    customerName: joi.string().min(3).required(),
    price: joi.number().min(2).required(),
    address: joi.string().min(2).required(),
    email: joi.string().min(2).max(255).required(),
    phone: joi.number().min(11).required(),
  });
  return schema.validate(order);
};
