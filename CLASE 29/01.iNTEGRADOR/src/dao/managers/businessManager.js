import { businessModel } from "../models/businessModel.js";

export class businessMongo{
    constructor(){
        this.model = businessModel;
    }
    async getAllBusiness(){
        try {
            const business = await this.model.find();
            return business
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async getBusinessById(id){
        try {
            const business = await this.model.findById(id)
            if(!business){
                throw new Error(`No existe el negocio con ese ID: ${id}`)
            }
            return business
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async createBusiness(business){
        try {
            const businessCreated = await this.model.create(business)
            return businessCreated
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async updateBusiness(id, business){
        try {
            const businessUpdated = await this.model.findByIdAndUpdate(id, business, {new:true})
            return businessUpdated;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}