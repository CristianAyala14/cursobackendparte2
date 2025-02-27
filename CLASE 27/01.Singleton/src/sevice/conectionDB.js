import mongoose from "mongoose";
const MONGO = "URL";

class ConectionDB{
    static #instance;
    constructor(){
        mongoose.connect(MONGO)
    }
    static async getInstance(){
        if(ConectionDB.#instance){
            console.log("Ya estas conectado");
            return ConectionDB.#instance
        }else{
            this.#instance = new ConectionDB();
            console.log("Ahora estas conectado a la base de datos");
            return this.#instance
        }
    }
}

export { ConectionDB};