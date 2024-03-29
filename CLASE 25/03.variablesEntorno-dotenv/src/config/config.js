import dotenv from "dotenv";
dotenv.config();
//dotenv agrega al objeto process.env las variables .env
//ahora hacemos el archivo de configuracion.
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
