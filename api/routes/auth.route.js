import express from "express";
//import { deleteUser, getUser } from "../controllers/user.controller.js";
//import { verifyToken } from "../middleware/jwt.js";
import {register,login,logout } from "../controllers/auth.controller.js"
 
const router = express.Router();
 router.post("/register",register) 
 router.post("/login",login)
 router.post("/logout",logout)
 
//router.delete("/:id", verifyToken, deleteUser);
//router.get("/:id", getUser);

export default router;