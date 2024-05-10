import express from 'express';
import { AddProduct,getProduct, updateProductById, DeleteProductById } from '../Controllers/productController.js';
const productRouter = express.Router();

productRouter.use('/add', AddProduct)
productRouter.use('/productList', getProduct)
productRouter.use('/update', updateProductById)
productRouter.use('/delete', DeleteProductById)

export default productRouter