const { response } = require('express');
const Category = require('../model/categroy.model');
const Book = require('../model/book.model');
exports.saveProduct = (request,response,next)=>{
    console.log(request.file);
    console.log("--------------------");
    console.log(request.body);

    let book = new Book();
    
    if(request.file)
      book.bookImage = request.file.filename;
    else
     book.bookImage = '';
    book.bookName = request.body.bookName;
    book.bookPrice = request.body.bookPrice*1;
    book.bookDescription = request.body.bookDescription;
    book.categoryId = request.body.categoryId*1;
    
    book.save().then(result=>{
        return response.send("Book Saved...");
    }).catch(err=>{
        console.log(err);
        return response.send("Book Not Saved...");
    });
}
exports.addProductPage = (request,response,next)=>{
    Category.getCategoryList()
    .then(result=>{
        console.log(result);
        return response.render("add-product.ejs",{currentUser: request.session.current_user,categoryList: result});
    }).catch(err=>{
        console.log(err);
    });   
}