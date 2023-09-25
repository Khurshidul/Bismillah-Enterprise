const bcrypt = require("bcrypt");
const _ = require("lodash");

import express, { Request, Response } from "express";

import User, { validateUser } from "../models/user";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { error } = validateUser(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  let user = await User.findOne({
    email: req.body.email,
  });
  if (user) return res.status(200).send("User already registered");
  user = new User(_.pick(req.body, ["name", "email", "password"]));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  try {
    user = await user.save();
    return res.send(_.pick(user, ["_id", "name", "email"]));
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req: Request, res: Response) => {
  try {
    const todos = await User.find();
    res.send(todos);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server problem...");
  }
});

module.exports = router;
