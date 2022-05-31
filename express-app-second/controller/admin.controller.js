const { validationResult } = require('express-validator');
exports.signup = (request,response)=>{
   const errors = validationResult(request);
   if(!errors.isEmpty())
    return response.render('signup.ejs',{validationErrors: errors.array()});
   let email = request.body.email;
   let password = request.body.password;

}