import express from "express";
import { addLogger } from "./middleware/addLogger.js";

const PORT = 8080;
const app = express();

app.listen(PORT, ()=>{
  console.log("servidor funcionando en 8080")
})


//middleware

app.use(addLogger)
app.get("/",(req,res)=>{
  req.logger.warn("Error!")
  res.send("Bienvenido")
})