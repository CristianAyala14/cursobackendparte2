import express from "express";
import {options} from "./config/options.js";
import { ordersRouter } from "./routes/ordersRoute.js";
import { businessRouter } from "./routes/businessRoute.js";
import { usersRouter } from "./routes/usersRoute.js";
const port = options.server.port|| 8080;
const app = express();
//middleware
app.use(express.json());
//routes
app.use("/api/orders", ordersRouter)
app.use("/api/business", businessRouter)
app.use("/api/users", usersRouter)


app.listen(port, ()=>console.log(`Servidor funcionando en el puerto ${port}`))