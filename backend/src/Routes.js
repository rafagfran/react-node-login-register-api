import { Router } from "express";
import LoginController from "./app/controllers/LoginController.js";

const router = Router();

router.get('/teste', LoginController.teste)


router.post('/login', LoginController.store)


export default router