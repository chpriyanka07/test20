const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const adminController = require('../controller/admin.controller');
router.post("/signup",adminController.signup);
router.post("/signin",
body('email').isEmail(),
body('password').notEmpty()
,adminController.signin);
module.exports = router;