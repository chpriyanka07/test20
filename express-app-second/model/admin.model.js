const pool = require('../util/dbconfig');
module.exports = class Admin{
    constructor(id,email,password,status){
        this.id = id;
        this.email = email;
        this.password = password;
        this.status = status;
    }
    static verifyAccount(email){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
               if(!err){
                 let sql = "update admin set status = ? where email =?";
                 con.query(sql,['true',email],(err,result)=>{
                     con.release();
                     err ? reject(err) : resolve(result);
                 });
               }
               else reject(err);
            });
        });
    }
    signupAdmin(){
      return new Promise((resolve,reject)=>{
         pool.getConnection((err,con)=>{
             if(!err){
                let sql = "insert into admin(email,password) values(?,?)";
                con.query(sql,[this.email,this.password],(err,result)=>{
                    con.release();
                    err ? reject(err) : resolve(result);
                })
             }
             else reject(err);
         });   
      });
    }
}