import {body} from "express-validator"

export const addProductValidator=[
    body("name","product name is required").notEmpty().isString(),
    body("price","product price is required").notEmpty().isNumeric(),
    
];
export const  validateCart = (req, res, next) =>{
    const { buyerId, productId, quantity } = req.body;
  
    if (!buyerId ||!productId ||!quantity) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    if (typeof quantity!== 'number' || quantity <= 0) {
      return res.status(400).json({ message: 'Invalid quantity' });
    }
  
    next();
  }
  