import express from 'express';
import productRouter from './productRoutes.js';
import userRouter from './user.js';

const router = express.Router();

router.use('/products',productRouter)
router.use('/users',userRouter);

export default router