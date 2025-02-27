import mongoose from "mongoose";

const businessSchema = new mongoose.Schema({
    name: String,
    products: []
})

export const businessModel = mongoose.model("business", businessSchema);