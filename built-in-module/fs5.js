const fs = require('fs');

const readF1Data = function(){
    return new Promise((resolve,reject)=>{
        fs.readFile('f1.txt',(err,data)=>{
            err ? reject(err) : resolve(data);
        })
    });
}
const readF2Data = function(){
    return new Promise((resolve,reject)=>{
        fs.readFile('f2.txt',(err,data)=>{
            err ? reject(err) : resolve(data);
        })
    });
}
const writeInToOutput = function(results){
   fs.writeFile('output.txt',results[0]+""+results[1],(err)=>{
       err ? console.log("Failed") : console.log("success");
   })
}
Promise.all([readF1Data(),readF2Data()])
.then((results)=>{
   writeInToOutput(results);
 }).catch((err)=>{
    console.log(err);
});
