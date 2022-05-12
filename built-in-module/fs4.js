const fs = require('fs');
console.log("At the start..");
try{
  fs.writeFileSync('node.txt','Node is javascript runtime enviornment');
  console.log("Operation success...");
}
catch(err){
    console.log("Write operation failed...");
}
console.log("At the end..");