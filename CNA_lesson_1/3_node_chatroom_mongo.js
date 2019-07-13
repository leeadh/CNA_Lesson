const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const mongoDbUrl = process.env.MONGODB_URL;

var db

MongoClient.connect(mongoDbUrl, (err, database) => {
  if (err) return console.log(err)
  db = database.db('messages')
})

app.get('/', function(req, res) {
    res.render('chatapp.ejs');
});

io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
    });

    socket.on('disconnect', function(username) {
        io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
    })

    socket.on('chat_message', function(message) {
        io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
        db.collection('message').save({userName:socket.username, message:message}, (err, result) => {
          if (err) return console.log(err)
          console.log('saved to database')
        })
    });

});

const server = http.listen(3000, function() {
  console.log('listening on *:3000');
});

