import express from "express";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import passport from "passport";
import initializePassport from "./config/passportConfig.js";
import { passportCall , authorize} from "./utils.js";

const PORT = 8080;
const app = express();

// Middleware para analizar el cuerpo de la solicitud JSON
app.use(express.json());
app.use(express.static("./src/public"));
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());

app.listen(PORT, () => {
    console.log("Servidor funcionando");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "coder@coder.com" && password === "123456") {
        let token = jwt.sign({ email, password , role:"user"}, "coderSecret", { expiresIn: "24h" });
        res.cookie("token-cookie", token, { httpOnly: true }).json({ status: "success" });
    }else if(email === "coder@admin.com" && password === "123456"){
        let token = jwt.sign({ email, password , role:"admin"}, "coderSecret", { expiresIn: "24h" });
        res.cookie("token-cookie", token, { httpOnly: true }).json({ status: "success" });
    }
     else {
        res.status(400).send({ status: "Error", error: "Error de credenciales" });
    }
});

// Probamos autenticación y le ponemos session false para evitar trabajar con sesiones
// app.get("/current", passport.authenticate("jwt", { session: false }), (req, res) => {
//     console.log(req.user);
//     res.send(req.user);
// });

//usamos la misma extrategia pero con los  midelware de utils 
app.get("/current", passportCall("jwt"), authorize("user"), (req, res) => {
    console.log(req.user);
    res.send(req.user);
});

//podriamos tener otra ruta donde solo admita admin 
app.get("/admin", passportCall("jwt"), authorize("admin"), (req, res) => {
    console.log(req.user);
    res.send(req.user);
});