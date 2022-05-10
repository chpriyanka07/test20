const firstName = ()=>{
    console.log("Inside First Name");
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            reject("Merry");
        },1000);
    });
}
const middleName = ()=>{
    console.log("Insided Middle Name");
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("John");
        },3000);
    });
}
const lastName = ()=>{
    console.log("Inside Last Name");
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve("Alexan");
        },1500);
    });
}

Promise.race([firstName(),middleName(),lastName()])
.then((veryFirstResolved)=>{
    console.log(veryFirstResolved);
}).catch((veryFirstReject)=>{
    console.log("Catch : "+veryFirstReject);
});