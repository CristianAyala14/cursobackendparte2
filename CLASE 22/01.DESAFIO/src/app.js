import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.static("./src/public"));
app.use(cookieParser());
app.listen(PORT, ()=>{
    console.log("Servidor funcionando")
})


app.post("/login", (req,res)=>{
    const {email, password} = req.body;
    if(email==="coder@coder.com" && password==="123456"){
        let token = jwt.sign({email,password}, "coderSecret", {expiresIn: "24h"})
        //res.cookie("token-cookie", token, {httpOnly: true}).json({status: "success"})
        res.cookie("token-cookie", token).json({status: "success"})

    }else{
        res.status(400).send({status: "Error", error: "Error de credenciales"})
    }
})