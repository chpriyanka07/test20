const express = require('express');

const app = express();

app.set("view engine","ejs");

app.get("/home",(request,response,next)=>{
    response.render('home.ejs');
});

app.get("/about",(request,response,next)=>{
   response.send("About Page");
});

app.get("/login",(request,response,next)=>{
    response.send("Login Page");
});
app.get("/add",(request,response,next)=>{
   console.log("/add routed handled..."); 
   console.log(request.query);
});
app.use((request,response,next)=>{
    console.log("GET Request received....");
    next();
});
app.listen(3000,()=>{
    console.log("Server started....");
});