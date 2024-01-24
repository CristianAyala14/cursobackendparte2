import {Router} from "express";
import usersManager from "../dao/dbManager/usersManager.js";
import coursesManager from "../dao/dbManager/coursesManager.js";

const usersManager = new usersManager();
const coursesManager = new coursesManager();
const router = Router();

router.get("/", async(req,res)=>{
    let users = await usersManager.getAll();
    res.render("users",{users})
})

router.get("/courses", async(req,res)=>{
    let courses = await coursesManager.getAll();
    res.render("courses",{courses})
})

export default router;