import express from 'express';
import { AddProduct,getProduct, updateProductById, DeleteProductById } from '../Controllers/productController.js';
const productRouter = express.Router();
import checkUsers from '../middleware/authorisation.js';

productRouter.use('/add',checkUsers.admin,AddProduct)
productRouter.use('/productList', getProduct)
productRouter.use('/update', checkUsers.admin,updateProductById)
productRouter.use('/delete', checkUsers.admin,DeleteProductById)

export default productRouter