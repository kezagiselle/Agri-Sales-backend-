import express from 'express';
import { AddProduct,getProduct, updateProductById, DeleteProductById, findProductByCategory } from '../Controllers/productController.js';
const productRouter = express.Router();

productRouter.post('/add', AddProduct)
productRouter.get('/productList', getProduct)
productRouter.put('/update/:id', updateProductById)
productRouter.delete('/delete/:id', DeleteProductById)
productRouter.get('/category/:category', findProductByCategory)

export default productRouter