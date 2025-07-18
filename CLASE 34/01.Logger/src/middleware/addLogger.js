import winston from "winston";
import path from "path";
import dotenv from "dotenv";

import { __dirname } from "../config/__dirname.js";

dotenv.config();

const devLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({level:"verbose"})
  ]
})
 
const prodLogger = winston.createLogger({
  transports: [
    new winston.transports.Console({level:"http"}),
    new winston.transports.File({filename: path.join(__dirname,"../logs/errores.log"), level:"warn"})
  ]
})

const currentEnviroment = process.env.NODE_ENV || "development";

export const addLogger = (req,res, next)=>{
  if(currentEnviroment === "development"){
    req.logger = devLogger;
    console.log("DEV")

  }else{
    req.logger = prodLogger;
        console.log("PROD")

  }
  req.logger.http(`${req.url} - method: ${req.method}`)
  next()
}