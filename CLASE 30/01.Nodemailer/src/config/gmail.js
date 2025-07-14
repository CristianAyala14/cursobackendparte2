import nodemailer from "nodemailer";
import {options} from "./option.js"
//credenciales
const adminEmail = options.gmail.adminAccount;
const adminPass = options.gmail.adminPass;

//configurar el canal de comunicacion entre node y gmail
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port:587,
  auth:{
    user: "cristianpabloayalautn@gmail.com",
    pass: "dygmjkmtgyrgwnqd"
  },
  secure: false,
  tls:{
    rejectUnauthorized:false
  }
})

export {transporter};


