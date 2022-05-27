const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');

router.get("/add-product",productController.addProductPage);
router.post("/save-product",productController.saveProduct);
router.get("/product-list",productController.productList);
router.get("/delete-product/:id",productController.deleteProduct);
router.get("/edit-product/:id",productController.editProductPage);
module.exports = router;