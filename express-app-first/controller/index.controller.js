const pool = require('../database/dbconfig');
exports.signin = (request,response,next)=>{
    let email = request.body.email;
    let password = request.body.password;
    pool.getConnection((err,con)=>{
      if(!err){
         let sql = "select * from admin where email='"+email+"' and password='"+password+"'";
         con.query(sql,(err,result)=>{
            con.release();
            if(!err){
              if(result.length!=0)
                return response.render('admin_dashboard.ejs');
            }
            else {
              console.log(err);
            }
         });
      }
      else
        console.log(err);
    });
} 
exports.signinPage = (request,response,next)=>{
      return response.render('login.ejs');
}