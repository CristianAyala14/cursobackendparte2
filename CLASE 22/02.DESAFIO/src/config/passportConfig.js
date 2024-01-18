//configuramos el passport

import passport from "passport";
import Pjwt from "passport-jwt";

const JWTStrategy = Pjwt.Strategy;
const ExtractJWT = Pjwt.ExtractJwt;



const initializePassport = ()=>{
    passport.use("jwt", new JWTStrategy(
        {
            jwtFromRequest:ExtractJWT.fromExtractors([cookieExtractor]),
            secretOrKey: "coderSecret"
        },
        async(jwt_payload,done)=>{
           try{
                return done(null, jwt_payload)
           } catch (error) {
                return done(error)
           }
        }
    ) )
}

 const cookieExtractor = req =>{
    let token = null; //no sabemos si viene o no, asi q tenemos q ponerlo en null para devolverle algo
    if(req && req.cookies){
        token = req.cookies["token-cookie"]
    }
    return token;
 }


 export default initializePassport;