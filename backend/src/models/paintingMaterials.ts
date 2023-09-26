const joi = require("joi");
import { Schema, model } from "mongoose";
interface Imaterial {
  img: string;
  materialName: string;
  price: number;
  discount: number;
}
const workSchema = new Schema<Imaterial>({
  img: {
    type: String,
    required: true,
    minlength: 3,
  },
  materialName: {
    type: String,
    required: true,
    minlength: 3,
  },
  price: {
    type: Number,
    required: true,
    minlength: 2,
  },
  discount: {
    type: Number,
    required: true,
    maxlength: 2,
  },
});
const Material = model<Imaterial>("material", workSchema);
export default Material;
export const validateMaterial = (material: Imaterial) => {
  const schema = joi.object({
    img: joi.string().min(3).required(),
    materialName: joi.string().min(2).max(255).required(),
    price: joi.number().min(2).required(),
    discount: joi.number().max(2).required(),
  });
  return schema.validate(material);
};
