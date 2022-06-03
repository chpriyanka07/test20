exports.addProductPage = (request,response,next)=>{
    return response.render("add-product.ejs",{currentUser: request.session.current_user});
}