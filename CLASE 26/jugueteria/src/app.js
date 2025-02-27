//configuracion > persistencia > servicio > controlador > ruta > app

import express from "express"
import { options } from "./config/config.js"
import { userRouter } from "./rutas/usersRoute.js";
import { jugueteRouter } from "./rutas/juguetesRouter.js";

const app = express();
const PORT = options.server.port
//middleware
app.use(express.json());
app.listen(PORT, ()=>{console.log("Servidor funcionando")})
//Rutas
app.use("/api/users", userRouter) 
app.use("/api/juguetes", jugueteRouter) 
