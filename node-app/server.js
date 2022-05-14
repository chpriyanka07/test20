const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const server = http.createServer((request,response)=>{
   let requestedUrl = url.parse(request.url,true);
   console.log(requestedUrl.pathname);
   if((requestedUrl.pathname == "/" || 
         requestedUrl.pathname == '/home') 
            && request.method=="GET"){
     try{ 
      let data = fs.readFileSync("home.html");
      response.writeHead(200,{'Content-Type': 'text/html'});
      response.write(data);
      response.end();
     }
     catch(err){
       response.end("Oops! Something went wrong");
     } 
   }
   // 'donate.png'
   else if(requestedUrl.pathname.match('\.png')){
      let imagePath = path.join(__dirname,requestedUrl.pathname); 
      let readStream = fs.createReadStream(imagePath);
      response.writeHead(200,{'Content-Type':'images'});
      readStream.pipe(response);
   }
   else if(requestedUrl.pathname.match('\.css')){
       let cssFilePath = path.join(__dirname,requestedUrl.pathname);
       response.writeHead(200,{'Content-Type':'text/css'});
       let readStream = fs.createReadStream(cssFilePath);
       readStream.pipe(response);
    }
});

server.listen(3000,()=>{
    console.log("Server started...");
});