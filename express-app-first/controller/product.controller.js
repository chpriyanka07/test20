const Category = require('../model/category.model');
exports.addProductPage = (request,response,next)=>{
    Category.getCategoryList()
    .then(result=>{
        console.log(result);
        return response.render('add-product.ejs');
    }).catch(err=>{
        console.log(err);
    });
};