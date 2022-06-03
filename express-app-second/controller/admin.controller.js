const { validationResult } = require('express-validator');
const Admin = require('../model/admin.model');
const nodemailer = require('../util/nodeemail');

exports.logout = (request,response,next)=>{
   request.session.current_user = null;
   request.session.destroy();
   return response.redirect("/");
}
exports.dashboardPage = (request,response,next)=>{
   return response.render("admin-dashboard.ejs",{currentUser: request.session.current_user});
}
exports.signin = (request,response,next)=>{
   const errors = validationResult(request);
   if(!errors.isEmpty())
     return response.render("index.ejs",{message: 'Authenticaion failed',currentUser: request.session.current_user});
   let admin = new Admin(null,request.body.email,request.body.password,null);
   admin.authenticateAdmin().then(result=>{
      if(result.length!=0){
        request.session.current_user = request.body.email;
        return response.redirect("/admin/admin-dashboard");
      }
      return response.send("Login Failed....");  
   }).catch(err=>{
      return response.send("Something went wrong.....");
   });  
}

exports.updatePassword = (request,response,next)=>{
   
   const errors = validationResult(request);
   if(!errors.isEmpty())
     return response.render("new-password.ejs",{validationErrors: errors.array(),currentUser: request.session.current_user});
   
   let admin = new Admin(null,request.body.email,request.body.password,null);
   admin.updatePassword().then(result=>{
      if(result.affectedRows!=0)
        return response.render("index.ejs",{message: "Password updated successfully",currentUser: request.session.current_user});
   }).catch(err=>{
      return response.send("Bad request....");
   }); 
}
exports.newPasswordPage = (request,response,next)=>{
   return response.render('new-password.ejs',{validationErrors: [],currentUser: request.session.current_user});
}
exports.forgetPassword = (request,response,next)=>{
   const errors = validationResult(request);
   if(!errors.isEmpty())
     return response.send("Bad request.....");
   Admin.checkEmail(request.body.email)
   .then(async result=>{
       if(result.length!=0){
         try{ 
          let emailContent = '<h1>Dear '+request.body.email+'</h1>'+
          '<p>Please click on below link to create new password</p>'+
          '<p><a href="http://localhost:3000/admin/new-password?email='+request.body.email+'">create new password</a></p>'+
          '<h3>Thanks and Regards</h3>'+
          '<h5>Team Book Inventory</h5>';
          await nodemailer.sendEmail(request.body.email,emailContent)
          return response.render("index.ejs",{message: 'Check your email to create new password',currentUser: request.session.current_user});
         }
         catch(err){
            return response.render('index.ejs',{message: 'Something went wrong.',currentUser: request.session.current_user});
         }
       }
       else
        return response.render("index.ejs",{message: 'Invalid email id',currentUser: request.session.current_user});
   }).catch(err=>{
       console.log(err);
   });
}
exports.verifyAccount = (request,response,next)=>{
   //console.log(request.query);
   if(request.query.email){
      Admin.verifyAccount(request.query.email).then(result=>{
         if(result.affectedRows!=0)
           return response.render('index.ejs',{message: 'you are verified. please signin',currentUser: request.session.current_user});
      }).catch(err=>{
         return response.send("Bad Request....");
      });
   }
}
exports.signup = (request,response)=>{
   const errors = validationResult(request);
   if(!errors.isEmpty())
    return response.render('signup.ejs',{validationErrors: errors.array(),currentUser: request.session.current_user});
  
   let admin = new Admin();
   admin.email = request.body.email;
   admin.password = request.body.password;
   admin.signupAdmin().then(async result=>{
      try{
        let emailContent = '<h1>Welcome '+admin.email+'</h1>'+
        '<p>Thanks to visit us. Please click on below link to verify account</p>'+
        '<p><a href="http://localhost:3000/admin/verify?email='+admin.email+'">Verify account</a></p>'+
        '<h3>Thanks and Regards</h3>'+
        '<h5>Team Book Inventory</h5>'; 
        await nodemailer.sendEmail(admin.email,emailContent);
        return response.render("index.ejs",{message: 'Please verify your account',currentUser: request.session.current_user});
      }
      catch(err){
         console.log(err);
      }
   }).catch(err=>{
      return response.send("Oops! Something went wrong");
   });
}