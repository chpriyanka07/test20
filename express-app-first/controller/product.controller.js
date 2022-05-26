const Category = require('../model/category.model');
const Product = require('../model/product.model');
exports.addProductPage = (request,response,next)=>{
    Category.getCategoryList()
    .then(result=>{
        console.log(result);
        return response.render('add-product.ejs',{categoryList: result});
    }).catch(err=>{
        console.log(err);
    });
};
exports.saveProduct = (request,response,next)=>{
    console.log(request.body);
    let product = new Product();
    product.productName = request.body.bookName;
    product.productPrice = request.body.price;
    product.productDescription = request.body.description;
    product.categoryId = request.body.categoryId;
    console.log(product);
    product.save().then(result=>{
      //return response.render('add-product.ejs');
      return response.redirect('/product/add-product');
    }).catch(err=>{
      console.log(err);
    });
}