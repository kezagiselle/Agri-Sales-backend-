import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farmer',
    required: false,
  },
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category:{
    type: String,
    required:false,
    enums:['Vegetables,Fruits']
  },
  image: {
    type: String,
    required:false
  }
});

const Product = new mongoose.model('Product', ProductSchema);
export default Product;
