import express from "express";
import { Login, googleAuth, Signup } from "../controllers/auth.js";
const router = express.Router();

// Signup method 
router.post("/signup", Signup);
// Signin method
router.post("/login", Login);
// Signin with Goolge
router.post("/google", googleAuth);

export default router;
