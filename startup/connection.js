const mysqlModel  = require('mysql-model');

const connection = mysqlModel.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

var connection1 = require('mysql').createConnection({
   
  });

connection1.connect((err)=>{
    throw new Error(err.message,err);
});


module.exports = connection;