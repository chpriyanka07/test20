const express = require('express');
const router = express.Router();

// http://localhost:3000/authenticate/dashboard

router.use((request,response,next)=>{
    if(request.session.current_user)
      next();
    else
      return response.redirect("/");  
});

router.get("/dashboard",()=>{});
//----
//---



module.exports = router;