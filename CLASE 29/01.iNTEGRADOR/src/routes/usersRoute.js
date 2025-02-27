import  { Router} from "express";
import {getUsers, getUsersById, saveUsers} from "../controllers/usersController.js"

const router = Router();


router.get("/", getUsers);
router.get("/:uid", getUsersById);
router.post("/", saveUsers);

export { router as usersRouter}; 