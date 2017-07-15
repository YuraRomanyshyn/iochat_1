var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

users = [];
connection = [];

server.listen(process.env.PORT || 4000);
console.log('Everything is fine :D');
app.get('/', function(reg, res){
	res.sendFile(__dirname + '/index.html');
});

	io.sockets.on('çonnection', function(soket){
	connection.push(socket);
	console.log('Connected: %s sockets connected', connections.lenght);

	

		//Disconnect
		socet.on('disconnect', function(data){
			if(!socket.username)return;
			users.splice(users.indexOf(socket.username), 1);
			updateUsenames();
			connections.splice(connections.indexOf(socet), 1);
			console.log('Disconnect: %s sockets connected', connection.lenght);
		});

		//Send msg
		socket.on('send message', function(data){
			io.sockets.emit('new message', {msg: data, user: socket.username});
		});

		//New User
		socket.on('new user', function(data, callback){
			callback(true);
			socket.username = data;
			users.push(socket.username);
			updateUsenames();
		}); 

		function updateUsenames(){
			io.socket.emit('get users', users);
		};
});