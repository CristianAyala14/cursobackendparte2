import mongoose from "mongoose";
import { options } from "./config";
export const connectDB = async () =>{
    try {
            await mongoose.connect(options.mongo.url)
        
    } catch (error) {
            console.log("Error al conectar con db")
    }
}