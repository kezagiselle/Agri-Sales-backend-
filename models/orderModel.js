import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    buyerId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    products: [
      {
        productId: {
             type: mongoose.Schema.Types.ObjectId, 
             ref: 'Product', 
             required: true
             },
        quantity: { 
          type: Number, 
          required: true }
      }
    ],
    totalPrice: { 
      type: Number, 
      required: true
     },
    isPaid: { 
      type: Boolean, 
      default: false 
    },
    
})
const Order = new mongoose.model('order', orderSchema);

export default Order;