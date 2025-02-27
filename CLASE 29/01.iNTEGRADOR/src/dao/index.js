import {connectDB}  from "../config/dbConnection.js";
import {usersMongo} from "./managers/usersManager.js";
import { businessMongo } from "./managers/businessManager.js";
import {ordersMongo} from "./managers/ordersManager.js";

connectDB();
export const usersDao = new usersMongo();
export const businessDao = new businessMongo();
export const ordersDao = new ordersMongo();