require('dotenv').config();
const express = require('express');
const app = express();
const errorHandler = require('./middlewares/errorHandler');
const {logRequest} = require('./middlewares/logger');
const connectDB = require('./config/connectDB');
const mongoose = require('mongoose');
const corsOption = require('./config/corsConfig')
const cors = require('cors');

const PORT =  process.env.PORT|| 4000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(logRequest);

// setting up cors
app.use(cors(corsOption));

//setting up all root routes
require('./routes/root')(app);



//error handler
app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server is listening at port: ${PORT}`)
    })
})
