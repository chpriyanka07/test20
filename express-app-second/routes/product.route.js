const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/user-authentication');
const productController = require('../controller/product.controller');
router.get("/add-product",authenticate.isAuthenticate,productController.addProductPage);
module.exports = router;