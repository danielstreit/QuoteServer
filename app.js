var tradeEmitter = require('./tradeEmitter');
var server = require('http').Server();
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;


var handleTrade = function(trade) {
  console.log(trade);
  io.emit('trade', trade);
}

tradeEmitter.on('trade', handleTrade);


io.listen(port);