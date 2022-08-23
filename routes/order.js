import express from "express";
import {
  createOrder,
  removeOrder,
  getAllOrder,
  getOrder,
  updateOrder,
} from "../controllers/order.js";
import { verifyAdmin } from "../utils/verifytoken.js";

const router = express.Router();
// ADD ORDERS
router.post("/", createOrder);
// UPDATE ORDERS
router.put("/:id", updateOrder);
// DELETE ORDERS
router.delete("/:id", removeOrder);
// GET ALL ORDERS
router.get("/", verifyAdmin, getAllOrder);
// GET A ORDER
router.get("/find/:id", getOrder);

export default router;
