var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)

server.listen(3000, function () {
  console.log('Servidor corriendo en http://localhost:3000')
})
 app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', function (socket) {
  console.log('Un cliente se ha conectado')
   socket.on('messages', function (data) {
    //console.log(data)
     socket.broadcast.emit('datas',data)
  })
})

