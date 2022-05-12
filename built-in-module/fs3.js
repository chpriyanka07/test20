const fs = require('fs');
console.log("At the start...");
try{
  let data = fs.readFileSync('data13.txt');
  console.log(data.toString());
}
catch(err){
    console.log("Inside catch...");
    console.log("File not Found....");
}
console.log("At the end...");
