// import mongoose from 'mongoose';
// import { Schema } from 'mongoose';

// const productSchema = new Schema({
//   sellerId: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   productName: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   productCategory: {
//     type: String,
//     required: true
//   },
//   stockLevel: Number,
//   productPrice: Number,
//   productCurrency: String,
//   productDiscount: Number,
//   productDescription: String,
//   productPictures: [{
//     url: String,
//     imgId: String
//   }],
//   productThumbnail: String,
//   productStatus: Boolean,
//   expireDate: Date,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },


// const Product = mongoose.model('Product', productSchema);

// export default Product;





import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  farmerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
  productInStock:{
    type:Number,
    required:true
},
  category:{
    type: String,
    required:false,
    enums:['Vegetables,Fruits']
  },
  image: {
    type: String,
    required:true,
    
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isExpired: Boolean,
  isFeatured: Boolean,
  featureEndDate: Date
}, {
  timestamps: true
}
);

const Product = new mongoose.model('Product', ProductSchema);
export default Product;
