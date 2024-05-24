
import {body} from "express-validator";

const addUserValidation = [
    body("firstName", "FirstName is required"),
    body("Address","Address is required")
];
const signUpValidation = [
    body("firstName", "First name is required").not().isEmpty(),
    body("lastName", "Last name is required").not().isEmpty(),
    body("email", "Email is required").not().isEmpty(),
    body("email", "invalid email").isEmail(),
    // body("role","role is required").not().isEmpty(),
    body("password", "password is required").not().isEmpty(),
    body("password", "Password should contain atleast 8 characters, uppercase and lowercase letters").isStrongPassword()
];
const signInValidation = [
    body("email", "Email is required").not().isEmpty(),
    body("email", "invalid email").isEmail(),
    body("password", "password is required").not().isEmpty(),
    body("password", "invalid password").isStrongPassword()
  ];
  const otpValidation = [
    body("otp","otp must be provided").not().isEmpty()
];
const forgotPasswordValidation = [
    body("email", "Email must be provided").not().isEmpty(),
];
const resetPasswordValidation = [
    body("password", "password must be provided").not().isEmpty(),
    body("password", "Password should contain atleast 8 characters, uppercase and lower case letters, numbers, and symbols").isStrongPassword(),
    // body("confirmPassword", "confirmPassword must be provided").not().isEmpty(),
    // body("confirmPassword", "confirmPassword must be provided with atleast 8 characters").isStrongPassword(),
    // body("confirmPassword", "Passwords do not match").custom((value, { req }) => value === req.body.password)   
];
const addProductValidator=[
     body("name","product name is required").notEmpty().isString(),
    body("price","product price is required").notEmpty().isNumeric(),
];
// const addDiseaseValidator = [
//   body("DiseaseName","Disease name is required").notEmpty().isString(),
//   body("Description","Description is required").notEmpty().isString()
// ];
const  validateCart = (req, res, next) =>{
    const { buyerId, productId, quantity } = req.body;
  
    if (!buyerId ||!productId ||!quantity) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    if (typeof quantity!== 'number' || quantity <= 0) {
      return res.status(400).json({ message: 'Invalid quantity' });
    }
  
    next();
  }




const allValidation ={
    addUserValidation,
    signUpValidation,
    signInValidation,
    otpValidation,
    forgotPasswordValidation,
    resetPasswordValidation,
    validateCart, 
    addProductValidator,
    // addDiseaseValidator
};
export default allValidation;
