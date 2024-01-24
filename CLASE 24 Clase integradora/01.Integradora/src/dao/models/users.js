import mongoose from "mongoose";
const usersCollection = "Users";
const usersSchema = new mongoose.Schema({
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    dni:Number,
    birthDate: Date,
    password:{
        type: String,
        require: true
    },
    gender:{
        type: String,
        enum:["M", "F"]
    },
    rol:{
        type: String,
        enum:["student", "teacher"],
        default: "student"
    },
    
    courses:{
        type:[
            {
                type: String
            }
        ],
        default: []
    }
});
const usersModel = mongoose.model(usersCollection,usersSchema)
export default usersModel;