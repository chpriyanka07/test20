const fs = require('fs');
const writeStream = fs.createWriteStream('hello.txt');

writeStream.write('Hello Friends');

writeStream.end(); // closing the file

writeStream.on('finish',()=>{
    console.log("Operation success.....");
});

writeStream.on('error',(err)=>{
    console.log("Error event fired...");
    console.log(err);
})