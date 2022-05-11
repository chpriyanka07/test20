const fs = require('fs');
console.log('At the start...');
fs.readFile('data.txt',(err,data)=>{
    if(err)
     console.log(err);
    else
     console.log(data.toString()); 
});
console.log('At the end....');