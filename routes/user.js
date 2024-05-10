import express from "express";
const userRouter = express.Router();
import userControllers from "../Controllers/user.js";
import allValidation from "../utils/validation.js";

userRouter.post('/addUser',allValidation.addUserValidation,userControllers.addUser);
userRouter.get('/listUsers',userControllers.getAllUsers);
userRouter.get('/findById',userControllers.findById);
userRouter.put('/update',userControllers.updateUser);
userRouter.delete('/delete',userControllers.deleteUser);

export default userRouter;