console.log("At the start");

var task1 = function(){
   console.log("task1-completed.....");
}
var task2 = function(){
   console.log("task2-completed...")
}
var task3 = function(){
    console.log("task2-completed...");
}

setTimeout(task1,2000);
setTimeout(task2,1000);
setTimeout(task3,5000);
console.log("At the end...");