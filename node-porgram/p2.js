console.log("At the start");

var task1 = function(){
    /*
     ---
     ---
    */
   console.log("task1-completed.....");
}
var task2 = function(){
    /*
    ------
    */
   console.log("task2-completed...")
}
var task3 = function(){
    console.log("task2-completed...");
}
task1();
task2();
task3();
console.log("At the end...");