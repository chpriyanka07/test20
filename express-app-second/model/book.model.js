const pool = require('../util/dbconfig');
module.exports = class Book{
    constructor(id,bookName,bookPrice,categoryId,bookImage,bookDescription){
        this.id = id;
        this.bookPrice = bookPrice;
        this.bookName = bookName;
        this.categoryId = categoryId;
        this.bookImage = bookImage;
        this.bookDescription = bookDescription;
    }
    save(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "insert into book(bookName,bookPrice,bookDescription,categoryId,bookImage) values(?,?,?,?,?)";
                   con.query(sql,[this.bookName,this.bookPrice,this.bookDescription,this.categoryId,this.bookImage],(err,result)=>{
                       con.release();
                       err ? reject(err) : resolve(result);
                   });
                }
                else reject(err);
            });
        });
    }
}
