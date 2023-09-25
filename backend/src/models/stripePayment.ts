const joi = require("joi");
import { Schema, model } from "mongoose";
interface IorderPayment {
  customerName: string;
  productName: string;
  totalPrice: number;
  email: string;
  phone: number;
}
const workSchema = new Schema<IorderPayment>({
  customerName: {
    type: String,
    required: true,
    minlength: 3,
  },
  productName: {
    type: String,
    required: true,
    minlength: 3,
  },
  totalPrice: {
    type: Number,
    required: true,
    minlength: 2,
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
const Payment = model<IorderPayment>("order", workSchema);
export default Payment;
export const validatePayment = (payment: IorderPayment) => {
  const schema = joi.object({
    customerName: joi.string().min(3).required(),
    productName: joi.string().min(3).required(),
    totalPrice: joi.number().min(2).required(),
    email: joi.string().min(2).max(255).required(),
    phone: joi.number().min(11).required(),
  });
  return schema.validate(payment);
};
