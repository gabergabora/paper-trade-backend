const express = require('express');
const router = express.Router();

const {emailPassLoginController} = require('../controllres/login/loginController');
const { resetPasswordController } = require('../controllres/resetpass/resetPasswordController');

router.post('/login', emailPassLoginController)
router.post('/resetpassword', resetPasswordController)


module.exports = router