const express = require('express');
const router = express.Router();
const indexController = require('../controller/index.controller');

router.get("/",indexController.signinPage);

router.post("/signin",indexController.signin);

module.exports = router;