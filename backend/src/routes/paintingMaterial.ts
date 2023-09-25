const _ = require("lodash");
import express, { Request, Response } from "express";
import Material, { validateMaterial } from "../models/paintingMaterials";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const materials = await Material.find().sort("materialName");
    res.send(materials);
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server problem...");
  }
});
router.get("/:id", async (req, res) => {
  const id = req?.params?.id;
  try {
    const query = { _id: new ObjectId(id) };
    const material = await Material.findOne(query);
    res.send(material);
  } catch (error) {
    console.error(error);
  }
});
router.post("/", async (req: Request, res: Response) => {
  const { error } = validateMaterial(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let material = await Material.findOne({
    materialName: req.body.materialName,
  });
  if (material) return res.status(400).send("User already registered");
  material = new Material({
    materialName: req.body.materialName,
    img: req.body.img,
    price: req.body.price,
    discount: req.body.discount,
  });
  await material.save();
  res.send(material);
});
module.exports = router;
