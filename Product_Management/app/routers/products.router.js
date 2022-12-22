const express = require('express');
const productRouter = express.Router();
const {getAllProduct, getProductDetail, createNewProduct, updateProduct, deleteAProduct, deleteAllProduct} = require('../controllers/product.controllers')
const {checkPrice, checkEmpty} = require('../middlewares/validation/products.validate')

// Get all products
productRouter.get("/", getAllProduct);

// get product's detail
productRouter.get("/:id", getProductDetail);

// Create new product
productRouter.post("/",checkEmpty, checkPrice, createNewProduct);

// Update a product
productRouter.put("/:id", updateProduct);

// Delete a product
productRouter.delete("/:id",deleteAProduct);

module.exports = productRouter;