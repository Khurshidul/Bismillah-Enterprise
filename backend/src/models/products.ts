const joi = require("joi");
import { Schema, model } from "mongoose";
interface Iproduct {
  image: string;
  brand: string;
  product_title: string;
  price: number;
  stars: number;
}
const workSchema = new Schema<Iproduct>({
  image: {
    type: String,
    required: true,
    minlength: 3,
  },
  brand: {
    type: String,
    required: true,
    minlength: 3,
  },
  product_title: {
    type: String,
    required: true,
    minlength: 3,
  },
  price: {
    type: Number,
    required: true,
    minlength: 5,
    maxlength: 50000,
  },
  stars: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 5,
  },
});
const Product = model<Iproduct>("product", workSchema);
export default Product;
export const validateProduct = (product: Iproduct) => {
  const schema = joi.object({
    image: joi.string().min(3).required(),
    brand: joi.string().min(3).max(255).required(),
    product_title: joi.string().min(2).max(255).required(),
    price: joi.number().min(5).required(),
    stars: joi.number().min(1).max(5).required(),
  });
  return schema.validate(product);
};
