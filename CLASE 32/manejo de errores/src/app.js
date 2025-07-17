import express from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { usersRouter } from "./routes/userRoute";
const port = options.server.port|| 8080;
const app = express();
//middleware
app.use(express.json());
app.listen(port, ()=>console.log(`Servidor funcionando en el puerto ${port}`))
//
app.use("/api/users", usersRouter)
app.use(errorHandler);
