const _ = require("lodash");
import express, { Request, Response } from "express";
import Service, { validateService } from "../models/service";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const services = await Service.find().sort("name");
  res.send(services);
});

router.post("/", async (req: Request, res: Response) => {
  const { error } = validateService(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let service = await Service.findOne({ poster: req.body.poster });
  if (service) return res.status(400).send("User already registered");
  service = new Service({
    projectTitle: req.body.projectTitle,
    poster: req.body.poster,
    description: req.body.description,
    img2: req.body.img2,
    img3: req.body.img3,
    img4: req.body.img4,
  });
  try {
    await service.save();
    res.send(service);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
