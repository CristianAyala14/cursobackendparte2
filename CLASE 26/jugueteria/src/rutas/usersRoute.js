import {Router} from "express";
import { UserController } from "../controlador/userController.js";

const router = Router();
router.get("/", UserController.getUsers)
router.post("/", UserController.saveUsers)

export {router as userRouter}