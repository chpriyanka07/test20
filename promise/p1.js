// Promise is an object which is used to handle
// asynchronous operation in javascript
// Promise return value sometime in future either
//rejected or resolved
// There are four possibel state of Promise\
// 1. pending
// 2. resolved
// 3. rejected
// 4. settled
// How to create a promise in js
//let p = new Promise();
let p = new Promise((resolve,reject)=>{
   /*
     ----
   */
  //resolve();
  reject();
});
p.then(()=>{
    console.log("Promise is resolved.....")
}).catch(()=>{
    console.log("Promise is rejected....");
});










