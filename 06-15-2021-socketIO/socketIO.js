var express = require('express');
var es6Renderer = require('express-es6-template-engine');
var http = require('http');
var morgan = require('morgan');

var app = express();
var server = http.createServer(app);

var {Server} = require("socket.io");
var io = new Server(server);

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(morgan('dev'));
app.use('/socket-io', express.static('node_modules/socket.io/client-dist'));

app.get('/', (req, res) =>{
    res.render('chat');
});

io.on('connection', (client) =>{
    console.log("CONNECTED");

    client.on('disconnect', function(){
        console.log('EXITED');
    });
});

server.listen(8000, ()=>{
    console.log('listening on Port 8000');
});
