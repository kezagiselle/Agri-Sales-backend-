import express from 'express';
import productRouter from './productRoutes.js';
import userRouter from './user.js';
import buyerRouter from './buyerSignUp.js';
import farmerRouter from './FarmerSignUp.js';
import tokenRouter from './userToken.js';

const router = express.Router();

router.use('/products',productRouter)
router.use('/users',userRouter);
router.use('/buyer',buyerRouter);
router.use('/farmer',farmerRouter);
router.use('/token',tokenRouter);

export default router