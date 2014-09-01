var tradeEmitter = require('./tradeEmitter');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;


var handleTrade = function(trade) {
  console.log(trade);
  io.emit('trade', trade);
}

tradeEmitter.on('trade', handleTrade);


io.listen(port);