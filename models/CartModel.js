import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CartSchema = new mongoose.Schema({
  buyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default:0
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  transactionStatus: {
    type: String,
    enum: ['pending', 'shipped', 'delivered'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Cart = new mongoose.model('carts', CartSchema);

export default Cart;


// buyerId: {
//   type: Schema.Types.ObjectId,
//   required: true,
//   ref: 'User' 
// },
// products: [{
//   productId: {
//     type: Schema.Types.ObjectId,
//     required: true,
//     ref: 'Product' 
//   },
//   quantity: {
//     type: Number,
//     required: true
//   }
// }],
// totalPrice: {
//   type: Number,
//   required: true
// },
//  transactionStatus: {
//   type: String,
//   enum: ['pending', 'shipped', 'delivered'],
//   default: 'pending',
// },
// createdAt: {
//   type: Date,
//   default: Date.now
// },
// updatedAt: {
//   type: Date,
//   default: Date.now
// }
// });
