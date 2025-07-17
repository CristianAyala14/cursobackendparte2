import { Router } from "express";
import { CustomError } from "../services/custom_error_service";
import { EError } from "../enums/EError";
import { generateUserErrorInfo } from "../services/UserErrorInfo";
import { generateUserErrorParam } from "../services/useErrorParam";


const router = Router();
const users = [];


router.get("/", (req,res)=>{
  res.json({status: "success", data: users})
})

router.post("/", (req,res)=>{
  const {first_name, last_name, email} = req.body;
  if(!first_name  || !last_name || !email ){
    CustomError.createError({
      name:"User create error",
      cause: generateUserErrorInfo(req.body),
      message: "Error creando el usuario",
      errorCode: EError.INVALID_PARAM
    })
  }

  const newUser = { first_name, last_name, email, uid: users.length+1}
  users.push(newUser)
  res.json({status:"success", data: users})
})

router.get("/:uid", (req,res)=>{
  const {uid} = req.params;
  const userId = parseInt(uid)
  if(Number.isNaN(userId)){
    CustomError.createError({
      name:"User getbyid error",
      cause: generateUserErrorParam(uid),
      message: "Error al buscar un usuario por id",
      errorCode: EError.INVALID_PARAM
    })
  }
  const user = users.find(u=>u.id === userId)
  res.json({status:"success", data: user})
})

export {router as usersRouter}