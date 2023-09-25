const joi = require("joi");
import { Schema, model } from "mongoose";
interface Iuser {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<Iuser>({
  name: {
    type: String,
    required: true,
    unique:true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
});

const User = model<Iuser>("User", userSchema);
export default User;
export const validateUser = (user: Iuser) => {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().min(5).max(255).required().email(),
    password: joi.string().min(5).max(1024).required(),
  });
  return schema.validate(user);
};
