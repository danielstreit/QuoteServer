var bitstamp = require('./listeners/bitstamp');
var bitfinex = require('./listeners/bitfinex');
var hitbtc = require('./listeners/hitbtc');
var btce = require('./listeners/btce');
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

var emitTrade = function(trade) {
  emitter.emit(trade);
}

bitstamp.on('trade', emitTrade);
bitfinex.on('trade', emitTrade);
hitbtc.on('trade', emitTrade);
btce.on('trade', emitTrade);

module.exports = emitter;