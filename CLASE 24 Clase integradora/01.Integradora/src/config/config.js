import passport from "passport";
import passport_local from "passport-local";
import usersManager from "../dao/dbManager/usersManager.js"
import {createHash, isValidPassword} from "../utils.js";

//passport local strategy, convined with bcrypt
const usersManager = new usersManager(); //para acceder a usersDB
const LocalStrategy = passport_local.Strategy;
const initializePassport = async()=>{
    //registro
    passport.use("register", new LocalStrategy({usernameField: "email", session: false},
        async(req,email,password,done)=>{
            try {
                const {first_name, last_name, birthDate, dni, gender, rol} = req.body;
                if(!first_name || !last_name || !birthDate || !dni || !gender || !rol){
                    return done(null, false,{message:"Valores incompletos."})
                }
                const exist = await usersManager.getBy({email:email});
                if(exist){
                    return done(null, false,{message:"El usuario ya existe."})
                }

                const hashedPassword = await createHash(password);
                const newUser ={
                    first_name, last_name, email,birthDate, gender, dni, rol, password: hashedPassword
                }

                let result = await usersManager.saveUser(newUser)
                return done(null, result) 

            } catch (error) {
                done(error)
            }
        }
    ))
    //login
    passport.use("login", new LocalStrategy({passReqToCallback:true,usernameField: "email", session:false},
        async(email,password,done)=>{
            try {
                const user = await usersManager.getBy({email:email})
                if(!user){
                    return done(null, false,{message:"El usuario no existe."})
                }
                const passwordValidation = await isValidPassword(user,password)
                if(!passwordValidation){
                    return done(null, false,{message:"Credenciales incorrectas."})
                }
                return done(null,user)
            } catch (error) {
                return done(error)
            }
    })) 
    //configs finales de passportlocal
    passport.serializeUser((user,done)=>{
        done(null,user._id);
    })
    passport.deserializeUser(async(id,done)=>{
        let result = await usersManager.getBy({_id:id})
        return done(null,result)
    })
}

export default initializePassport;