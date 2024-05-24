import express from 'express';
import { addProductToCart, removeProductFromCart, updateProductInCart } from '../Controllers/cartController.js';
const cartRouter = express.Router();
import allValidation from '../utils/validation.js';



cartRouter.post('/add', addProductToCart)

cartRouter.get('/add', addProductToCart)
cartRouter.delete('/remove', removeProductFromCart)
cartRouter.put('/update', updateProductInCart)


export default cartRouter;