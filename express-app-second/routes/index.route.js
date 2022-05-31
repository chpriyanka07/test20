const express = require('express');
const router = express.Router();
const indexController = require('../controller/index.controller');
const { route } = require('./admin.route');
router.get("/",indexController.indexPage);
router.get("/signin",indexController.indexPage);
router.get("/signup",indexController.signupPage);
module.exports = router;