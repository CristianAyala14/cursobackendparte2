import express from "express";
import { operacioncompleja } from "./process/childProcess.js";
import {fork} from "child_process";
import path from "path";
import __dirname from "./utils.js";

const PORT =8080
const app = express();
app.listen(PORT, ()=>{`Servidor funcionando en el peurto ${PORT}`});

app.get("/sumabloqueante", (req,res)=>{
    const resultado = operacioncompleja();
    res.send(`El resultado de la suma es: ${resultado}`)
});

app.get("/sumanobloqueante", (req,res)=>{
    //creo el proceso hijo
    const child = fork(path.join(__dirname, "/process/childProcess.js"))
    child.send("start");
    child.on("message", (result)=>{
        res.send(`El resultado de la suma es: ${result}`)
    })

    const resultado = operacioncompleja();
    res.send(`El resultado de la suma es: ${resultado}`)
});


let visitas = 0;
app.get("/", (req,res)=>{
    visitas++;
    res.send(`Bienvenido visitante: ${visitas}`)
})