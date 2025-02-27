import { ordersModel } from "../models/ordersModel.js";

export class ordersMongo{
    constructor(){
        this.model = ordersModel;
    }
    async getAllOrders(){
        try {
            const orders = await this.model.find();
            return orders;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async getOrdersById(id){
        try {
            const order = await this.model.findById(id)
            if(!order){
                throw new Error(`No existe la orden con ese ID: ${id}`)
            }
            return order;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async createOrders(order){
        try {
            const orderCreated = await this.model.create(order);
            return orderCreated;
        } catch (error) {
            throw new Error(error.message)
        }
    }
    async updateOrders(id, order){
        try {
            const orderUpdated = await this.model.findByIdAndUpdate(id, order, {new:true})
            return orderUpdated;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}