import express from "express";
import {
  createCar,
  deleteCar,
  getAllCar,
  getCar,
  updateCar,
} from "../controllers/cars.js";
import { verifyAdmin } from "../utils/verifytoken.js";

const router = express.Router();
// ADD CARS
router.post("/", verifyAdmin, createCar);
// UPDATE CARS 
router.put("/:id", verifyAdmin, updateCar);
// DELETE CARS
router.delete("/:id", verifyAdmin, deleteCar);
// GET ALL CARS
router.get("/", getAllCar);
// GET A CAR
router.get("/find/:id", getCar);

export default router;
