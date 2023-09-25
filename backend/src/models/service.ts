const joi = require("joi");
import { Schema, model } from "mongoose";
interface Iservice {
  projectTitle: string;
  poster: string;
  description: string;
  img2: string;
  img3: string;
  img4: string;
}
const workSchema = new Schema<Iservice>({
  projectTitle: {
    type: String,
    required: true,
    minlength: 3,
  },
  poster: {
    type: String,
    required: true,
    minlength: 3,
  },
  description: {
    type: String,
    required: true,
    minlength: 5,
  },
  img2: {
    type: String,
    required: true,
    minlength: 3,
  },
  img3: {
    type: String,
    required: true,
    minlength: 3,
  },
  img4: {
    type: String,
    required: true,
    minlength: 3,
  },
});
const Service = model<Iservice>("service", workSchema);
export default Service;
export const validateService = (service: Iservice) => {
  const schema = joi.object({
    projectTitle: joi.string().min(3).required(),
    poster: joi.string().min(3).required(),
    description: joi.string().min(5).required(),
    img2: joi.string().min(3).required(),
    img3: joi.string().min(3).required(),
    img4: joi.string().min(3).required(),
  });
  return schema.validate(service);
};
