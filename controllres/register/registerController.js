const registrationController = (req, res) => {

    console.log('registration succesful');

    res.status(200).json({
        message: 'Registration successful'
    })

}


module.exports = {registrationController}