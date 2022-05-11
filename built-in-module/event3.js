const event = require('events');
const eventEmitter = new event.EventEmitter();

eventEmitter.on('hello',()=>{
  console.log("Hello Friends..");
});
eventEmitter.emit('hello');
eventEmitter.emit('hello');
eventEmitter.emit('hello');
eventEmitter.emit('hello');
eventEmitter.emit('hello');
eventEmitter.removeAllListeners('hello');
eventEmitter.emit('hello');