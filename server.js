const express = require('express');
const app = express();
// const errorHandler = require('package');
const {logRequest} = require('./middlewares/logger');

const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(logRequest);

//setting up all root routes
require('./routes/root')(app);



//404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        message: 'Oops! The resource you are looking for is not found :)'
    })
});

//error handler
// app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server is listening at port: ${PORT}`)
})