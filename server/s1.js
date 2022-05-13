const http = require('http');
// http://localhost:3000/home
// http://localhost:3000/about
// http://localhost:3000/contact
const server = http.createServer((request,response)=>{
    if(request.url == '/home'){
      response.end("<h1>Home Page</h1>");
    }
    else if(request.url == '/about'){
        response.end("<h1>About Page</h1>");
    }
    else if(request.url == '/contact'){
        response.end("<h1>Contact Page</h1>");
    }
    // http://localhost:3000/add?a=20&b=10
    // request.url = /add?a=20&b=10
    else if(request.url == '/add'){
        response.end("<h1>Addition</h1>");
    }
});

server.listen(3000,()=>{
    console.log("Server started at http://localhost:3000");
});