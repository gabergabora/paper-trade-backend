const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {


    const data = req.headers.authorization || req.headers.Authorization;
    
    if(!data?.startsWith('Bearer')) return res.sendStatus(401) // Unauthorized
    

    const token = data.split(' ')[1]; //Splitting the token through <space> and taking string with index 1

    jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, decoded) => {

        if(err){
            return res.status(403).json({message: 'verify me hua', mss: err}); // Something went wrong
        } 
        

        req.username = decoded.username,
        req.roles = decoded.roles,
        req.firstname = decoded.firstname,
        req.email = decoded.email,

        next();
    })
    


}


module.exports = verifyJWT;