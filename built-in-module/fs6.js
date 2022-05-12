const fs = require('fs');
const readStream = fs.createReadStream('data.txt');
let data = '';
console.log("At the start........");
readStream.on('data',(chunk)=>{
  console.log("Data event fired.....");
  data = data + chunk;
});
readStream.on('end',()=>{
    console.log("End event fired.....");
    console.log(data);
});
readStream.on('error',(err)=>{
    console.log("Error : ");
});
console.log("At the end.......");