import { Router } from "express";
import UserController from "./app/controllers/UserController.js";

const router = Router();

router.post('/login', UserController.store)
router.post('/register', UserController.create)
router.get('/', UserController.index)

export default router
