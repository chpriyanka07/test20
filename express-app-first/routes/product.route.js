const express = require('express');
const router = express.Router();
const productController = require('../controller/product.controller');
const { body } = require('express-validator');
router.get("/add-product",productController.addProductPage);

router.post("/save-product",
  body('bookName',"please enter book name").notEmpty(),
  body('price').notEmpty(),
  body('price').isNumeric(),
  body('description').notEmpty()
,productController.saveProduct);
router.get("/product-list",productController.productList);
router.get("/delete-product/:id",productController.deleteProduct);
router.get("/edit-product/:id",productController.editProductPage);
router.post("/update-product",productController.updateProduct);
module.exports = router;