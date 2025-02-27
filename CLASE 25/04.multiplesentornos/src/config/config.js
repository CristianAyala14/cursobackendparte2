import dotenv from "dotenv";
import __dirname from "../utils.js" //tenemos q decidir sobre cual de los env levantar el dotenv config
import path from "path"; //lo q te arma la url interna
import {Command} from "commander";

//configuracion de commander 
const program = new Command();
program
.option("-mode <modo>", "Modo de inicio", "dev")
program.parse() //setea en process.opts

//tomamos las variables que llegan de commander: 
const environment = program.opts();
const pathEnvironment = environment.Mode === "prod"? path.join(__dirname,"../.env.production") : path.join(__dirname,"../.env.development") //el .Mode es por "-mode" agregues los que agreges podes usarlos asi.

dotenv.config({path:pathEnvironment});

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const CORREO_ADMIN = process.env.CORREO_ADMIN;
const PASSWORD_ADMIN = process.env.PASSWORD_ADMIN;
const JWT = process.env.JWT;

export const config = {
    server:{
        port:PORT
    },
    mongo:{
        url: MONGO_URL
    },
    auth:{
        account: CORREO_ADMIN,
        pass: PASSWORD_ADMIN
    },
    jwt:{
        clave: JWT
    }
}
