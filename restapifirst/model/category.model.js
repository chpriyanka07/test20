const pool = require('../util/dbconfig');
module.exports = class Category{
    constructor(id,categoryName){
        this.id = id;
        this.categoryName = categoryName;
    }
    static deleteCategory(id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql  = "delete from category where id=?";
                   con.query(sql,[id*1],(err,result)=>{
                       con.release();
                       err ? reject(err) : resolve(result);
                   })
                }
                else reject(errr);
            });
         });
    }

    
    static getCategoryList(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
               if(!err){
                  let sql  = "select * from category";
                  con.query(sql,(err,result)=>{
                      con.release();
                      err ? reject(err) : resolve(result);
                  })
               }
               else reject(errr);
           });
        });
    }
}