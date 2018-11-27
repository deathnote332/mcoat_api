const mysqlModel  = require('mysql-model');
const connection = mysqlModel.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

// connection.connect((err) =>{
//     if(err){
//         console.log(err.message);
//     }
//     console.log(connection.state);
// });

module.exports = connection;