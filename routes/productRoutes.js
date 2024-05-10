import express from 'express';
import { AddProduct,getProduct, updateProductById, DeleteProductById, findProductByCategory } from '../Controllers/productController.js';
const productRouter = express.Router();

productRouter.use('/add', AddProduct)
productRouter.use('/productList', getProduct)
productRouter.use('/update/:id', updateProductById)
productRouter.use('/delete/:id', DeleteProductById)
productRouter.use('/category/:category', findProductByCategory)

export default productRouter