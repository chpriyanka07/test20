exports.indexPage = (request,response,next)=>{
    return response.render('index.ejs',{message:'',currentUser: request.session.current_user});
}
exports.signupPage = (request,response,next)=>{
    return response.render('signup.ejs',{validationErrors: [],currentUser: request.session.current_user});
}