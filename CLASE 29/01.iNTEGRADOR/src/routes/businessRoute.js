import  { Router} from "express";
import {getAllBusiness, getBusinessById, createBusiness, addProducts} from "../controllers/businessController.js"

const router = Router();


router.get("/", getAllBusiness);
router.get("/:bid", getBusinessById);
router.post("/", createBusiness);
router.put("/:bid", addProducts);

export { router as businessRouter}; 