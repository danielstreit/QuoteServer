var tradeEmitter = require('./tradeEmitter');
var io = require('socket.io')();
var port = process.env.PORT || 3000;


var handleTrade = function(trade) {
  console.log(trade);
  io.emit('trade', trade);
}

tradeEmitter.on('trade', handleTrade);


io.listen(port);