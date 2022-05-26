const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');

router.get("/add-product",productController.addProductPage);
router.post("/save-product",productController.saveProduct);
module.exports = router;