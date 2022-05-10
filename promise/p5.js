console.log("At the start..");
const task1 = ()=>{
    console.log("Task-1 is in execution...");
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            reject("Task-1 Failed...");
        },1000);
    });
}
const task2 = ()=>{
    console.log("Task-2 is in execution...");
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            reject("Task-2 failed...")
        },2000);
    });
}
Promise.all([task1(),task2()]).then((results)=>{
   console.log("Inside then...");
   console.log(results[0]);
   console.log(results[1]);
}).catch((rejectedResult)=>{
  console.log("Insided catch..");  
  console.log(rejectedResult);
});
console.log("At the end....");
