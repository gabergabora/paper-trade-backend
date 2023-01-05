const express = require('express');
const router = express.Router();

const {emailPassLoginController} = require('../controllres/login/loginController');

router.post('/login', emailPassLoginController)


module.exports = router