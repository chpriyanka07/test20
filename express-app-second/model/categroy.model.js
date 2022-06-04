const pool = require('../util/dbconfig');
module.exports = class Category{
    constructor(id,categoryName){
        this.id = id;
        this.categoryName = categoryName;
    }

    static getCategoryList(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "select * from category";
                   con.query(sql,(err,result)=>{
                       con.release();
                       err ? reject(err) : resolve(result);
                   });
                }
                else reject(err);
            });
        });
    }
}