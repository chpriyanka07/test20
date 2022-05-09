const eatingPizza = ()=>{
  console.log("Pizza in progres...");  
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
          resolve("Pizza Done..");
      },2000);
  });
}
const servicinVar = ()=>{
    console.log("Servicing in progress...");
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("Car Service Done..");
        },5000);
    });
}
const meetingWithFirends = ()=>{
    console.log("Meeting is in progress...");
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("Meeting Done...");
        },1000);
    });
}
Promise.all([eatingPizza(),servicinVar(),meetingWithFirends()])
.then((results)=>{
    console.log(results[0]+"\n"+results[1]+"\n"+results[2]);
    console.log("Task is Done...");
})
.catch(()=>{
    console.log("Task is not Done..");
});



