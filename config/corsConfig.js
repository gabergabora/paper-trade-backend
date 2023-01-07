const whitelist = ['https://www.rishiksahu.in/', 'http://localhost:3000']


const corsOption = {
    origin: (origin, callback) => {
        if(!origin) return callback(null, true);

        //if origin is not present in the whitelist
        if(whitelist.indexOf(origin) === -1){
          var msg = 'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
  
        //all good! allow the request
        return callback(null, true);
    },
    optionsSuccessStatus: 200
}

module.exports = corsOption, whitelist