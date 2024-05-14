import buyerModel from "../models/buyerSignUp.js";
import asyncWrapper from "../middleware/async.js";
import bcrypt from 'bcrypt';
import BadRequestError from "../Errors/BadRequestError.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken"
import Token from '../models/authToken.js';
import dotenv from "dotenv"
dotenv.config()
import otpGenerator from "../utils/otp.js";
import sendEmail from '../utils/sendEmail.js';
import UnauthorizedError from '../Errors/UnAuthorisedError.js';
import { serveWithOptions } from 'swagger-ui-express';
import { json } from 'express';

const signUp = asyncWrapper(async (req, res, next) => {
    //validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
    };
    //checking if  the user is already in using the email
    const foundBuyer = await buyerModel.findOne({ email: req.body.email });
    if (foundBuyer) {
        return next(new BadRequestError("Email already in use"));
    };
    //hashing the password
    const hashedPassword = await bcrypt.hashSync(req.body.password, 10);
    //Generate the otp
    const otp = otpGenerator();
    const otpExpirationDate = new Date().getTime() + (60 * 1000 * 5)
    //Recording the user to the database
    const newBuyer = new buyerModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        email: req.body.email,
        password: hashedPassword,
        otp: otp,
        otpExpires: otpExpirationDate,
    });

    const savedBuyer = await newBuyer.save();
    sendEmail(req.body.email, "Verify your account", `Your otp is ${otp}`);
    if (savedBuyer) {
        return res.status(201).json({
            message: "user account created!",
            user: savedBuyer
        });
    }
});
const validateOtp = asyncWrapper(async (req, res, next) => {
    //validate
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
    }
    //checking if the given otp is stored in the database
    const foundBuyer = await buyerModel.findOne({ otp: req.body.otp });
    if (!foundBuyer) {
        next(new UnauthorizedError('Authorization is denied'));
    }
    //checking if the otp is expired or not.
    if (foundBuyer.otpExpires < new Date().getTime()) {
        next(new UnauthorizedError('otp expired'));
    }

    //updating a user to be verified
    foundBuyer.verified = true;
    const savedBuyer = await foundBuyer.save();
    if (savedBuyer) {
        return res.status(201).json({
            message: "user account verified",
            user: savedBuyer
        });
    }
});
const SignIn = asyncWrapper(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
    }

    // find user
    const foundBuyer = await buyerModel.findOne({ email: req.body.email });
    if (!foundBuyer) {
        return next(new BadRequestError("Invalid email or password!"));
    };

    //check account verification
    if (!foundBuyer.verified) {
        return next(new BadRequestError("Your account is not verified!"));
    }

    //verify password
    const isPasswordVerfied = await bcrypt.compareSync(req.body.password, foundBuyer.password);
    if (!isPasswordVerfied) {
        return next(new BadRequestError("Invalid email or password!"));
    }
    //generate token
    const token = jwt.sign({ id: foundBuyer._id, email: foundBuyer.email }, process.env.JWT_SECRET, { expiresIn: "3h" });
    const options = {
        expiresIn: "3h",
        httpOnly: true
    };

    res.status(200).cookie("token", token, options).json({
        message: "User logged in!",
        token: token,
        user: foundBuyer
    })
});
const forgotPassword = asyncWrapper(async (req, res, next) => {
    //validate
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
    }
    //find user
    const foundBuyer = await buyerModel.findOne({ email: req.body.email });
    if (!foundBuyer) {
        return next(new BadRequestError("Your email is not registered!"));
    };
    //Generate token
    const token = jwt.sign({ id: foundBuyer.id }, process.env.JWT_SECRET, { expiresIn: "3h" });

    //Recording the token to the database
    await Token.create({
        token: token,
        user: foundBuyer._id,
        expirationDate: new Date().getTime() + (60 * 1000 * 30),
    });
    const link = `http://localhost:4000/reset-password?token=${token}&id=${foundBuyer.id}`;
    const emailBody = `Click on the link bellow to reset your password\n\n${link}`;

    await sendEmail(req.body.email, "Reset your password", emailBody);

    res.status(200).json({
        message: "We sent you a reset password link on your email!",
    });
});

const resetPassword = asyncWrapper(async (req, res, next) => {
    // Validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
    }

    const token = req.get('Authorization');
    console.log(token);

    // Verify token
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    console.log(decoded);
    if (!decoded) {
        return next(new BadRequestError("Invalid token!"));
    }

    const recordedToken = await Token.findOne({ token: req.body.token });

    if (decoded.id != req.body.id || recordedToken.user != req.body.id) {
        return next(new BadRequestError("Invalid token!"));
    }

    if (new Date(recordedToken.expirationDate).getTime() < new Date().getTime()) {
        return next(new BadRequestError("Token expired!"));
    }
    //find user
    const foundBuyer = await buyerModel.findById(req.body.id);
    if (!foundBuyer) {
        return next(new BadRequestError("User not found!"));
    };

    //Deleting the user token
    await Token.deleteOne({ token: req.body.token });

    //Harshing the user password
    const hashedPassword = await bcrypt.hashSync(req.body.password, 10);

    //updating the user password
    foundBuyer.password = hashedPassword;

    const savedBuyer = await foundBuyer.save();
    if (savedBuyer) {
        return res.status(200).json({
            message: "Your password has been reset!",
        })
    }
});
const deleteBuyer = asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const buyer = await buyerModel.findByIdAndDelete(id);
    if (!buyer) {
        return next(createCustomerError(`No user with id ${id}`, 404));
    }
    res.status(200).json({ message: 'User deleted' });
});


const buyerControllers = {
    signUp,
    SignIn,
    validateOtp,
    forgotPassword,
    resetPassword,
    deleteBuyer
};
export default buyerControllers;
