const pool = require('../database/dbconfig');
const Admin =  require('../model/admin.model');
exports.signin = (request,response,next)=>{
    let email = request.body.email;
    let password = request.body.password;
    // encapsulate this data into the admin model object
    let admin = new Admin(null,email,password);
    admin.authenticateAdmin()
    .then(result=>{
      result.length!=0 ? response.render('admin_dashboard.ejs') : console.log('Login failed..');
    }).catch(err=>{
      console.log(err);
    });
} 
exports.signinPage = (request,response,next)=>{
      return response.render('login.ejs');
}