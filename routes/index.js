import express from 'express';
import productRouter from './productRoutes.js';
import cartRouter from './cartRoutes.js';
import orderRouter from './orderRoutes.js';

const router = express.Router();

router.use('/products', productRouter)
router.use('/carts', cartRouter)
router.use('/orders', orderRouter)


export default router