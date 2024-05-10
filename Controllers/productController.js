import Product from "../models/productsModel.js";


export const AddProduct = async (req,res,next) =>{
    const createProduct = req.body
    try{
        const createdProduct = await Product.create(createProduct)
        res.status(201).json({
         message: 'Product added successfully', 
         createdProduct
    });

    }catch(error){
        res.status(500).json({ message: error.message });

    }

}

export const getProduct = async (req,res,next) =>{
    const {farmerId} = req.params
    try{
        const getProduct = await Product.find({farmerId})
        res.status(200).json({
            getProduct
        })

    }
    catch(err){
        res.status(500).json({ message: err.message });

    }
}

export const updateProductById = async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
        
        if (!updatedProduct) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        res.status(200).json({
          success: true,
          product: updatedProduct,
        });
      } catch (err) {
       
        console.error(err);
        res.status(500).json({ message: 'An error occurred while updating the product.' });
      }
    };

export const DeleteProductById = async (req,res,next) => {
    try {
      
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    
        if (!deletedProduct) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        res.status(200).json({
          success: true,
          message: 'Product deleted successfully',
        });
      } catch (err) {
       
        console.error(err);
        res.status(500).json({ message: 'An error occurred while deleting the product.' });
      }
}

export const findProductByCategory = async (req, res, next) => {
    try {
        const categoryName = req.params.categoryName;
        const products = await Product.find({ category: categoryName });
    
        if (products.length === 0) {
          return res.status(404).json({ message: 'No products found with the given category.' });
        }

        res.status(200).json(products);
      } catch (err) {
      
        console.error(err);
        res.status(500).json({ message: 'An error occurred while finding products by category.' });
      }
    };