const fs = require('fs');
const readStream = fs.createReadStream('data.txt');
const writeStream = fs.createWriteStream('output.txt');
console.log("At the start....");

readStream.pipe(writeStream);

readStream.on('end',()=>{
    console.log("Operation succes......");
})