import { Router } from "express";
import LoginController from "./app/controllers/LoginController.js";

const router = Router();

router.post('/login', LoginController.store)

export default router
