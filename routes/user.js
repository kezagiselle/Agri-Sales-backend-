import express from "express";
const userRouter = express.Router();
import userControllers from "../Controllers/user.js";
import allValidation from "../utils/validation.js";
// import checkUsers from "../middleware/authorisation.js";

userRouter.post('/addUser',allValidation.addUserValidation,userControllers.addUser);
userRouter.get('/listUsers',userControllers.getAllUsers);
userRouter.get('/findByIdUser/:id',userControllers.findById);
userRouter.put('/updateUser/:id',userControllers.updateUser);
userRouter.delete('/deleteUser/:id',userControllers.deleteUser);

export default userRouter;