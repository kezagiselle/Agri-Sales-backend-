import express from 'express';
import { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } from '../Controllers/orderController.js';

const orderRouter = express.Router();


orderRouter.post('/createOrder', createOrder)
orderRouter.get('/getorder', getAllOrders)
orderRouter.get('getorder/:id', getOrderById)
orderRouter.put('/updateOrder/:id', updateOrder)
orderRouter.delete('/deleteOrder', deleteOrder)


export default orderRouter