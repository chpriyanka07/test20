const pool = require('../database/dbconfig');
module.exports = class Admin{
    constructor(id,email,password){
        this.id = id;
        this.email = email;
        this.password = password;
    }

    authenticateAdmin(){
        return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
              if(!err){
                let sql = "select * from admin where email = ? and password = ?";
                con.query(sql,[this.email,this.password],(err,result)=>{
                    if(!err){
                      resolve(result);
                    }
                    else
                      reject(err);
                });
              }
              else
                reject(err);
          });
        });
    }
}