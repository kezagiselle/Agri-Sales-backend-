import express from 'express';
import { AddProduct,getProduct, updateProductById, DeleteProductById, findProductByCategory } from '../Controllers/productController.js';
const productRouter = express.Router();
import checkUsers from '../middleware/authorisation.js';


productRouter.post('/add',checkUsers.admin,AddProduct)
productRouter.get('/productList', getProduct)
productRouter.put('/update/:id', checkUsers.admin,updateProductById)
productRouter.delete('/delete/:id', checkUsers.admin,DeleteProductById)
productRouter.get('/category/:category', findProductByCategory)


export default productRouter