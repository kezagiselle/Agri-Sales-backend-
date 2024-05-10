import express from "express";
const userRouter = express.Router();
import userControllers from "../Controllers/user";

userRouter.post('/addUser',userControllers.addUser);
userRouter.get('/listUsers',userControllers.getAllUsers);
userRouter.get('/findById',userControllers.findById)