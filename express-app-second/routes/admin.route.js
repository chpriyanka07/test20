const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.controller');
const { body } = require('express-validator');
router.post("/signup",
body('email','Invalid email id').isEmail(),
body('password','Invalid password').notEmpty(),
adminController.signup);

router.get("/verify",adminController.verifyAccount);
router.post("/forgot-password",
 body('email').isEmail(),
adminController.forgetPassword);
module.exports = router;