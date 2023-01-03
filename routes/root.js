const express = require('express');
const router = express.Router();

const rootRouter = (app) => {

    //Root routes

    app.use('/', 

        router.get('/', (req, res) => {
            res.status(200).json({
                message: 'Welcome to paper trade'
            });
        })
        
    )

    //Unprotected Routes
    app.use('/register', require('./register'));
    app.use('/auth', require('./auth'));



    //JWT Protescted routes below


}

module.exports = rootRouter