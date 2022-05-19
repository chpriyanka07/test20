
exports.signin = (request,response,next)=>{
    let email = request.body.email;
    let password = request.body.password;
    if(email == 'admin@gmail.com' && password == '1234')
      return response.render('admin_dashboard.ejs');
    else
      return response.send("Login Failed..");  
} 
exports.signinPage = (request,response,next)=>{
      return response.render('login.ejs');
}