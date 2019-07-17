
const cookieParser = require('cookie-parser');
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
// app.use(cookieParser())
// app.use(cors())

// require('dotenv').config()
// require('./startup/logger')();
// require('./startup/route')(app);

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('user-activity', function(activity){
      io.emit('user-activity', activity);
    });
});

const port = process.env.PORT || 3000;

http.listen(port, function(){
  console.log('listening on *:3000');
});

// app.listen(port,()=> console.log(`Port : ${port}`));




