const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser())

require('dotenv').config()
require('./startup/logger')();
require('./startup/route')(app);

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Port : ${port}`));




