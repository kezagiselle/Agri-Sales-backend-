import express from "express";
const userRouter = express.Router();
import userControllers from "../Controllers/user.js";
import allValidation from "../utils/validation.js";
// import checkUsers from "../middleware/authorisation.js";

userRouter.post('/addUser',allValidation.addUserValidation,userControllers.addUser);
userRouter.get('/listUsers',userControllers.getAllUsers);
userRouter.get('/findById/:id',userControllers.findById);
userRouter.put('/update/:id',userControllers.updateUser);
userRouter.delete('/delete/:id',userControllers.deleteUser);

export default userRouter;