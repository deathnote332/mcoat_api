require('dotenv').config()

const express = require('express');
const app = express();
const products = require('./routes/products');
const auth = require('./routes/auth');
app.use('/product',products);
app.use(express.json());
app.use('/api/auth',auth);

// app.use(express.bodyParser());
// app.use(express.json());
// app.use(express.urlencoded());

// const user = require('./model/user');
// user.find('all', function(err, rows, fields) {
//     console.log(rows);
// });

//$2y$10$hDAtvVFjDLPl.tglr3IwCOYEpInAIa5ph6QnYUkrCR2FmwocfeMqm
// async function run(){
//     var salt = await bcrypt.genSalt(10);
//     var hash = await bcrypt.hash("password",salt);
//     console.log(hash);
// }

// run();
// bcrypt.compare("password","$2y$10$il8jSNaHtRji./1191/rAOXrCuM7htQNBkNBMpkRJjqGvreQ1SrvO",(err,res)=>{
//     console.log(res);
// })



app.listen(3000,()=> console.log(`Port : ${3000}`));




