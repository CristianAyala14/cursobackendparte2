import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    pedidos: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "orders"
        }
    ]
})

export const usersModel = mongoose.model("users", usersSchema);