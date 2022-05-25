class Test{
    static m1(n){
      return new Promise((resolve,reject)=>{
          if(n%2==0)
            resolve("Given Number Is Even");
          else
            reject("Given Number Is Odd");  
      });
    }
}

//let obj = new Test();
Test.m1(21).then(result=>{
    console.log(result);
}).catch(rejectedResult=>{
    console.log(rejectedResult);
});