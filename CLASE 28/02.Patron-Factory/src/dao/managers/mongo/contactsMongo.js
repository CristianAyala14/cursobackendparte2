import { contactsModel } from "../../models/contactsModel.js";
export class ContactsMongo{
    constructor(){
        this.model = contactsModel
    }
    //asincronicos por q es base de datos y demora
     async get(){
        try {
            return await this.model.find()
        } catch (error) {
            throw new Error(`Error ${error.message}`)
        }
        
     }

     async post(contact){
        try {
            const contactCreated = await this.model.create(contact)

        } catch (error) {
            throw new Error(`Error ${error.message}`)
        }
     }

     async getById(id){
        try {
            const contact = await this.model.findById(id)
            if(!contact){
                throw new Error("Error no se encontro el usuario.")
            }
            return contact

        } catch (error) {
            throw new Error(`Error ${error.message}`)
        }
     }
}