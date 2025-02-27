import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    numberOrder: String,
    negocio: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "business"
    },
    user:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    products: [],
    totalPrice: Number,
    state: {
        type: String,
        enum: ["pending, completed, canceled"],
        default: "pending"
    }

})

export const ordersModel = mongoose.model("orders", ordersSchema);