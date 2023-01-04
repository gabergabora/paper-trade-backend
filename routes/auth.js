const express = require('express');
const router = express.Router();

router.get('/login', (req, res)=> {

    const {email, password} = req.body;

    // check for user exist in database

        //if exists: get the user, match the passowrd and return result

    res.status(200).json({
        message: 'Login successful!'
    })
})


module.exports = router