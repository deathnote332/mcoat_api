const winston = require('winston');
require('express-async-errors');

module.exports = function(){
    if(process.env.NODE_ENV != 'production'){
        winston.add(new winston.transports.Console({
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.json(),
                winston.format.prettyPrint(),
              )
          }));
    }
  
    process.on('unhandledRejection', (ex)=>{
        throw ex;
    });

    winston.add(new winston.transports.File({
        'filename': 'logfile.log',
        handleExceptions: true,
        format:winston.format.json(),
    }));
};