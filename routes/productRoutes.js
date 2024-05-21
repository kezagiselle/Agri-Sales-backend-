import express from 'express';
import { AddProduct, getProduct, updateProductById, DeleteProductById, findProductByCategory } from '../Controllers/productController.js';
import { addProductValidator } from '../utils/validation.js';
import { upload } from '../utils/uploadImage.js';
const productRouter = express.Router();
import checkUsers from '../middleware/authorisation.js';

productRouter.post('/upload-image',  upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
  
    res.status(200).send(`File ${req.file.filename} uploaded successfully.`);
  });


productRouter.post('/addProduct', checkUsers.admin,addProductValidator, upload.single('image'), AddProduct);
productRouter.get('/productList', getProduct);
productRouter.put('/update/:id',checkUsers.admin,updateProductById);
productRouter.delete('/delete/:id', DeleteProductById);
productRouter.get('/category/:category', findProductByCategory);

export default productRouter;
