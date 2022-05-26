const pool = require('../database/dbconfig');
module.exports = class Product{
    constructor(id,productName,productPrice,productDescription,categoryId){
       this.id = id;
       this.productName = productName;
       this.productDescription = productDescription;
       this.categoryId = categoryId;
       this.productPrice = productPrice;
    }
    save(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
              if(!err){
                 let sql = "insert into product(productName,productPrice,productDescription,categoryId) values(?,?,?,?)";
                 con.query(sql,[this.productName,this.productPrice*1,this.productDescription,this.categoryId*1],(err,result)=>{
                   con.release();
                   err ? reject(err) : resolve(result);
                 });
              }
              else
                reject(err);
           });
        });
    }
}
