import express from 'express';
import productRouter from './productRoutes.js';
import cartRouter from './cartRoutes.js';

const router = express.Router();

router.use('/products', productRouter)
router.use('/carts', cartRouter)


export default router