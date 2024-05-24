import express from 'express';
import { AddProduct, getProduct, updateProductById, DeleteProductById, findProductByCategory, countProduct } from '../Controllers/productController.js';
import { addProductValidator } from '../utils/validation.js';
import { upload } from '../utils/uploadImage.js';
const productRouter = express.Router();



productRouter.post('/addProduct', addProductValidator, upload.single('productImage'), AddProduct);
productRouter.get('/productList', getProduct);
productRouter.put('/update/:id',updateProductById);
productRouter.delete('/delete/:id', DeleteProductById);
productRouter.get('/category/:category', findProductByCategory);
productRouter.get('/productCount', countProduct);

export default productRouter;
