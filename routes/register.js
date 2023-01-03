const express = require('express');
const router = express.Router();
const {registrationController} = require('../controllres/register/registerController');

router.get('/',registrationController)

module.exports = router