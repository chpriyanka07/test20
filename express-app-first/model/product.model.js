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
    static getProductList(){
       return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
             if(!err){
               let sql = "select product.id,product.productName,product.productPrice,category.categoryName,product.categoryId from product inner join category on product.categoryId = category.id";
               con.query(sql,(err,result)=>{
                  con.release();
                  err ? reject(err) : resolve(result);
               })
             }
             else
              reject(err);
          });
       });
    }
    static deleteProduct(productId){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
              if(!err){
                let sql = "delete from product where id = ?";
                con.query(sql,[productId*1],(err,result)=>{
                   con.release();
                   err ? reject(err) : resolve(result);
                });
              }
              else
                reject(err);
           })
        });       
    }
    static getProductById(productId){
       return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
             if(!err){ 
                let sql = "select * from product where id = ?";
                con.query(sql,[productId*1],(err,result)=>{
                   con.release();
                   err ? reject(err) : resolve(result);
                });
             }
             else
               reject(err);
          });
       });
    }
    static update(product){
       return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
             if(!err){
               let sql = "update product set productName=?,productPrice=?,productDescription=?,categoryId=? where id=?";
               con.query(sql,[product.productName,product.productPrice*1,product.productDescription,product.categoryId*1,product.id*1],(err,result)=>{
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


