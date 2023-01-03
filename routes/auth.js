const express = require('express');
const router = express.Router();

router.get('/login', (req, res)=> {

    const {email, password} = req.body;

    res.status(200).json({
        message: 'Login successful!'
    })
})


module.exports = router