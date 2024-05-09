import Product from "../models/productsModel.js";


export const AddProduct = async () =>{
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

export const getProduct = async () =>{
    try{
        const getProduct = await Product.find({farmerId} = re.params)
        res.status(200).json({
            getProduct
        })

    }
    catch(error){
        res.status(500).json({ message: error.message });

    }
}

export const updateProductById = async () =>{
    const ProductId = req.query
    const updateProduct = req.body
    try{
        const update = await Product.findById(ProductId, updateProduct, {new : true})
        if (!update) {

           return res.status(404).json({ message: 'Product not found' }); 
        }

        return res.status(200).json({ 
            message: 'Product updated successfully', 
            update 
    });
            

    }
    catch(error){
        res.status(500).json({ message: error.message });

    }
}

export const DeleteProductById = (req, res) => {
    try{

    }
    catch(error){}

}