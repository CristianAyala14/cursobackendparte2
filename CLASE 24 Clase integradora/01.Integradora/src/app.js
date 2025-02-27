import express from "express";
import __dirname from "./utils.js";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import passport from "passport";
import cookieParser from "cookie-parser";
import initializePassport from "./config/config.js";
import viewsRouter from "./routes/viewsRouter.js";
import sessionsRouter from "./routes/sessionsRouter.js"
const MONGO = " ";
const PORT = 8080;
const app = express();
const connection = mongoose.connect(MONGO);

//vies template engine
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname+"/views");
app.set("view engine", "handlebars");

//middlewares
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//pasport
app.use(passport.initialize);
initializePassport();
app.use(cookieParser());

//routes
app.use("/",viewsRouter);
app.use("/api/sessions", sessionsRouter);
const server = app.listen(PORT, ()=>{
    console.log("PUERTO FUNCIONANDO")
});

