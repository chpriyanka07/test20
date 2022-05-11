const event = require('events');

const eventEmitter = new event.EventEmitter();
console.log("At the start....");
eventEmitter.on('data',()=>{
    console.log("Data event fired and handled...");
});
eventEmitter.on('end',()=>{
    console.log("End event fired and handled...");
});
eventEmitter.on('error',()=>{
    console.log("error event fired and handled..");
});
eventEmitter.on('finish',()=>{
  console.log("finsih event fired and handled...");
});
eventEmitter.emit('data'); // emit fire the event
eventEmitter.emit('finish');
eventEmitter.emit('error');
eventEmitter.emit('end');
console.log("At the end....");