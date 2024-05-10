import {body} from "express-validator";

const addUserValidation = [
    body("firstName", "FirstName is required"),
    body("Address","Address is required")
];

const allValidation ={
    addUserValidation
};
export default allValidation;