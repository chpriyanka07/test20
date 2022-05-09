function evenOdd(n){
    return new Promise((resolve,reject)=>{
        if(n%2)
          reject();
        else
          resolve();  
    });
}

evenOdd(11).then(()=>{
    console.log("Number is Even...");
}).catch(()=>{
    console.log("Number is Odd");
});