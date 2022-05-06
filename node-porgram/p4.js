console.log("At the start");

setTimeout(function(){
    console.log("task-1 completed...");
},2000);
setTimeout(function(){
    console.log("task-2 completed...")
},1000);
setTimeout(function(){
    console.log("task-3 completed...")
},5000);
console.log("At the end...");