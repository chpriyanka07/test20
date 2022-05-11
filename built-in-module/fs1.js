const fs = require('fs');
console.log('At the start...');
fs.writeFile('data.txt',
  'Welcome in Node Application',(err)=>{
        // 0, null, false, '',undefined
        if(err)
        console.log("operation failed...");
        else
        console.log("Operatio success...");  
    });
console.log('At the end....');