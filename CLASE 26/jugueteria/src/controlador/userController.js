import { UserService } from "../servicios/userService.js";

class UserController{
    static getUsers = (req,res)=>{
        const users = UserService.getUsers();
        res.json({status: "success", data: users})
    }

    static saveUsers = (req,res)=>{
        const {name, email,age} = req.body;
        const newUser = {
            name,email,age
        }
        const result = UserService.saveUsers(newUser)
        res.json({status: "success", message: result})
    }
}

export {UserController}