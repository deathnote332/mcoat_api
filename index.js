const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const app = express();
app.use(cookieParser())
app.use(cors())

require('dotenv').config()
require('./startup/logger')();
require('./startup/route')(app);

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`Port : ${port}`));




