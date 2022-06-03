const express = require('express');
const router = express.Router();
const adminController = require('../controller/admin.controller');
const { body } = require('express-validator');
const authenticate = require('../middleware/user-authentication');
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

router.get("/admin-dashboard",authenticate.isAuthenticate,adminController.dashboardPage);

router.get("/logout",adminController.logout);

module.exports = router;