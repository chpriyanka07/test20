exports.isAuthenticate = (request,response,next)=>{
    if(request.session.current_user)
      next();
    else
      return response.redirect("/");  
}