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
  }