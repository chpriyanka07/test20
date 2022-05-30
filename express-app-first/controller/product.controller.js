const Category = require('../model/category.model');
const Product = require('../model/product.model');
const { validationResult } = require('express-validator');
exports.updateProduct = (request,response,next)=>{
  let product = new Product();
  product.id = request.body.id;
  product.productName = request.body.bookName;
  product.productPrice = request.body.price;
  product.productDescription = request.body.productDescription
  product.categoryId = request.body.categoryId;
  Product.update(product).then(result=>{
    return response.redirect("/product/product-list");
  }).catch(err=>{
    console.log(err);
  });

}
exports.editProductPage = (request,response,next)=>{
    let productId = request.params.id;
    if(isNaN(productId))
      return response.send('Something went wrong....');
    else{
      Promise.all([Category.getCategoryList(),Product.getProductById(productId)])
       .then(result=>{
         return response.render('edit-product.ejs',{categoryList: result[0],product: result[1][0]});
      }).catch(err=>{
        console.log(err);
        return response.send('Oops! something went wrong...');
      });
       
    }  
}

exports.deleteProduct = (request,response,next)=>{
   let productId = request.params.id;
   console.log(productId);
   if(isNaN(productId))
     return response.send("Something went wrong......");
   else{
     Product.deleteProduct(productId)
     .then(result=>{
        if(result.affectedRows!=0)
          return response.redirect("/product/product-list");
        return response.send("Something went wrong.....");  
     }).catch(err=>{
       console.log(err);
     });
   }

}
exports.productList = (request,response,next)=>{
     Product.getProductList()
     .then(result=>{
       console.log(result);
       return response.render('product-list.ejs',{productList: result});
     }).catch(err=>{
       console.log(err);
     });
}
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
    let errors = validationResult(request);
    if(!errors.isEmpty()){
      console.log(errors.array()); 
      return response.send("Bad Request..........");
    }
    let product = new Product();
    product.productName = request.body.bookName;
    product.productPrice = request.body.price;
    product.productDescription = request.body.description;
    product.categoryId = request.body.categoryId;
    console.log(product);
    product.save().then(_result=>{
      //return response.render('add-product.ejs');
      return response.redirect('/product/add-product');
    }).catch(err=>{
      console.log(err);
    });
}