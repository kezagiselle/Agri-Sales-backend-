<<<<<<< HEAD
import {body} from "express-validator"
import { validationResult } from "express-validator"

  export const addProductValidator = [
    body("farmerId", "farmerId is required").optional().isMongoId(),
    body("productName", "product name is required").notEmpty().isString(),
    body("description", "description is required").notEmpty().isString(),
    body("price", "product price is required").notEmpty().isNumeric(),
    body("category", "category is required").notEmpty().isIn(['Vegetables', 'Fruits']),
    body("image", "image is required").optional().isString(),
  ];
  
    

// export const  validateCart = 
    
//   [
//     body('buyerId').exists().withMessage('Buyer ID is required'),
//     body('products').isArray().withMessage('Products array is required'),
//     body('products.*.productId').exists().withMessage('Each product must have a productId'),
//     body('products.*.quantity').exists().withMessage('Each product must have a quantity')
//   ]
=======

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
const  validateCart = (req, res, next) =>{
    const { buyerId, productId, quantity } = req.body;
>>>>>>> 5f64dadd8421a0cd785b7910a864a7e54db0f794
  
  

  export const addCartValidation = [
    body("quantity", "quantity is required").notEmpty().isNumeric()
    .withMessage("quantity must be a number").custom((value) => value > 0, 
    { message: "quantity must be greater than 0" }),

  ]



  export const validatedCart = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
<<<<<<< HEAD
  }
=======
  
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
    validateCart 
    addProductValidator
};
export default allValidation;
>>>>>>> 5f64dadd8421a0cd785b7910a864a7e54db0f794
