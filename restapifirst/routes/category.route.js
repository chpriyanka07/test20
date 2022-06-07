const express = require('express');
const router = express.Router();
const tokenVerfication = require('../middleware/token-verification');
const categoryController = require('../controller/category.controller');
router.get("/category-list",tokenVerfication.verifyToken,categoryController.getCategoryList);
router.get("/delete/:id",categoryController.deleteCategory);
module.exports = router;