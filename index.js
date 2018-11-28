const express = require('express');
const app = express();

require('dotenv').config()
require('./startup/connection');
require('./startup/route')(app);

require('./startup/logger')();



app.listen(3000,()=> console.log(`Port : ${3000}`));




