const http = require('http');
const url = require('url');
// http://localhost:3000/add?a=20&b=10
const server = http.createServer((request,response)=>{
  const requestdUrl = url.parse(request.url,true);
  //console.log(requestdUrl);
  console.log(request.method);
  if((requestdUrl.pathname == '/home' || requestdUrl.pathname == '/') && request.method=="POST"){
      response.end("Home Page");
  }
  else if(requestdUrl.pathname == '/about' && request.method=='GET'){
      response.end("About Page");
  }
  else if(requestdUrl.pathname == '/add'){
      let x = requestdUrl.query.a;
      let y = requestdUrl.query.b;
      response.end("<h1>Addition :"+(x*1+y*1)+"</h1>");
  }
});
server.listen(3000,()=>{
    console.log("Server Startted...");
})