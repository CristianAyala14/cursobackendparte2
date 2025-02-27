import {Router} from "express";
import { JugueteController} from "../controlador/jugueteController.js"

const router = Router();
//definimos ruta de juguete
router.get("/", JugueteController.getJuguetes)
router.post("/", JugueteController.saveJuguetes)

export {router as jugueteRouter};