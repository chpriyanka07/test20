const { validationResult } = require('express-validator');
const Admin = require('../model/admin.model');
const nodemailer = require('../util/nodeemail');
exports.forgetPassword = (request,response,next)=>{
   const errors = validationResult(request);
   if(!errors.isEmpty())
     return response.send("Bad request.....");
   /*
     Kal code karenge.......
   */  
}
exports.verifyAccount = (request,response,next)=>{
   //console.log(request.query);
   if(request.query.email){
      Admin.verifyAccount(request.query.email).then(result=>{
         if(result.affectedRows!=0)
           return response.render('index.ejs',{message: 'you are verified. please signin'});
      }).catch(err=>{
         return response.send("Bad Request....");
      });
   }
}
exports.signup = (request,response)=>{
   const errors = validationResult(request);
   if(!errors.isEmpty())
    return response.render('signup.ejs',{validationErrors: errors.array()});
  
   let admin = new Admin();
   admin.email = request.body.email;
   admin.password = request.body.password;
   admin.signupAdmin().then(async result=>{
      try{
        await nodemailer.sendEmail(admin.email);
        return response.render("index.ejs",{message: 'Please verify your account'});
      }
      catch(err){
         console.log(err);
      }
   }).catch(err=>{
      return response.send("Oops! Something went wrong");
   });
}