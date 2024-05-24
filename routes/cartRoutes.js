import express from 'express';
import { addProductToCart, getCart, removeProductFromCart, updateProductInCart } from '../Controllers/cartController.js';
// import { validatedCart  } from '../utils/validation.js';
const cartRouter = express.Router();
import allValidation from '../utils/validation.js';



cartRouter.post('/addToCart', addProductToCart)
cartRouter.delete('/removeCart', removeProductFromCart)
cartRouter.get('/getCart/:id', getCart)
// cartRouter.post('/add', addProductToCart)
// cartRouter.get('/getCartList', getAllCart)
cartRouter.delete('/remove/:id', removeProductFromCart)
cartRouter.put('/update/:id', updateProductInCart)


export default cartRouter;