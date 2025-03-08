import { Router } from "express";
import { addToHistory, getUserHistory, login, register } from "../controllers/userController.js";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/history").post(addToHistory); 
router.route("/history").get(getUserHistory); 

export default router;