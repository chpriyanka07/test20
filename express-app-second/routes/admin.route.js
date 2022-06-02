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

router.get("/new-password",adminController.newPasswordPage);

router.post("/update-password",
body("email","Invalid email id").isEmail(),
body("password","Password can not be blank").notEmpty()
,adminController.updatePassword);

router.post("/signin",
body("email","Invalid email id").isEmail(),
body("password","Invalid password").notEmpty()
,adminController.signin);

module.exports = router;