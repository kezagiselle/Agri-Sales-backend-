import express from 'express';
import { addProductToCart, getCart, removeProductFromCart, updateProductInCart } from '../Controllers/cartController.js';
// import { validatedCart  } from '../utils/validation.js';
const cartRouter = express.Router();


<<<<<<< HEAD
cartRouter.post('/addToCart', addProductToCart)
cartRouter.delete('/removeCart', removeProductFromCart)
cartRouter.get('/getCart/:id', getCart)
=======

cartRouter.post('/add', addProductToCart)

cartRouter.get('/add', addProductToCart)
cartRouter.delete('/remove', removeProductFromCart)
>>>>>>> 5f64dadd8421a0cd785b7910a864a7e54db0f794
cartRouter.put('/update', updateProductInCart)


export default cartRouter;