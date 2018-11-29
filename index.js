const express = require('express');
const app = express();

require('dotenv').config()
require('./startup/logger')();
require('./startup/route')(app);

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Port : ${port}`));




