const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/user-authentication');
const productController = require('../controller/product.controller');
const { body } = require('express-validator');
const multer = require('multer');
const upload = multer({dest: 'public/images'})
// upload.single(), upload.array()
//router.get("/add-product",authenticate.isAuthenticate,productController.addProductPage);
//router.post("/add-product",productController.saveProduct);

router.route("/add-product")
.get(authenticate.isAuthenticate,productController.addProductPage)
.post(authenticate.isAuthenticate,upload.single('bookImage'),
 body('bookName').notEmpty(),
 body('bookPrice').notEmpty(),
 productController.saveProduct);

router.get("/product-list",authenticate.isAuthenticate,productController.productList); 
module.exports = router;