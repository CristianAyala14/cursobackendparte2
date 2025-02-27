import  { Router} from "express";
import {getAllOrders, getOrdersById, createOrders, resolveOrders} from "../controllers/ordersController.js"

const router = Router();


router.get("/", getAllOrders);
router.get("/:oid", getOrdersById);
router.post("/", createOrders);
router.put("/:oid", resolveOrders);

export { router as ordersRouter}; // import { ordersRouter}
//export default router -> no importa el nombre con el que lo importo