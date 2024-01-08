//simple event 
var event = require('events');

var pappu = new event.EventEmitter();

pappu.on('speak', () =>
{
    console.log("event trigger");
})

pappu.emit('speak');