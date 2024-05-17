
import Product from "../models/productsModel.js";
import Cart from "../models/CartModel.js";
import Order from "../models/OrderModel.js";




  // Create a new order
  export const createOrder = async (req, res, next) => {
    try {
      const orderDetails = req.body;

      // Calculate the total price of the order
      let totalPrice = 0;
      for (const product of orderDetails.products) {
          const productInfo = await Product.findById(product.productId);
          if (!productInfo) throw new Error(`Product ${product.productId} not found.`);
          totalPrice += productInfo.price * product.quantity;
      }

      // Add totalPrice to the orderDetails object
      orderDetails.totalPrice = totalPrice;

      const productsToUpdate = orderDetails.products.map(product => ({
          productId: product.productId,
          quantity: product.quantity
      }));

      for (let productUpdate of productsToUpdate) {
          const product = await Product.findById(productUpdate.productId);
          if (!product) throw new Error(`Product ${productUpdate.productId} not found.`);

          await Product.findByIdAndUpdate(productUpdate.productId, { $inc: { productInStock: -productUpdate.quantity } });

          const cartEntry = await Cart.findOne({ buyerId: orderDetails.buyerId, productId: productUpdate.productId });
          if (cartEntry && cartEntry.quantity > 0) {
              await Cart.findByIdAndUpdate(cartEntry._id, { $inc: { quantity: -productUpdate.quantity } });
              if (cartEntry.quantity === 0) await Cart.findByIdAndDelete(cartEntry._id);
          }
      }

      const newOrder = new Order(orderDetails);
      await newOrder.save();

      res.status(201).json(newOrder);
  } catch (error) {
      console.error("Error placing order:", error);
      next(error);
  }




    // try {
    //   const { buyerId, products } = req.body;
  
      
    //   if (!buyerId ||!products || products.length === 0) {
    //     return res.status(400).json({ message: 'Missing required fields or no products provided' });
    //   }
  
      
    //   const productPromises = products.map(async ({ productId, quantity }) => {
    //     const product = await Product.findById(productId);
    //     return product.price * quantity;
    //   });
  
    //   const totalPrices = await Promise.all(productPromises);
    //   const totalPrice = totalPrices.reduce((acc, curr) => acc + curr, 0);
  
      
    //   const newOrder = new orderModel({
    //     buyerId,
    //     products,
    //     totalPrice,
    //   });
  
    //   // Save the order to the database
    //   await newOrder.save();
  
    //   // Return success response
    //   res.status(201).json(newOrder);
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ message: 'An error occurred while processing your request.' });
    // }
   
  }

  // Get all orders
  export const getAllOrders = async (req, res) => {
    try {
      const orders = await orderModel.find();
      res.status(200).json({message:'List od Order',Order:orders});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  // Get a single order by ID
  export const getOrderById = async (req, res) => {
    try {
        const order = await orderModel.findById(req.params.id);
        if (!order) {
          return res.status(404).json({ message: 'order not found with given Id' });
        }
        res.status(200).json(order);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
  }

  // Update an order by ID
  export const updateOrder = async (req, res) => {
    orderModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedOrder) => {
      if (!updatedOrder) {
          return res
              .status(404)
              .json({ msg: 'No order with this id was found.' });
      }
      res.json({ updatedOrder });
  })
  .catch((err) => {
      res.status(400).send(err);
  });

  }

  // Delete an order by ID
  export const deleteOrder = async (req, res) => {
    orderModel.findByIdAndDelete
    (req.params.id)
    .then(() => {
        res.status(204).json({ msg: `order deleted` });
    }).catch((err) => {
        res.status(404).send("order not found`");
    })
  }

