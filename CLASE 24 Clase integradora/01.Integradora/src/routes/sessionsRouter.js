import {Router} from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = Router();
//registro
router.post("/register", passport.authenticate("register", {passReqToCallback: true,session: false, failureRedirect:"api/sessions/failregister", failureMessage: true}), async(req,res)=>{
    res.send({
        status: "success",
        message: "Usuario registrado",
        payload: req.user._id
    })
});
     //fail register
router.get("/failregister", async(req,res)=>{
    console.log("Fallo el registro")
    res.send("Fallo el registro.")
})

//login
router.post("/login", passport.authenticate("login", {session: false, failureRedirect:"api/sessions/faillogin"}), async(req,res)=>{
    //nose q es esto de serializerUser.
    const serializeUser ={
        id: req.user._id,
        name:  `${req.user.first_name} ${req.user.last_name} `,
        role: req.user.rol,
        email: req.user.email
    }
    const token = jwt.sign(serializeUser, "CoderSecret", {expiresIn: "1h"})
    res.cookie("coderCookie", token, {maxAge: 360000}).send({
        status: "success",
        message: "Usuario logeado",
        payload: serializeUser
    })
});
     //fail login
router.get("/faillogin", async(req,res)=>{
    console.log("Fallo el login");
    res.send("Fallo el login.")

})

export default router;