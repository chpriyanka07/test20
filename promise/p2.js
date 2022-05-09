let p = new Promise((resolve,reject)=>{
    resolve("Promise is resolved...");
    //reject("Promise is rejected.....");
 });
 p.then((message)=>{
     console.log(message);
 }).catch((message)=>{
     console.log(message);
 });
 
 
 
 
 
 
 
 
 
 
 