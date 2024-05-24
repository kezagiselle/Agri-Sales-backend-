import express from 'express';
import Cart from "../models/CartModel.js";


export const addProductToCart = 
async (res, req, next) =>{
  validateCart(res, req, next);
    try {
        const { buyerId, productId, quantity} = req.body;
        const existingCart = await Cart.findOne({ buyerId, productId, totalPrice, });

        if (existingCart) {
          
          existingCart.quantity += quantity;
          existingCart.totalPrice += quantity * existingCart.product.price; 
          await existingCart.save();
        } else {
          
          const newCartItem = new Cart({
            buyerId,
            productId,
            quantity,
            totalPrice: quantity * req.product.price, 
          });
          await newCartItem.save();
        }
    
        res.status(200).json({ message: 'Product added to cart successfully.' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred while adding the product to the cart.' });
      }
    };

    export const updateProductInCart = async (req, res, next) => {
        try {
          const { buyerId, productId, quantity } = req.body;
          const updatedItem = await Cart.findOneAndUpdate(
            { buyerId, productId },
            { $set: { quantity, totalPrice: quantity * req.product.price } }, 
            { new: true } 
          );
          if (!updatedItem) {
            return res.status(404).json({ message: 'Product not found in the cart.' });
          }
      
          res.status(200).json({ message: 'Product quantity updated in cart successfully.' });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'An error occurred while updating the product quantity in the cart.' });
        }
      };


      export const removeProductFromCart = async (req, res, next) => {
        try {
          const { buyerId, productId } = req.body;
          const removedItem = await Cart.findOneAndDelete({ buyerId, productId });
          if (!removedItem) {
            return res.status(404).json({ message: 'Product not found in the cart.' });
          }
      
          res.status(200).json({ message: 'Product removed from cart successfully.' });
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'An error occurred while removing the product from the cart.' });
        }
      };