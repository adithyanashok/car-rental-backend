import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/users.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifytoken.js';

const router = express.Router()

// UPDATE USER
router.put("/:id", verifyUser, updateUser);
// DELETE USER
router.delete("/:id", verifyUser, deleteUser);
// GET ALL USER
router.get("/", verifyAdmin, getAllUser);
// GET A USER
router.get("/:id", verifyUser, getUser);

export default router;