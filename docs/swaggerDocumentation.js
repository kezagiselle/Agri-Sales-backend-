export const documentation = {
    "swagger": "2.0",
    "info": {
        "title": "E-COMMERCE WEBSITE API",
        "description": "This is the API Specification for the e-commerce backend server",
        "version": "1.0.0",
        "contact": {
            "email": "benigneniyonizera58@gmail.com"
        },
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/license/mit"
        },
        "externalDocs": {
            "description": "Get source code",
            "url": "https://github.com/NIYONIZERA/E-commerce-website-Backend"
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
            "name": "user",
            "description": "Operations pertaining to user"
        },
        {
            "name": "product",
            "description": "Operations pertaining to product"
        },
       
        {
            "name": "order",
            "description": "Operations pertaining to orders"
        }
    ],
    "paths": {
        "/api/user/register": {
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
        "/api/user/login": {
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
        "/api/product/create": {
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
                        "description": "Task created successfully",
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
        "/api/product/get": {
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
        "/api/product/update": {
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
                                "$ref": "#/components/schemas/product"
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
        "/api/product/findById": {
            "get": {
                "tags": ["product"],
                "summary": "Get a product by ID",
                "description": "Retrieves a specific product based on its ID",
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
        "/api/product/delete": {
            "delete": {
                "tags": ["product"],
                "summary": "Delete a product",
                "description": "Deletes a product based on its ID",
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
        "/api/order/create": {
            "post": {
                "tags": ["order"],
                "summary": "Add a new order",
                "description": "Creates a new order with the provided details",
                
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "schema": {
                                "$ref": "#/components/schemas/order"
                            }
                        }
                    ],
                
                "responses": {
                    "201": {
                        "description": "Order created successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/order"
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
        "/api/order/get": {
            "get": {
                "tags": ["order"],
                "summary": "Get all order",
                "description": "Retrieves a list of all order",
               
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
                                "description": "List of order  retrieved successfully",
                                "schema": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/order"
                                    }
                                }
                            }
                        
                    
                }
            }
        },
        "/api/order/update": {
            "put": {
                "tags": ["order"],
                "summary": "Update order",
                "description": "Updates an existing order with the provided details",
                
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "ID of the order to update",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "in": "body",
                            "name": "body",
                            "schema": {
                                "$ref": "#/components/schemas/order"
                            }
                        }
                    ],
                
                "responses": {
                    "200": {
                        "description": "Order updated successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/order"
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
        "/api/order/findById": {
            "get": {
                "tags": ["order"],
                "summary": "Get order by ID",
                "description": "Retrieves a specific order based on its ID",
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
                        "description": "Order retrieved successfully",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/order"
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
        "/api/order/delete": {
            "delete": {
                "tags": ["order"],
                "summary": "Delete order",
                "description": "Deletes order based on its ID",
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
                        "description": "Order deleted successfully",
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
        }

      
    },
    "components": {
        "schemas": {
            "Product": {
                "type": "object",
                "properties": {
                    
                    "name": {
                        "type": "string",
                        "description": "Name of product"
                    },
                    "description": {
                        "type": "string",
                        "description": "Description of the task"
                    },
                    "price": {
                        "type": "number",
                        "description": "Price of product per unit"
                    },
                    "countInStock": {
                        "type": "number",
                        "description": "The quantity of product in stock"
                    }
                }
            },
            "User": {
                "type": "object",
                "properties": {
                    
                    "username": {
                        "type": "string",
                        "description": "The name of User"
                    },
                    "email": {
                        "type": "string",
                        "description": "Email of the user"
                    },
                    "password": {
                        "type": "string",
                        "description": "Password of the user"
                    },
                    
                    "otp": {
                        "type": "number",
                        "description": "The verification code sent to the user email"
                    }
                }
            },
            "order": {
                "type": "object",
                "properties": {
                   
                    "user": {
                        "type": "mongoose.Schema.Types.ObjectId,ref: 'User'",
                        "description": "The id of user refered to the user model"
                    },
                    "product": {
                        "type": " mongoose.Schema.Types.ObjectId, ref: 'Product'",
                        "description": "The id of product refered  to the product model"
                    },
                    "quantity": {
                        "type": "Number",
                        "description": "Quantity of product you ordered"
                    },
                    "totalPrice": {
                        "type": "Number",
                        "description": "The total price of product ordered"
                    },
                    "isPaid": {
                        "type": "boolean",
                        "description": "true if it is paid and false if not "
                    }
                }
            }
        }
    }
}