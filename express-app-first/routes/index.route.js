const express = require('express');
const router = express.Router();
router.get("/",(request,response,next)=>{
   return response.render('login.ejs');
});
router.post("/signin",(request,response,next)=>{
  let email = request.body.email;
  let password = request.body.password;
  if(email == 'admin@gmail.com' && password == '1234')
    return response.send("Login success....");
  else
    return response.send("Login Failed....");  
});
module.exports = router;