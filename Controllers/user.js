import userModel from "../models/user.js";
import NotFoundError from "../Errors/NotFoundError.js";
import BadRequestError from "../Errors/BadRequestError.js";
import { validationResult} from "express-validator";
import asyncWrapper from "../middleware/async.js";

const addUser = asyncWrapper(async(req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return next(new BadRequestError(errors.array()[0].msg));
    }
    const users = await userModel.create(req.body);
    res.status(201).json({users});
});

const getAllUsers = asyncWrapper(async(req,res,next) =>{
    const users = await userModel.find({});
    if(users){
        return res.status(201).json({
            nbHits: users.length,
            users
        });
    }
})

const findById = asyncWrapper(async(req,res,next) =>{
    const userId = req.params.id;
    const foundUser = await userModel.findById(userId);
    if(!foundUser){
        return next(new NotFoundError('user not found'));
    }
    return res.status(200).json({foundUser});
});
const updateUser = asyncWrapper(async(req,res,next) =>{
    const userId = req.params.id;
    const updates = req.body;

    const updatedUser = await userModel.findByIdAndUpdate(userId,updates, {new: true});
    if(!updatedUser){
        return next(new NotFoundError('user not found'));
    };
    res.status(200).json(updatedUser);
});

const deleteUser = asyncWrapper(async(req,res,next) =>{
    const userId = req.params.id;
    const deletedUser = await userModel.findByIdAndDelete(userId);
    if(!deletedUser){
        return next(new NotFoundError('user not found'));
    }
    res.status(200).json({message: 'User deleted Successfully'});
});
const userControllers = {
    addUser,
    getAllUsers,
    findById,
    updateUser,
    deleteUser
}
export default userControllers;