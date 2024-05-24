const swaggerDocumentation = {
    
    "openapi": "3.1.0",
    "info": {
      "title": "AGRI-SALES",
      "description": "API documentation for Agri-Sales Platform",
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "http://localhost:3001",
        "description": "Local server"
      }
    ],
    "tags": [
      {
        "name": "Product",
        "description": "Endpoints for managing Products"
      },
      {
        "name": "Users",
        "description": "Endpoints for managing users"
      },
      {
        "name": "order",
        "description": "Endpoints for managing orders"
      },
      {
        "name": "carts",
        "description": "Endpoints for managing carts"
      },{
        "name":"buyer",
        "description": "Endpoints for managing buyers"
      }
    ],
    "components": {
      "schemas": {   
        "User": {
          "type": "object",
          "properties": {
            "title": {
              "type": "string"
            },
            "description": {
              "type": "string"
            }
          }
        },
        "buyer": {
          "type": "object",
          "properties": {
            "firstName": {
              "type": "string",
              "required": "true"
          },
          "lastName": {
              "type":"string",
              "required": "true"
          },
          "email": {
              "type": "string",
              "required": "true",
              "unique": "true"
          },
          "role": {
              "type": "string",
              "required": "true",
          },
          "password": {
              "type": "string",
              "required": "true"
          },
          "otp": {
              "type": "number",
              "required": "true"
          },
          "otpExpires": {
              "type": "date",
              "required": "false"
          },
          "verified": {
              "type": "boolean",
              "required": "true",
              "default": "false"
          }
      }, 
          "timestamps": "true"
            
          },
     
        
        "carts": {
            "type": "object",
            "properties": {
            "buyerId": {
                "type": "object"
              },
             "productId": {
                "type": "object"
              },
              "quantity": {
                "type": "number",
              },
              "totalPrice": {
                "type": "number"
              },
             
              "createdAt": {
                "type": "date"
              }
          }
        },
       "carts": {
            "type": "object",
            "properties": {
            "buyerId": {
                "type": "object"
              },
             "productId": {
                "type": "object"
              },
              "quantity": {
                "type": "number",
              },
              "totalPrice": {
                "type": "number"
              },
             
              "createdAt": {
                "type": "date"
              }
          }
        },
        "order": {
            "type": "object",
            "properties": {
            "buyerId": {
                "type": "object"
              },
             "orderItems": {
                    "type": "object"
              },
              "shippingAddress": {
                "type": "string",
              },
              "city": {
                "type": "string"
              },
              "country": {
                "type": "string"
              },
              "phone": {
                "type": "string"
              },
              "transactionStatus": {
                "type": "string"
              },
              "totalPrice": {
                "type": "string"
              },
             
              "dateOrdered": {
                "type": "Date"
              }
          }
        }
      },
    },
    "paths": {
      "/api/agri-sales/users/addUser": {
        "post": {
          "tags": ["Users"],
          "summary": "Create a new user",
          "description": "Creating a new user with detailed information",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
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
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
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
      "/api/agri-sales/users/listUsers": {
        "get": {
          "tags": ["Users"],
          "summary": "Get all users",
          "description": "Retrieves a list of all users",
          "responses": {
            "200": {
              "description": "Users retrieved successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
            }
          }
        }
      },
      "/api/agri-sales/users/findById/:id": {
        "get": {
          "tags": ["Users"],
          "summary": "Get all users",
          "description": "Retrieves a list of all users",
          "responses": {
            "200": {
              "description": "Users retrieved successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
            }
          }
        }
      },
      "/api/agri-sales/users//update/:id": {
        "put": {
          "tags": ["Users"],
          "summary": "Update an event",
          "description": "Updates an existing user with the provided details",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "User updated successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
            },
            "404": {
              "description": "Not Found - User not found"
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
      "/api/agri-sales/users/delete/:id": {
        "delete": {
          "tags": ["Users"],
          "summary": "Get an user by ID",
          "description": "Retrieves a specific user based on its ID",
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
              "description": "User retrieved successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
            },
            "404": {
              "description": "Not Found - User not found"
            }
          }
        }
      },
      "/api/agri-sales/buyer/signUp": {
        "post": {
          "tags": ["buyer"],
          "summary": "Create a new buyer sign up",
          "description": "Creating a new buyer with detailed information",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/buyer"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "buyer created successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/buyer"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
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
      "/api/agri-sales/buyer/signIn": {
        "post": {
          "tags": ["buyer"],
          "summary": "Create a new buyer sign up",
          "description": "Creating a new buyer with detailed information",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/buyer"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "buyer created successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/buyer"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
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
      "/api/agri-sales/buyer/verify": {
        "post": {
          "tags": ["buyer"],
          "summary": "Create a new buyer sign up",
          "description": "Creating a new buyer with detailed information",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/buyer"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "buyer created successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/buyer"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
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
      "/api/agri-sales/buyer/forgotPassword": {
        "post": {
          "tags": ["buyer"],
          "summary": "Create a new buyer sign up",
          "description": "Creating a new buyer with detailed information",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/buyer"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "buyer created successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/buyer"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
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
      "/api/agri-sales/buyer/resetPassword": {
        "post": {
          "tags": ["buyer"],
          "summary": "Create a new buyer sign up",
          "description": "Creating a new buyer with detailed information",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/buyer"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "buyer created successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/buyer"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
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
      "/api/agri-sales/buyer/deleteBuyer/:id": {
        "delete": {
          "tags": ["buyer"],
          "summary": "Create a new buyer sign up",
          "description": "Creating a new buyer with detailed information",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/buyer"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "buyer created successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/buyer"
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
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
          "tags": ["Product"],
          "summary": "Create a new product",
          "description": "Creating a new product",
          "requestBody": {
            "required": true,
            "content": {
              "multipart/form-data:": {
                "schema": {
                  "$ref": "#/components/schemas/Product"
                }
              }
            }
          },
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
          "tags": ["Product"],
          "summary": "get product list",
          "description": "Get product list",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Product"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Product is retrieved  successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Product is retrieved  successfully"
                      },
                      "token": {
                        "type": "string",
                        "format": "JWT",
                        "example": "<JWT_token>"
                      }
                    }
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
      "/api/agri-sales/products/update/:id": {
        "put": {
          "tags": ["Product"],
          "summary": "update Product",
          "description": "update a product based on their ID",
          "parameters": [
            {
              "name": "productId",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Product updated successfully",
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
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
            },
            "404": {
              "description": "Not Found - Product not found"
            }
          }
        }
      },
      "/api/agri-sales/products/category/:category": {
        "get": {
          "tags": ["Product"],
          "summary": "get product by category",
          "description": "getting a product based on their category name",
          "parameters": [
            {
              "name": "category",
              "in": "path",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "get product successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "product successfully retrieved"
                      }
                    }
                  }
                }
              }
            },
            "401": {
              "description": "Unauthorized - Invalid JWT token"
            },
            "403": {
              "description": "Forbidden - Insufficient permissions"
            },
            "404": {
              "description": "Not Found - Product not found"
            }
          }
        }
      },
      "/api/agri-sales/products/delete/:id": {
        "delete": {
            "tags": ["Product"],
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
    "/api/agri-sales/products/productCount": {
        "get": {
            "tags": ["Product"],
            "summary": "get all order on dashboard",
            "description": "order retrieved successfully",
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
                            },
                            
                        }
                    }
                    
                }
            }
        }
    },
    "/api/agri-sales/carts/removeCart": {
        "delete": {
            "tags": ["carts"],
            "summary": "Remove from cart",
            "description": "Remove from cart",
           
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
                            "description": "removed successfully",
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
    },
    "/api/agri-sales/orders/getorder": {
        "get": {
            "tags": ["order"],
            "summary": "get all order",
            "description": "order retrieved successfully",
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
    },
    "/api/agri-sales/orders/updateOrder/:id": {
        "put": {
            "tags": ["order"],
            "summary": "update order",
            "description": "order updated successfully",
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
                    "description": "Order updated successfully",
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
                    "description": "Not Found - order not updated",
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
    "/api/agri-sales/orders/deleteOrder/:id": {
        "delete": {
            "tags": ["order"],
            "summary": "delete order",
            "description": "order deleted successfully",
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
                    "description": "Not Found - order not deleted",
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
    "/api/agri-sales/orders/getTotalProductOrders": {
        "get": {
            "tags": ["order"],
            "summary": "get all order on dashboard",
            "description": "order retrievedsuccessfully",
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
    },
    "/api/agri-sales/orders/getordercount": {
        "get": {
            "tags": ["order"],
            "summary": "get all order",
            "description": "order retrieved successfully",
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
    },
    "/api/agri-sales/orders/getorder/:id": {
        "get": {
            "tags": ["order"],
            "summary": "get all order",
            "description": "order retrieved successfully",
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
    },

    }
  }
  
  

export default swaggerDocumentation;