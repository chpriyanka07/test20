const pool = require('../util/dbconfig');
module.exports = class Admin{
    constructor(id,email,password,status){
        this.id = id;
        this.email = email;
        this.password = password;
        this.status = status;
    }
    signin(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
               if(!err){
                 let sql = "select * from admin where email=? and password = ?";
                 con.query(sql,[this.email,this.password],(err,result)=>{
                     con.release();
                     err ? reject(err) : resolve(result);
                 })
               }
               else reject(err);
            });
        });
    }
    getAdmin(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
               if(!err){
                 let sql = "select * from admin where email=?";
                 con.query(sql,[this.email],(err,result)=>{
                     con.release();
                     err ? reject(err) : resolve(result);
                 })
               }
               else reject(err);
            });
        }); 
    }
    save(){
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