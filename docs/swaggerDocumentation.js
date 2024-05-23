const swaggerDocumentation = {
    
    "swagger": "2.0",
    "info": {
        "title": "AGRI-SALES API",
        "description": "This is the API Specification for the AGRI-SALES backend server",
        "version": "1.0.0",
        "contact": {
            "email": "uwasandrine99@gmail.com"
        },
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/license/mit"
        },
        "externalDocs": {
            "description": "Get source code",
            "url": "https://github.com/kezagiselle/Agri-Sales-backend-"
        }
    },
    
    "servers": [
      {
        "url": "http://localhost:6000",
        "description": "Local server"
      },
      {
        "url": "",
        "description": "Production server"
      }
    ],
    "schemes": ["http", "https"],
    "tags": [
        {
            "name": "User",
            "description": "Operations pertaining to user"
        },
        {
            "name": "Product",
            "description": "Operations pertaining to product"
        },
       
        {
            "name": "order",
            "description": "Operations pertaining to orders"
        },
        {
            "name": "carts",
            "description": "Operations pertaining to carts"
        },
        {
            "name": "order",
            "description": "Operations pertaining to orders"
        }
    ],
    "paths": {
        "/api/agri-sales/users/addUser": {
            "post": {
                "tags": ["user"],
                "summary": "Registration of user",
                "description": "Register a new user  with the provided details",
                
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    ],
                
                "responses": {
                    "201": {
                        "description": "User created successfully",
                        
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request - Validation errors",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/agri-sales/users/": {
            "post": {
                "tags": ["user"],
                "summary": "Login existing user",
                "description": "Login existing user with the provided details",
                
                    
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "schema": {
                                "$ref": "#/components/schemas/User"
                            }
                        }
                    ],
                
                "responses": {
                    "201": {
                        "description": "User Login",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/User"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request - Validation errors",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/agri-sales/products/addProduct": {
            "post": {
                "tags": ["product"],
                "summary": "Add a new product",
                "description": "Creates a new product with the provided details",
                
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "schema": {
                                "$ref": "#/components/schemas/Product"
                            }
                        }
                    ],
                
                "responses": {
                    "201": {
                        "description": "Product created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Product"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request - Validation errors",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/agri-sales/products/productList": {
            "get": {
                "tags": ["product"],
                "summary": "Get all products",
                "description": "Retrieves a list of all product",
                "responses": {
                    "200": {
                        "description": "product retrieved successfully",
                        "parameters": [
                            {
                              "in": "query",
                              "name": "all",
                  
                              "required": true,
                              "description": "product object"
                            }
                          ],
                          "responses": {
                            "200": {
                                "description": "List of product retrieved successfully",
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Product"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/agri-sales/products/update/:id": {
            "put": {
                "tags": ["product"],
                "summary": "Update a product",
                "description": "Updates an existing product with the provided details",
                
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "ID of the product to update",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "in": "body",
                            "name": "body",
                            "schema": {
                                "$ref": "#/components/schemas/Product"
                            }
                        }
                    ],
                
                "responses": {
                    "200": {
                        "description": "product updated successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Product"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Not Found - product not found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/agri-sales/products/category/:category": {
            "get": {
                "tags": ["product"],
                "summary": "Get a product by category name",
                "description": "Retrieves a specific product based on its category",
                "parameters": [
                    {
                        "name": "category",
                        "in": "parameters",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Product retrieved successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/Product"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Not Found - Product not found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/agri-sales/products/delete/:id": {
            "delete": {
                "tags": ["product"],
                "summary": "Delete a product",
                "description": "Deletes a product based on its ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "parameters",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Product deleted successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string",
                                            "example": "Product deleted"
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Not Found - Product not found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/agri-sales/carts/addToCart": {
            "post": {
                "tags": ["carts"],
                "summary": "Add a new carts",
                "description": "Creates a new carts with the provided details",
                
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "schema": {
                                "$ref": "#/components/schemas/carts"
                            }
                        }
                    ],
                
                "responses": {
                    "201": {
                        "description": "carts created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/carts"
                                }
                            }
                        }
                    },
                    "400": {
                        "description": "Bad Request - Validation errors",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/agri-sales/carts/getCart/:id": {
            "get": {
                "tags": ["carts"],
                "summary": "Get carts by id",
                "description": "Retrieves a cart by its id",
               
                        "parameters": [
                            {
                              "in": "query",
                              "name": "all",
                  
                              "required": true,
                              "description": "product object"
                            }
                          ],
                          "responses": {
                            "200": {
                                "description": "cart  retrieved successfully",
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/carts"
                                    }
                                }
                            }
                        
                    
                }
            }
        },
        "/api/agri-sales/carts/remove/:id": {
            "delete": {
                "tags": ["carts"],
                "summary": "Delete product in cart",
                "description": "delete an existing product in carts with the provided details",
                
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "ID of the cart to delete",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "in": "body",
                            "name": "body",
                            "schema": {
                                "$ref": "#/components/schemas/carts"
                            }
                        }
                    ],
                
                "responses": {
                    "200": {
                        "description": "cart updated successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/carts"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Not Found - order not found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/agri-sales/carts/update/:id": {
            "put": {
                "tags": ["carts"],
                "summary": "update cart by ID",
                "description": "update cart by ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "cart updated successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/carts"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Not Found - cart not found",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/agri-sales/orders/createOrder": {
            "post": {
                "tags": ["order"],
                "summary": "create order",
                "description": "order created successfully",
                "parameters": [
                    {
                        "name": "id",
                        "in": "query",
                        "required": true,
                        "schema": {
                            "type": "string"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Order created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                            
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Not Found - order not created",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

      
    },
    "components": {
        "schemas": {
            "Product": {
                "type": "object",
                "properties": {
                   "farmerId": {
                    "type":"mongoose.Schema.Types.ObjectId,ref: 'User'",
                    "description": "the farmer id who is adding product"

                    },
                    
                    "productName": {
                        "type": "string",
                        "description": "Name of product"
                    },
                    "description": {
                        "type": "string",
                        "description": "Description of the product"
                    },
                    "price": {
                        "type": "number",
                        "description": "Price of product per unit"
                    },
                    "productInStock": {
                        "type": "number",
                        "description": "The quantity of product in stock"
                    },
                    "category":{
                        "type": "string",
                        "description": "category of product"
                    }
                }
            },
            "carts": {
                "type": "object",
                "properties": {
                    
                    "buyerId": {
                        "type": "mongoose.Schema.Types.ObjectId,ref: 'User'",
                        "description": "The id of User"
                    },
                    "productId": {
                        "type": "mongoose.Schema.Types.ObjectId,ref: 'Product'",
                        "description": "id of product to be added in cart "
                    },
                    "quantity": {
                        "type": "number",
                        "description": "quantity of product you want to add into cart"
                    },
                    
                    "totalPrice": {
                        "type": "number",
                        "description": "total price of product you have in cart"
                    }
                }
            },
            "order": {
                "type": "object",
                "properties": {
                   
                    "buyerId": {
                        "type": "mongoose.Schema.Types.ObjectId,ref: 'User'",
                        "description": "The id of user refered to the user model"
                    },
                    "orderItems": [{
                        "orderItemsId": " mongoose.Schema.Types.ObjectId,  ref: 'orderItem'",
                        "description": "The id of product refered  to the orderItem model"
                    }],
                    "shippingAddress": {
                        "type": "String",
                        "description": "this is the address of shipping your order"
                    },
                    "city": {
                        "type": "String",
                        "description": "shipping address city"
                    },
                    "country": {
                        "type": "string",
                        "description": "country of shipment "
                    },
                    "phone": {
                        "type": "String",
                        "description": "phone number"
                    },
                    "transactionStatus": {
                        "type": "String",
                        "description": "transaction status which shows either it is delivered or not"
                    },
                    "totalPrice": {
                        "type": "number",
                        "description": "total price of the ordered product"
                    }

                }
            }
        }
    }
}
  
  

export default swaggerDocumentation;