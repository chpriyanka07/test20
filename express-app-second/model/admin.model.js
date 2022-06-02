const pool = require('../util/dbconfig');
module.exports = class Admin{
    constructor(id,email,password,status){
        this.id = id;
        this.email = email;
        this.password = password;
        this.status = status;
    }
    authenticateAdmin(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "select * from admin where email =? and password=? and status=?";
                   con.query(sql,[this.email,this.password,"true"],(err,result)=>{
                     con.release();
                     err ? reject(err) : resolve(result);
                   });
                }
                else 
                  reject(err);
             });
        });
    }
    updatePassword(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "update admin set password=? where email=?";
                   con.query(sql,[this.password,this.email],(err,result)=>{
                     con.release();
                     err ? reject(err) : resolve(result);
                   });
                }
                else 
                  reject(err);
             });
        });
    }
    static checkEmail(email){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
               if(!err){
                  let sql = "select * from admin where email = ?";
                  con.query(sql,[email],(err,result)=>{
                    con.release();
                    err ? reject(err) : resolve(result);
                  });
               }
               else 
                 reject(err);
            });
        });
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