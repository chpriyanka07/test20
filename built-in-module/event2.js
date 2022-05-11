const event = require('events');
const eventEmitter = new event.EventEmitter();

eventEmitter.on('add',(a,b)=>{
  console.log("Addition : "+(a+b));
});
eventEmitter.once('multiply',(a)=>{
    console.log("Multiplication : "+(a[0]*a[1]));
});
eventEmitter.emit('multiply',[20,10]); 