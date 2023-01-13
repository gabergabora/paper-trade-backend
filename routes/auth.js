const express = require('express');
const router = express.Router();

const {emailPassLoginController} = require('../controllres/login/loginController');
const { resetPasswordController } = require('../controllres/resetpass/resetPasswordController');
const refreshTokenController = require('../controllres/refreshToken/refreshTokenController');

router.post('/login', emailPassLoginController)
router.post('/resetpassword', resetPasswordController)
router.get('/refresh', refreshTokenController)


module.exports = router