exports.indexPage = (request,response,next)=>{
    return response.render('index.ejs',{message:''});
}
exports.signupPage = (request,response,next)=>{
    return response.render('signup.ejs',{validationErrors: []});
}