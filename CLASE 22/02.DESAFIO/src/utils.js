//funcion middelware para la estrategia, para poder controlar los errores y mensajes. (poner invalid token, o error token.)

import passport from "passport";
export const passportCall = (strategy)=>{
    return async (req, res, next)=>{
        passport.authenticate(strategy, {session: false}, function(err,user,info){
            if(err) return next(err);
            if(!user){
                return res.status(401).json({status: "error", error: info.toString()})
            }
            req.user = user;
            next()
        })(req,res,next) //esto es raro pero es lo q te devuelve la estrategia de autenticacion segun el profe, es una funcion anonima entonces se lo pasamos asi.
    }
}