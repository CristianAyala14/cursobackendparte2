import { ordersDao, usersDao, businessDao } from "../dao/index.js";
import {v4 as uuidv4} from "uuid";

export const getAllOrders = async(req,res)=>{
    try {
        const orders = await ordersDao.getAllOrders();
        res.send({status:"success",payload: orders})
    } catch (error) {
        res.send({status:"error", message: error.message})
    }
}
export const getOrdersById = async(req,res)=>{
    try {
        const orderId = req.params.oid;
        const order = await ordersDao.getOrdersById(orderId)
        res.send({status:"success",payload:order})
    } catch (error) {
        res.send({status:"error", message: error.message})
    }
}
export const createOrders = async(req,res)=>{
    try {
        const {userId, businessid, products} = req.body;
        const user = await usersDao.getUsersById(userId);
        //acumulador que calcula el total de los productos (en este ejemplo solo es un producto de cada uno y no contempla la cantidad de un mismo producto.)
        const total = products.reduce((acc,i)=>{
            acc+=i.precio;
            return acc;
        },0)

        const id = uuidv4;
        const newOrder = {
            numberOrder: id,
            negocio: businessid,
            products: products,
            totalPrice: total,
            state: "pendiente"
        }

        const orderCreated = await ordersDao.createOrders(newOrder)

        res.send({status:"success",payload:"getAllOrders"})
    } catch (error) {
        res.send({status:"error", message: error.message})
    }
}
export const resolveOrders = async(req,res)=>{
    try {
        res.send({status:"success",payload:"getAllOrders"})
    } catch (error) {
        res.send({status:"error", message: error.message})
    }
}