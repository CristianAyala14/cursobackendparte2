import { usersModel } from "../models/usersModel.js";

export class usersMongo{
    constructor(){
        this.model = usersModel;
    }
    async getAllUsers(){
        try {
            const users = await this.model.find();
            return users;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async getUsersById(id){
        try {
            const user = await this.model.findById(id)
            if(!user){
                throw new Error(`No existe el usuario con ese ID: ${id}`)
            }
            return user;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async createOrders(user){
        try {
            const userCreated = await this.model.create(user);
            return userCreated;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async updateUsers(id, user){
        try {
            const userUpdated = await this.model.findByIdAndUpdate(id, user, {new:true})
            return userUpdated;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}